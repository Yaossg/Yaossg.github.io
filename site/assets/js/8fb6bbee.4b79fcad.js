"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[60],{16218:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"/simd","metadata":{"permalink":"/site/blog/simd","source":"@site/blog/simd.md","title":"<experimental/simd> \u521d\u4f53\u9a8c","description":"\u4e4b\u524d\u7528\u975e\u6807\u51c6\u7684 simd \u5199\u8fc7\u77e9\u9635\u4e58\u6cd5\u52a0\u901f\uff0c\u8fd1\u671f\u6ce8\u610f\u5230 C++ \u65b0\u7684 Technical specifications\u2014\u2014Parallelism library extensions v2 \u52a0\u5165\u4e86 ``\u3002\u4e8e\u662f\u6211\u5c1d\u8bd5\u7528\u5b83\u91cd\u5199\u4e86\u4e00\u4e0b\u3002","date":"2023-05-09T15:42:00.000Z","formattedDate":"May 9, 2023","tags":[{"label":"cpp","permalink":"/site/blog/tags/cpp"}],"readingTime":2.52,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"<experimental/simd> \u521d\u4f53\u9a8c","date":"2023-05-09T15:42:00.000Z","tags":["cpp"]},"nextItem":{"title":"\u901f\u901a\u7edf\u8ba1\u5b66","permalink":"/site/blog/statistics"}},"content":"[\u4e4b\u524d\u7528\u975e\u6807\u51c6\u7684 simd \u5199\u8fc7\u77e9\u9635\u4e58\u6cd5\u52a0\u901f](https://yaossg.com/site/docs/cnss/2#\u5411\u91cf\u5316)\uff0c\u8fd1\u671f\u6ce8\u610f\u5230 C++ \u65b0\u7684 Technical specifications\u2014\u2014[Parallelism library extensions v2](https://en.cppreference.com/w/cpp/experimental/parallelism_2) \u52a0\u5165\u4e86 [`<experimental/simd>`](https://en.cppreference.com/w/cpp/experimental/simd)\u3002\u4e8e\u662f\u6211\u5c1d\u8bd5\u7528\u5b83\u91cd\u5199\u4e86\u4e00\u4e0b\u3002\\n\\n```cpp\\n#include <iostream>\\n#include <string>\\n#include <functional>\\n#include <chrono>\\n#include <vector>\\n#include <cstring>\\nusing namespace std;\\n\\n\\ndouble timeit(std::function<void()> test) {\\n    auto start = std::chrono::system_clock::now();\\n    test();\\n    auto stop = std::chrono::system_clock::now();\\n    std::chrono::duration<double, std::milli> time = stop - start;\\n    return time.count();\\n}\\n\\n#include <experimental/simd>\\nnamespace stdx = std::experimental;\\n\\nstruct vec {\\n    constexpr static int N = 256;\\n\\n    stdx::fixed_size_simd<double, 4> a[N];\\n    double& operator[](int x) {\\n        return ((double*) a)[x];\\n    }\\n    const double& operator[](int x) const {\\n        return ((double*) a)[x];\\n    }\\n    double dot(const vec& x) const {\\n        stdx::fixed_size_simd<double, 4> sum = 0;\\n        for (int i = 0; i < N; i++)\\n            sum += a[i] * x.a[i];\\n        return stdx::reduce(sum);\\n    }\\n};\\n\\nclass matrix {\\n    constexpr static size_t m = 1024, n = 1024;\\n    vector<double> e;\\npublic:\\n    explicit matrix(): e(m * n) {}\\n    void random() {\\n        for (size_t i = 0; i < m; ++i)\\n            for (size_t j = 0; j < n; ++j)\\n                at(i, j) = rand();\\n    }\\n    matrix(matrix const& that) = default;\\n    matrix(matrix&&) = default;\\n    matrix& operator=(matrix const& that) = default;\\n    matrix& operator=(matrix&& that) = default;\\n    double& at(size_t i, size_t j) { return e[i * m + j]; }\\n    double const& at(size_t i, size_t j) const { return e[i * m + j]; }\\n\\n    matrix mul_plain(matrix const& that) const {\\n        size_t p = that.m;\\n        matrix product;\\n        for (size_t i = 0; i < m; ++i)\\n            for (size_t j = 0; j < n; ++j) {\\n                for (size_t k = 0; k < p; ++k)\\n                    product.at(i, j) += at(i, k) * that.at(k, j);\\n            }\\n        return product;\\n    }\\n\\n    matrix mul_simd(matrix const& that) const {\\n        vector<vec> lines(m), columns(n);\\n        for (int i = 0; i < m; ++i) {\\n            for (int j = 0; j < n; ++j) {\\n                lines[i][j] = at(i, j);\\n                columns[j][i] = that.at(i, j);\\n            }\\n        }\\n        matrix r;\\n        for (int i = 0; i < m; ++i) {\\n            for (int j = 0; j < n; ++j) {\\n                r.at(i, j) = lines[i].dot(columns[j]);\\n            }\\n        }\\n        return r;\\n    }\\n};\\n\\ndouble timeit(matrix (matrix::* test)(matrix const&) const, int times, const char* impl, double base = 0) {\\n    double time = timeit([=] {\\n        srand(1);\\n        for (int i = 0; i < times; ++i) {\\n            matrix m1, m2;\\n            m1.random(); m2.random();\\n            (m1.*test)(m2);\\n        }\\n    });\\n    printf(\\"\'%5s\' took %.2f ms to complete %d times 1024 x 1024 matrices multiplication\\", impl, time, times);\\n    if (base && base != time) {\\n        printf(\\", %.2f%% \\", abs(base - time) / base * 100);\\n        if (base > time) printf(\\"faster\\");\\n        else printf(\\"slower\\");\\n    }\\n    puts(\\"\\");\\n    return time;\\n}\\n\\n\\nint main() {\\n    double base = timeit(&matrix::mul_plain, 1, \\"plain\\");\\n    timeit(&matrix::mul_simd, 1, \\"simd\\", base);\\n}\\n```\\n\\n\u8f93\u51fa\uff1a\\n\\n```text\\n\'plain\' took 5458.48 ms to complete 1 times 1024 x 1024 matrices multiplication\\n\' simd\' took 232.27 ms to complete 1 times 1024 x 1024 matrices multiplication, 95.74% faster\\n```"},{"id":"/statistics","metadata":{"permalink":"/site/blog/statistics","source":"@site/blog/statistics.md","title":"\u901f\u901a\u7edf\u8ba1\u5b66","description":"\u672c\u6587\u4e3a UESTC \u300a\u6982\u7387\u8bba\u4e0e\u6570\u7406\u7edf\u8ba1\u300b\u8bfe\u7a0b\u7edf\u8ba1\u5b66\u90e8\u5206\uff086-10\u7ae0\uff09\u671f\u672b\u8003\u8bd5\u590d\u4e60\u901f\u901a\u7b14\u8bb0\uff0c\u65e8\u5728\u80cc\u591a\u5206\u3002","date":"2023-02-06T18:13:45.000Z","formattedDate":"February 6, 2023","tags":[{"label":"math","permalink":"/site/blog/tags/math"}],"readingTime":1.305,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"\u901f\u901a\u7edf\u8ba1\u5b66","date":"2023-02-06T18:13:45.000Z","tags":["math"]},"prevItem":{"title":"<experimental/simd> \u521d\u4f53\u9a8c","permalink":"/site/blog/simd"},"nextItem":{"title":"SSO? SOS!","permalink":"/site/blog/sso"}},"content":"\u672c\u6587\u4e3a UESTC \u300a\u6982\u7387\u8bba\u4e0e\u6570\u7406\u7edf\u8ba1\u300b\u8bfe\u7a0b\u7edf\u8ba1\u5b66\u90e8\u5206\uff086-10\u7ae0\uff09\u671f\u672b\u8003\u8bd5\u590d\u4e60\u901f\u901a\u7b14\u8bb0\uff0c\u65e8\u5728\u80cc\u591a\u5206\u3002\\n\\n\\n## \u56db\u4e2a\u7edf\u8ba1\u5b66\u5206\u5e03\\n\\n### \u6b63\u6001\u5206\u5e03\\n\\n$$\\nX\\\\sim N(\\\\mu, \\\\sigma^2)\\\\\\\\\\nE(X)=\\\\mu,D(X)=\\\\sigma^2\\n$$\\n\\n### \u5361\u65b9\u5206\u5e03\\n\\n$$\\n\\\\chi^2=\\\\sum_{i=1}^n X_i^2\\\\sim\\\\chi^2(n)\\\\\\\\\\n\\\\text{ \u5176\u4e2d } X \\\\sim N(0, 1)\\\\\\\\\\nE(\\\\chi^2)=n,D(\\\\chi^2)=2n\\n$$\\n\\n### t \u5206\u5e03\\n\\n\u53c8\u53eb\u5b66\u751f\u5206\u5e03\\n$$\\nT=\\\\dfrac{X}{\\\\sqrt{Y/n}} \\\\sim t(n)\\\\\\\\\\n\\\\text{ \u5176\u4e2d } X \\\\sim N(0, 1), Y\\\\sim\\\\chi^2(n)\\n$$\\n\\n### F \u5206\u5e03\\n\\n\u53c8\u53eb\u8d39\u5e0c\u5c14\uff08Fisher\uff09\u5206\u5e03\\n$$\\nF=\\\\dfrac{X/n_1}{Y/n_2}\\\\sim F(n_1,n_2)\\\\\\\\\\n\\\\text{ \u5176\u4e2d } X\\\\sim\\\\chi^2(n_1), Y\\\\sim\\\\chi^2(n_2)\\n$$\\n\\n## \u53c2\u6570\u4f30\u8ba1\u4e0e\u5047\u8bbe\u68c0\u9a8c\\n\\n### \u8ddd\u4f30\u8ba1\\n\\n$$\\n\\\\hat{\\\\mu}=\\\\overline{X}\\\\\\\\\\n\\\\hat{\\\\sigma}^2=\\\\dfrac{n-1}nS^2\\n$$\\n\\n### \u6781\u5927\u4f3c\u7136\u4f30\u8ba1\\n\\n\u6838\u5fc3\u601d\u60f3\u662f\u4f7f\u4f3c\u7136\u51fd\u6570 $L$ \u53d6\u6781\u5927\u503c\u3002\u5373\u6c42\u51fa\u4e00\u4e2a $\\\\theta$\uff0c\u4f7f\u53d6\u51fa\u8fd9\u4e2a\u6837\u672c\u7684\u6982\u7387\u6700\u5927\u3002\\n$$\\nL=\\\\prod_{i=1}^nP(X_i=x_i)\\\\\\\\\\n\\\\ln L=\\\\sum_{i=1}^n \\\\ln P(X_i=x_i)\\\\\\\\\\n\\\\dfrac{\\\\partial \\\\ln L}{\\\\partial\\\\theta}=0\\n$$\\n\\n### \u533a\u95f4\u4f30\u8ba1\u4e0e\u5047\u8bbe\u68c0\u9a8c\\n\\n- \u4f30\u8ba1\u6216\u68c0\u9a8c $\\\\mu$\uff0c\u5f53 $\\\\sigma$ \u5df2\u77e5\u65f6\\n\\n$$\\nU=\\\\dfrac{\\\\overline{X}-\\\\mu}{\\\\sigma/\\\\sqrt{n}}\\\\sim N(0,1)\\n$$\\n\\n- \u4f30\u8ba1\u6216\u68c0\u9a8c $\\\\mu$\uff0c\u5f53 $\\\\sigma$ \u672a\u77e5\u65f6\\n\\n$$\\nT=\\\\dfrac{\\\\overline{X}-\\\\mu}{S/\\\\sqrt{n}}\\\\sim t(n-1)\\n$$\\n\\n- \u4f30\u8ba1\u6216\u68c0\u9a8c $\\\\sigma$\uff0c\u5f53 $\\\\mu$ \u672a\u77e5\u65f6\\n\\n$$\\n\\\\chi^2=\\\\dfrac{n-1}{\\\\sigma^2}S^2\\\\sim\\\\chi^2(n-1)\\n$$\\n\\n\u7b2c\u4e00\u7c7b\u9519\u8bef\uff1a\u5f03\u771f\uff08\u72af\u9519\u6982\u7387\u4e3a $\\\\alpha$\uff09\\n\\n\u7b2c\u4e8c\u7c7b\u9519\u8bef\uff1a\u7eb3\u4f2a\\n\\n## \u7ebf\u6027\u56de\u5f52\\n\\n$$\\nl_{xy}=\\\\sum_{i=1}^nx_iy_i-n\\\\bar{x}\\\\bar{y}\\\\\\\\\\nl_{xx}=\\\\sum_{i=1}^nx_i^2-n\\\\bar{x}^2\\\\\\\\\\nl_{yy}=\\\\sum_{i=1}^ny_i^2-n\\\\bar{y}^2\\\\\\\\\\n\\\\hat{b}=\\\\dfrac{l_{xy}}{l_{xx}}, \\\\hat{a}=\\\\bar{y}-\\\\hat{b}\\\\bar{x}\\\\\\\\\\n\\\\hat{\\\\sigma}^2=\\\\dfrac{l_{yy}-\\\\hat{b}^2l_{xx}}{n-2}\\\\\\\\\\nR=\\\\dfrac{l_{xy}}{\\\\sqrt{l_{xx}l_{yy}}}>R_\\\\alpha(n-2)\\n$$"},{"id":"/sso","metadata":{"permalink":"/site/blog/sso","source":"@site/blog/sso/index.md","title":"SSO? SOS!","description":"\u8fd9\u662f\u6211\u5728\u7f16\u5199\u7f16\u8bd1\u5668\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u4e00\u4e2a\u8ba9\u4eba\u62cd\u6848\u53eb\u7edd\u7684\u9677\u9631\u3002\u7279\u6b64\u8bb0\u5f55\u4e0b\u6765\u3002","date":"2023-01-05T18:23:36.000Z","formattedDate":"January 5, 2023","tags":[{"label":"cpp","permalink":"/site/blog/tags/cpp"}],"readingTime":7.85,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"SSO? SOS!","date":"2023-01-05T18:23:36.000Z","tags":["cpp"]},"prevItem":{"title":"\u901f\u901a\u7edf\u8ba1\u5b66","permalink":"/site/blog/statistics"},"nextItem":{"title":"\u4ee3\u6570\u7ed3\u6784\uff1a\u7fa4\u3001\u73af\u3001\u57df","permalink":"/site/blog/algebraic-structure"}},"content":"\u8fd9\u662f\u6211\u5728\u7f16\u5199\u7f16\u8bd1\u5668\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u4e00\u4e2a\u8ba9\u4eba\u62cd\u6848\u53eb\u7edd\u7684\u9677\u9631\u3002\u7279\u6b64\u8bb0\u5f55\u4e0b\u6765\u3002\\n\\n## \u95ee\u9898\\n\\n\u5047\u8bbe\u4f60\u6b63\u5728\u7f16\u5199\u6e90\u4ee3\u7801\u5904\u7406\u7cfb\u7edf\u3002\u4f60\u8bbe\u8ba1\u4e86\u8fd9\u6837\u4e00\u4e2a\u51fd\u6570\u548c\u7c7b\uff1a\\n```cpp\\nstd::vector<std::string_view> splitLines(std::string_view view) {\\n    std::vector<std::string_view> lines;\\n    const char *p = view.begin(), *q = p, *r = view.end();\\n    while (q != r) {\\n        if (*q++ == \'\\\\n\') {\\n            lines.emplace_back(p, q - 1);\\n            p = q;\\n        }\\n    }\\n    if (p != q) lines.emplace_back(p, q);\\n    return lines;\\n}\\n\\nstruct Source {\\n    std::vector<std::string> snippets;\\n    std::vector<std::string_view> lines;\\n\\n    void append(std::string code) {\\n        snippets.push_back(std::move(code));\\n        for (auto line : splitLines(snippets.back())) {\\n            lines.push_back(line);\\n        }\\n    }\\n};\\n```\\n\\n\u4e3a\u4e86\u6548\u7387\uff0c\u4f60\u6ca1\u6709\u771f\u7684\u53bb\u5206\u5272\u5b57\u7b26\u4e32\u2014\u2014\u800c\u662f\u5229\u7528 `string_view`\uff0c\u5f15\u7528\u5b57\u7b26\u4e32\u4e2d\u7684\u4e00\u6bb5\u4f5c\u4e3a\u4e00\u884c\uff0c\u5e76\u628a\u5b83\u4eec\u5b58\u5165 `lines`\u3002\u4f46\u662f `string_view` \u5e76\u6ca1\u6709\u5b57\u7b26\u4e32\u7684\u6240\u6709\u6743\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u5b83\u5f15\u7528\u7684\u5b57\u7b26\u4e32\u4e0d\u88ab\u56de\u6536\uff0c\u518d\u4f7f\u7528 `snippets` \u6765\u4fdd\u5b58\u8fd9\u4e9b\u5b57\u7b26\u4e32\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff1a\\n\\n![](snippets.png)\\n\\n\u4e0b\u9762\u6211\u4eec\u6765\u8bd5\u4e00\u8bd5\uff1a\\n\\n```cpp\\nint main() {\\n    Source source;\\n    source.append(\\"ab\\\\ncd\\\\nef\\");\\n    for (auto line : source.lines) {\\n        std::cout << line << std::endl;\\n    }\\n}\\n```\\n\\n\u8f93\u51fa\uff1a\\n\\n```\\nab\\ncd\\nef\\n```\\n\\n\u5f88\u597d\uff01\\n\\n\u53ef\u662f\uff0c\u5f53\u6211\u4eec\u8bd5\u56fe\u591a\u6b21\u8c03\u7528 append \u7684\u65f6\u5019\\n\\n```cpp\\nint main() {\\n    Source source;\\n    source.append(\\"line 1\\");\\n    source.append(\\"line 2\\");\\n    source.append(\\"line 3\\");\\n    for (auto line : source.lines) {\\n        std::cout << line << std::endl;\\n    }\\n}\\n```\\n\\n\u5927\u8dcc\u773c\u955c\u7684\u4e8b\u60c5\u53d1\u751f\u4e86\uff1a\u8f93\u51fa\u4e86\u4e00\u56e2\u4e71\u7801\uff01\\n\\n## \u601d\u8003\\n\\n\u8f93\u51fa\u4e71\u7801\u539f\u56e0\u6709\u54ea\u4e9b\u5462\uff1f\u4f60\u80af\u5b9a\u5df2\u7ecf\u60f3\u5230\u4e86\u4ee5\u4e0b\u4e24\u79cd\u53ef\u80fd\uff1a\\n\\n- `string` \u7ba1\u7406\u7684 `char[]` \u88ab\u8986\u5199\u6216\u88ab\u91ca\u653e\u4e86\\n- `string_view` \u88ab\u4fee\u6539\u4e86\\n\\n\u5148\u6765\u6d4b\u4e00\u4e0b\u7b2c\u4e00\u79cd\u53ef\u80fd\\n\\n```cpp\\nint main() {\\n    Source source;\\n    source.append(\\"line 1\\");\\n    source.append(\\"line 2\\");\\n    source.append(\\"line 3\\");\\n    for (auto const& snippet : source.snippets) {\\n        std::cout << snippet << std::endl;\\n    }\\n}\\n```\\n\\n\u8f93\u51fa\uff1a\\n\\n```\\nline 1\\nline 2\\nline 3\\n```\\n\\n\u770b\u4e0a\u53bb\u5b57\u7b26\u4e32\u5b8c\u597d\u65e0\u635f\u3002\\n\\n\u518d\u6765\u6d4b\u6d4b\u7b2c\u4e8c\u79cd\u53ef\u80fd\\n\\n```cpp\\nint main() {\\n    Source source;\\n    source.append(\\"line 1\\");\\n    for (auto line : source.lines) {\\n        std::cout << (void*) line.data() << \' \';\\n    }\\n    std::cout << std::endl;\\n    source.append(\\"line 2\\");\\n    for (auto line : source.lines) {\\n        std::cout << (void*) line.data() << \' \';\\n    }\\n    std::cout << std::endl;\\n    source.append(\\"line 3\\");\\n    for (auto line : source.lines) {\\n        std::cout << (void*) line.data() << \' \';\\n    }\\n}\\n```\\n\\n\u8f93\u51fa\uff1a\\n\\n```\\n0x26a40fc18e0\\n0x26a40fc18e0 0x26a40fc1c90\\n0x26a40fc18e0 0x26a40fc1c90 0x26a40fc1d00\\n```\\n\\n`string_view` \u4e5f\u6ca1\u6709\u53d8\u5316\uff01\\n\\n## \u89c4\u5f8b\\n\\n\u4f60\u53ef\u80fd\u767e\u601d\u4e0d\u5f97\u5176\u89e3\u3002\u5148\u522b\u6025\uff0c\u6211\u4eec\u518d\u6765\u505a\u4e00\u4e2a\u5b9e\u9a8c\u3002\\n\\n\u4e4b\u524d\u6211\u4eec\u5c31\u53d1\u73b0\uff0c\u5982\u679c\u53ea `append` \u4e00\u6b21\u662f\u6ca1\u95ee\u9898\u7684\u3002\u90a3\u4e48\u4e0d\u59a8\u6d4b\u8bd5\u4e00\u4e0b\u4e71\u7801\u4e0e `append` \u6b21\u6570\u6709\u6ca1\u6709\u4ec0\u4e48\u5173\u7cfb\u3002\\n\\n```cpp\\nint main() {\\n    Source source;\\n    for (int i = 0; i < 10; ++i) {\\n        source.append(\\"OOO\\");\\n        for (auto line: source.lines) {\\n            if (line == \\"OOO\\") {\\n                std::cout << line << \' \';\\n            } else {\\n                std::cout << \\"***\\" << \' \';\\n            }\\n        }\\n        std::cout << std::endl;\\n    }\\n}\\n```\\n\\n\u8f93\u51fa\uff1a\\n\\n```\\nOOO\\n*** OOO\\n*** *** OOO\\n*** *** OOO OOO\\n*** *** *** *** OOO\\n*** *** *** *** OOO OOO\\n*** *** *** *** OOO OOO OOO\\n*** *** *** *** OOO OOO OOO OOO\\n*** *** *** *** *** *** *** *** OOO\\n*** *** *** *** *** *** *** *** OOO OOO\\n```\\n\\n\u8fd9\u592a\u6709\u89c4\u5f8b\u4e86\uff01\u6bcf\u6b21 `append` \u4e71\u7801\u7684 `string_view` \u6570\u91cf\u8981\u4e48\u4fdd\u6301\u4e0d\u53d8\uff0c\u8981\u4e48\u5c31\u7ffb\u4e00\u500d\uff0c\u8fd9\u4f3c\u4e4e\u6697\u5408\u4e86\u67d0\u4e2a\u5bb9\u5668\u7684\u67d0\u4e2a\u7279\u6027\u3002\u662f\u7684\uff0c`vector`\u3002\u4e8e\u662f\u6211\u4eec\u5bf9\u524d\u9762\u7684 `Source` \u4f5c\u51fa\u4e00\u70b9\u4fee\u6539\uff1a\\n\\n```\\nstruct Source {\\n\\n-   std::vector<std::string> snippets;\\n+   std::deque<std::string> snippets;\\n    \\n};\\n```\\n\\n\u518d\u6267\u884c\u4e0a\u9762\u7684\u4ee3\u7801\uff0c\u8f93\u51fa\uff1a\\n\\n```\\nOOO\\nOOO OOO\\nOOO OOO OOO\\nOOO OOO OOO OOO\\nOOO OOO OOO OOO OOO\\nOOO OOO OOO OOO OOO OOO\\nOOO OOO OOO OOO OOO OOO OOO\\nOOO OOO OOO OOO OOO OOO OOO OOO\\nOOO OOO OOO OOO OOO OOO OOO OOO OOO\\nOOO OOO OOO OOO OOO OOO OOO OOO OOO OOO\\n```\\n\\n\u4fee\u590d\u4e86\uff01\u592a\u68d2\u4e86\uff01\\n\\n\u4f46\uff0c\u8fd9\u5e94\u8be5\u4e0d\u662f `vector` \u7684\u95ee\u9898\u5427\uff1f\\n\\n## \u7b2c\u4e09\u79cd\u53ef\u80fd\\n\\n`vector` \u5728 `size > capacity` \u7684\u65f6\u5019\uff0c\u4f1a\u91cd\u65b0\u5206\u914d\u4e24\u500d\u7684\u7a7a\u95f4\uff0c\u5e76\u628a\u539f\u6765\u7684\u5143\u7d20\u5168\u90e8\u79fb\u52a8\u8fc7\u53bb\u3002\u4f46\u662f\u79fb\u52a8\u7684\u662f `string`\uff0c\u5b83\u7ba1\u7406\u7684 `char[]` \u96be\u9053\u4e5f\u8ddf\u7740\u53d1\u751f\u4e86\u79fb\u52a8\u5417\uff1f\u8fd8\u662f\u8bf4\uff0c\u53d1\u751f\u7684\u4e0d\u662f\u79fb\u52a8\uff0c\u800c\u662f\u590d\u5236\uff1f\\n\\n\u5e26\u7740\u8fd9\u4e2a\u7591\u95ee\uff0c\u6211\u4eec\u518d\u505a\u4e00\u4e2a\u5b9e\u9a8c\uff1a\\n\\n```cpp\\nstruct Observer {\\n    int i;\\n    Observer(int i): i(i) {\\n        std::cout << \\" make \\" << i;\\n    }\\n    Observer(Observer&& other) noexcept: i(other.i) {\\n        std::cout << \\" move \\" << i;\\n    }\\n    Observer(const Observer& other): i(other.i) {\\n        std::cout << \\" copy \\" << i;\\n    }\\n};\\n\\nint main() {\\n    std::vector<Observer> observers;\\n    std::cout << \\"line 1: \\";\\n    observers.emplace_back(1);\\n    std::cout << std::endl << \\"line 2: \\";\\n    observers.emplace_back(2);\\n    std::cout << std::endl << \\"line 3: \\";\\n    observers.emplace_back(3);\\n    std::cout << std::endl << \\"line 4: \\";\\n    observers.emplace_back(4);\\n}\\n```\\n\\n\u8f93\u51fa\uff1a\\n\\n```\\nline 1:  make 1\\nline 2:  make 2 move 1\\nline 3:  make 3 move 1 move 2\\nline 4:  make 4\\n```\\n\\n\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c`Observer` \u79fb\u52a8\u6784\u9020\u5668\u7684 `noexcept` \u662f\u4e0d\u53ef\u4ee5\u7701\u7565\u7684\uff0c\u5426\u5219\u5b83\u4f1a\u4f18\u5148\u9009\u62e9\u590d\u5236\u6784\u9020\u5668\u800c\u4e0d\u662f\u53ef\u80fd\u629b\u51fa\u5f02\u5e38\u7684\u79fb\u52a8\u6784\u9020\u5668\u3002\\n\\n\u7ecf\u8fc7\u67e5\u8be2\uff0c\u6211\u4eec\u53ef\u4ee5\u786e\u8ba4 `string` \u7684\u79fb\u52a8\u6784\u9020\u5668\u662f `noexcept` \u7684\u3002\u53ef\u89c1\u53d1\u751f\u7684\u662f\u79fb\u52a8\u800c\u4e0d\u662f\u590d\u5236\u3002\\n\\n\u4e5f\u5c31\u662f\u8bf4\uff1a\u6211\u4eec\u79fb\u52a8\u4e86 `string`\uff0c\u800c\u5b83\u7ba1\u7406\u7684 `char[]` \u4e5f\u8ddf\u7740\u79fb\u52a8\u4e86\uff01\u4e3a\u4ec0\u4e48\uff1f\\n\\n\u5728\u5f15\u51fa\u4eca\u5929\u7684\u4e3b\u89d2\u4e4b\u524d\uff0c\u6211\u4eec\u518d\u6d4b\u8bd5\u4e00\u4e2a\u4f8b\u5b50\u3002`Source` \u56de\u9000\u5230\u672a\u4fee\u590d\u7684\u7248\u672c\uff0c\u8fd0\u884c\u4e0b\u9762\u7684\u4ee3\u7801\uff1a\\n\\n```cpp\\nint main() {\\n    Source source;\\n    source.append(\\"a very long line 1\\");\\n    source.append(\\"a very long line 2\\");\\n    source.append(\\"a very long line 3\\");\\n    for (auto line : source.lines) {\\n        std::cout << line << std::endl;\\n    }\\n}\\n```\\n\\n\u8f93\u51fa\uff1a\\n\\n```\\na very long line 1\\na very long line 2\\na very long line 3\\n```\\n\\n\u95ee\u9898\u5947\u8ff9\u822c\u7684\u6d88\u5931\u4e86\u3002\\n\\n## SSO\\n\\n\u6ca1\u9519\uff0c\u8fd9\u4e00\u5207\u7684\u7f6a\u9b41\u7978\u9996\u4fbf\u662f\uff1a\u77ed\u5b57\u7b26\u4e32\u4f18\u5316\uff08Short String Optimization\uff0cSSO\uff09\u3002\\n\\n\u8fd9\u662f\u4e00\u79cd\u5e38\u89c1\u7684\u5b57\u7b26\u4e32\u5b9e\u73b0\uff0c\u88ab\u5927\u90e8\u5206\u7684\u6807\u51c6\u5e93\uff08\u5982 GCC libstdc++\u3001Clang libc++\u3001MSVC STL \u7b49\uff09\u91c7\u7528\u3002\u5f53\u5b57\u7b26\u4e32\u6bd4\u8f83\u957f\u7684\u65f6\u5019\uff0c\u5b57\u7b26\u4e32\u4f1a\u88ab\u5b58\u5728\u522b\u5904\uff0c\u5e76\u7528 `string` \u5bf9\u8c61\u4e2d\u7684\u6307\u9488\u5f15\u7528\uff0c\u5982\u6211\u4eec\u9884\u6599\u7684\u4e00\u6837\uff1b\u5f53\u5b57\u7b26\u4e32\u6bd4\u8f83\u77ed\u7684\u65f6\u5019\uff0c\u5b57\u7b26\u4e32\u5c06\u76f4\u63a5\u5b58\u5728 `string` \u5bf9\u8c61\u5185\u90e8\uff01\\n\\n\u4f8b\u5982 libstdc++ \u7684\u5b9e\u73b0\u5982\u4e0b\u56fe\u6240\u793a\uff1a\\n\\n```cpp\\nstd::string s1 = \\"line 1\\";\\nstd::string s2 = \\"a very long line 1\\";\\n```\\n\\n![](sso.png)\\n\\n\u5728\u8fd9\u4e2a\u5b9e\u73b0\u4e2d\uff0c\u77ed\u5b57\u7b26\u4e32\u4f18\u5316\u7684\u9608\u503c\u662f 15\u3002\u672b\u5c3e\u591a\u4f59\u7684\u4e00\u4e2a\u5b57\u7b26\u7528\u6765\u5b58 0\uff0c\u6765\u4fdd\u8bc1\u5b83\u540c\u65f6\u662f\u4e00\u4e2a C-Style String\u3002\u6b64\u65f6 `capacity()` \u6c38\u8fdc\u8fd4\u56de 15\u3002\\n\\n\u7efc\u4e0a\u6240\u8ff0\uff0c\u5f53\u5b57\u7b26\u4e32\u8f83\u77ed\u7684\u65f6\u5019\uff0c\u7531\u5b83\u6784\u9020\u7684 `string_view` \u5b9e\u9645\u4e0a\u662f\u6307\u5411 `string` \u81ea\u5df1\uff08\u7684\u4e00\u90e8\u5206\uff09\u7684\uff01\u90a3\u4e48\u5f53 `string` \u672c\u8eab\u88ab\u79fb\u8d70\uff0c\u5b83\u6240\u5728\u7684\u4f4d\u7f6e\u88ab\u91ca\u653e\uff0c`string_view` \u81ea\u7136\u800c\u7136\u5c31\u5f15\u7528\u4e86\u4e00\u6bb5\u975e\u6cd5\u7684\u5185\u5b58\u3002`deque` \u5728\u63d2\u5165\u65b0\u5143\u7d20\u7684\u65f6\u5019\u4e0d\u4f1a\u79fb\u52a8\u65e7\u5143\u7d20\uff0c\u56e0\u6b64\u907f\u514d\u4e86\u8fd9\u4e2a\u95ee\u9898\u3002\\n\\n## \u540e\u8bb0\\n\\n\u6211\u5b9e\u9645\u4e0a\u5f88\u65e9\u5c31\u4e86\u89e3\u8fc7 SSO\uff0c\u4f46\u662f\u5b9e\u5728\u6ca1\u6599\u5230\u4f1a\u4ee5\u8fd9\u6837\u7684\u5f62\u5f0f\u906d\u9047\uff0c\u8fc7\u7a0b\u66f2\u6298\u79bb\u5947\uff0c\u53f9\u4e3a\u89c2\u6b62\u3002\u53ea\u80fd\u8bf4\u5982\u679c\u6ca1\u6709\u8fd9\u4e2a\u524d\u7f6e\u77e5\u8bc6\u6211\u53ef\u80fd\u8fd8\u5f97\u57cb\u5934\u82e6\u82e6\u5bfb\u627e\u539f\u56e0\u5f88\u957f\u65f6\u95f4\u3002"},{"id":"/algebraic-structure","metadata":{"permalink":"/site/blog/algebraic-structure","source":"@site/blog/algebraic-structure.md","title":"\u4ee3\u6570\u7ed3\u6784\uff1a\u7fa4\u3001\u73af\u3001\u57df","description":"\u7fa4","date":"2022-05-18T20:12:12.000Z","formattedDate":"May 18, 2022","tags":[{"label":"math","permalink":"/site/blog/tags/math"}],"readingTime":1.965,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"\u4ee3\u6570\u7ed3\u6784\uff1a\u7fa4\u3001\u73af\u3001\u57df","date":"2022-05-18T20:12:12.000Z","tags":["math"]},"prevItem":{"title":"SSO? SOS!","permalink":"/site/blog/sso"},"nextItem":{"title":"\u9ad8\u4e2d\u5706\u9525\u66f2\u7ebf\u7ed3\u8bba","permalink":"/site/blog/analytic-geometry"}},"content":"## \u7fa4\\n\\n### \u534a\u7fa4\\n\\n\u82e5 $G\\\\neq\\\\varnothing$ \u4e14\u5bf9\u4e8e\u4e8c\u5143\u8fd0\u7b97\u7b26 $\\\\cdot$ \u6ee1\u8db3\uff1a\\n\\n- $\\\\forall a,b \\\\in G, a \\\\cdot b\\\\in G$\\n- $\\\\forall a,b,c\\\\in G, (a \\\\cdot b)\\\\cdot c=a\\\\cdot(b\\\\cdot c)$\\n\\n\u5219 $G$ \u662f\u534a\u7fa4\uff0c\u8bb0\u4f5c $(G,\\\\cdot)$\\n\\n### \u5355\u4f4d\u5143\\n\\n\u82e5 $\\\\forall a\\\\in G, a\\\\cdot e=e\\\\cdot a=a$\\n\\n\u5219 $e$ \u662f\u5355\u4f4d\u5143\u6216\u5e7a\u5143\\n\\n### \u5e7a\u534a\u7fa4\\n\\n\u82e5 $G$ \u662f\u534a\u7fa4\uff0c\u4e14 $e\\\\in G$\\n\\n\u5219 $G$ \u662f\u5e7a\u534a\u7fa4\\n\\n### \u9006\u5143\\n\\n\u82e5 $a,b\\\\in G\\\\land a\\\\cdot b=b\\\\cdot a=e$\\n\\n\u5219 $a$ $b$ \u4e92\u4e3a\u9006\u5143\\n\\n### \u7fa4\\n\\n\u82e5 $G$ \u662f\u5e7a\u534a\u7fa4\uff0c\u4e14 $\\\\forall a \\\\in G, \\\\exists b\\\\in G \\\\text{ s.t. } a\\\\cdot b=e$\\n\\n\u5219 $G$ \u662f\u7fa4\\n\\n### Abel \u7fa4\\n\\n\u82e5 $G$ \u662f\u7fa4\uff0c\u4e14 $\\\\forall a,b \\\\in G, a \\\\cdot b = b \\\\cdot a$\\n\\n\u5219 $G$ \u662f Abel \u7fa4\u6216\u4ea4\u6362\u7fa4\\n\\n## \u73af\\n\\n### \u73af\\n\\n\u5bf9\u4e8e\u96c6\u5408\u548c\u8fd0\u7b97 $R=(G, +, \\\\cdot)$\uff0c\u6ee1\u8db3\uff1a\\n\\n- $(G, +)$ \u662f Abel \u7fa4\\n- $(G, \\\\cdot)$ \u662f\u534a\u7fa4\\n- $\\\\forall a,b,c\\\\in G, (a + b)\\\\cdot c=a\\\\cdot c + b\\\\cdot c$\\n- $\\\\forall a,b,c\\\\in G, c\\\\cdot(a + b)=c\\\\cdot a + c\\\\cdot b$\\n\\n\u5219 $R$ \u662f\u73af\\n\\n### \u96f6\u5143\\n\\n $(R,+)$ \u79f0\u4e3a $R$ \u7684\u52a0\u6cd5\u7fa4\uff0c\u52a0\u6cd5\u7fa4\u7684\u5355\u4f4d\u5143\u8bb0\u4f5c $0$\uff0c\u79f0\u4e3a $R$ \u7684\u96f6\u5143\\n\\n### \u96f6\u56e0\u5b50\\n\\n\u82e5 $a\\\\in R,\\\\exists b \\\\in R\\\\land b \\\\neq0\\\\text{ s.t. } a\\\\cdot b=0(b\\\\cdot a=0)$\\n\\n\u5219\u79f0 $a$ \u662f\u5de6\uff08\u53f3\uff09\u96f6\u56e0\u5b50\\n\\n### \u6574\u73af\\n\\n\u82e5 $R$ \u81f3\u5c11\u6709\u4e24\u4e2a\u5143\u7d20\uff0c\u4e14\u4e0d\u542b\u975e\u96f6\u96f6\u56e0\u5b50\\n\\n\u5219\u79f0 $R$ \u662f\u6574\u73af\\n\\n### \u5355\u4f4d\u5143\\n\\n\u82e5 $R$ \u662f\u73af\uff0c\u4e14 $1 \\\\in R, \\\\forall a\\\\in R \\\\text{ s.t. } 1\\\\cdot a=a\\\\cdot 1=a$\\n\\n\u5219\u79f0 $1$ \u662f $R$ \u7684\u5355\u4f4d\u5143\u6216\u5e7a\u5143\uff0c$R$ \u4e3a\u6709\u5355\u4f4d\u5143\u7684\u73af\\n\\n### \u4e58\u6cd5\u9006\u5143\\n\\n\u82e5 $a,b\\\\in R\\\\land a\\\\cdot b=b\\\\cdot a=1$ \\n\\n\u5219 $a$ $b$ \u4e92\u4e3a\u4e58\u6cd5\u9006\u5143\\n\\n### \u9664\u73af\\n\\n\u82e5 $R$ \u662f\u6574\u73af\uff0c\u4e14 $\\\\forall a \\\\in R\\\\land a \\\\neq0, \\\\exists b\\\\in R\\\\text{ s.t. } a\\\\cdot b=1$\\n\\n\u5219 $R$ \u662f\u9664\u73af\\n\\n### \u4ea4\u6362\u73af\\n\\n\u82e5 $R$ \u662f\u73af\uff0c\u4e14 $\\\\forall a,b \\\\in G, a \\\\cdot b = b \\\\cdot a$\\n\\n\u5219 $R$ \u662f\u4ea4\u6362\u73af\\n\\n## \u57df\\n\\n\u82e5 $F$ \u662f\u4ea4\u6362\u9664\u73af\\n\\n\u5219 $F$ \u662f\u57df"},{"id":"/analytic-geometry","metadata":{"permalink":"/site/blog/analytic-geometry","source":"@site/blog/analytic-geometry.md","title":"\u9ad8\u4e2d\u5706\u9525\u66f2\u7ebf\u7ed3\u8bba","description":"\u82e5\u692d\u5706\uff08$b^2>0$\uff09\u6216\u53cc\u66f2\u7ebf\uff08$b^2<0$\uff09","date":"2021-06-06T16:25:45.000Z","formattedDate":"June 6, 2021","tags":[{"label":"math","permalink":"/site/blog/tags/math"}],"readingTime":0.265,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"\u9ad8\u4e2d\u5706\u9525\u66f2\u7ebf\u7ed3\u8bba","date":"2021-06-06T16:25:45.000Z","tags":["math"]},"prevItem":{"title":"\u4ee3\u6570\u7ed3\u6784\uff1a\u7fa4\u3001\u73af\u3001\u57df","permalink":"/site/blog/algebraic-structure"}},"content":"\u82e5\u692d\u5706\uff08$b^2>0$\uff09\u6216\u53cc\u66f2\u7ebf\uff08$b^2<0$\uff09\\n$$\\n\\\\frac{x^2}{a^2}+\\\\frac{y^2}{b^2}=1\\n$$\\n\u4e0e\u76f4\u7ebf\\n$$\\ny=kx+m\\n$$\\n\u4ea4\u4e8e$A(x_1,y_1),B(x_2,y_2)$\uff0c\u8054\u7acb\u6d88 $y$\\n$$\\n(b^2+a^2k^2)x^2+2kma^2x+a^2(m^2-b^2)=0\\n$$\\n\u5f97\\n$$\\n\\\\Delta = 4a^2b^2(b^2+a^2k^2 - m^2) \\\\geq 0\\n$$\\n$$\\nx_1+x_2=\\\\frac{-2kma^2}{b^2+a^2k^2},\\nx_1x_2=\\\\frac{a^2(m^2-b^2)}{b^2+a^2k^2}\\n$$\\n$$\\ny_1+y_2=\\\\frac{2mb^2}{b^2+a^2k^2},\\ny_1y_2=\\\\frac{b^2(m^2-a^2k^2)}{b^2+a^2k^2}\\n$$\\n$$\\nx_1y_2+x_2y_1=\\\\frac{-2ka^2b^2}{b^2+a^2k^2}\\n$$\\n$$\\n|x_1y_2-x_2y_1|=|m|\\\\frac{\\\\sqrt{\\\\Delta}}{b^2+a^2k^2}\\n$$\\n$$\\n|AB|=\\\\sqrt{1+k^2}\\\\frac{\\\\sqrt{\\\\Delta}}{b^2+a^2k^2}\\n$$"}]}')}}]);