"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1038],{62341:(t,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>m,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var e=i(74848),a=i(28453);const r={},m="\u23ed \u7ebf\u6027\u4ee3\u6570\u4e0e\u7a7a\u95f4\u89e3\u6790\u51e0\u4f55 \u4e0b",s={id:"cnss/4",title:"\u23ed \u7ebf\u6027\u4ee3\u6570\u4e0e\u7a7a\u95f4\u89e3\u6790\u51e0\u4f55 \u4e0b",description:"\u9898\u76ee",source:"@site/docs/cnss/4.md",sourceDirName:"cnss",slug:"/cnss/4",permalink:"/site/docs/cnss/4",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\uddf3 \u6559\u6211\u5531\u7968",permalink:"/site/docs/cnss/3"},next:{title:"\ud83d\udc0d \u770b\u770b\u86c7",permalink:"/site/docs/cnss/5"}},o={},l=[{value:"\u9898\u76ee",id:"\u9898\u76ee",level:2},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:2},{value:"\u591a\u7ebf\u7a0b",id:"\u591a\u7ebf\u7a0b",level:3},{value:"\u7ebf\u7a0b\u6c60\u5316",id:"\u7ebf\u7a0b\u6c60\u5316",level:3},{value:"CUDA",id:"cuda",level:3}];function c(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h1,{id:"-\u7ebf\u6027\u4ee3\u6570\u4e0e\u7a7a\u95f4\u89e3\u6790\u51e0\u4f55-\u4e0b",children:"\u23ed \u7ebf\u6027\u4ee3\u6570\u4e0e\u7a7a\u95f4\u89e3\u6790\u51e0\u4f55 \u4e0b"}),"\n",(0,e.jsx)(n.h2,{id:"\u9898\u76ee",children:"\u9898\u76ee"}),"\n",(0,e.jsxs)(n.p,{children:["\u901a\u8fc7",(0,e.jsx)(n.strong,{children:"\u5e76\u884c\u8ba1\u7b97"}),"\u52a0\u901f\u77e9\u9635\u8fd0\u7b97\u3002"]}),"\n",(0,e.jsx)(n.h2,{id:"\u9898\u89e3",children:"\u9898\u89e3"}),"\n",(0,e.jsx)(n.h3,{id:"\u591a\u7ebf\u7a0b",children:"\u591a\u7ebf\u7a0b"}),"\n",(0,e.jsx)(n.p,{children:"\u5148\u8bd5\u8bd5\u7b80\u5355\u7684\u591a\u7ebf\u7a0b\uff1a"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\n#include <string>\n#include <functional>\n#include <chrono>\n#include <vector>\n#include <thread>\n#include <future>\nusing namespace std;\n\n\ndouble timeit(std::function<void()> test) {\n    auto start = std::chrono::system_clock::now();\n    test();\n    auto stop = std::chrono::system_clock::now();\n    std::chrono::duration<double, std::milli> time = stop - start;\n    return time.count();\n}\n\nclass matrix {\n    size_t m, n;\n    std::vector<int64_t> e;\npublic:\n    explicit matrix(size_t m, size_t n): m(m), n(n), e(m * n) {}\n    void random() {\n        for (size_t i = 0; i < m; ++i) \n            for (size_t j = 0; j < n; ++j) \n                at(i, j) = rand();\n    }\n    matrix(matrix const& that) = default;\n    matrix(matrix&&) = default;\n    matrix& operator=(matrix const& that) = default;\n    matrix& operator=(matrix&& that) = default;\n    int64_t& at(size_t i, size_t j) { return e[i * m + j]; }\n    int64_t const& at(size_t i, size_t j) const { return e[i * m + j]; }\n    \n    matrix const& operator+=(matrix const& that) {\n        assert(m == that.m && n == that.n);\n        for (size_t i = 0; i < m; ++i) for (size_t j = 0; j < n; ++j) at(i, j) += that.at(i, j);\n        return *this;\n    }\n\n    matrix operator+(matrix that) const { return that += *this; }\n\n    matrix submat(size_t z, size_t w, size_t u, size_t v) const {\n        matrix sub(u, v);\n        for (size_t i = 0; i < u; ++i) \n            for (size_t j = 0; j < v; ++j) \n                sub.at(i, j) = at(z + i, w + j);\n        return sub;\n    }\n\n    matrix mul_plain(matrix const& that) const {\n        size_t p = that.m;\n        assert(n == p);\n        matrix product(m, that.n);\n        for (size_t i = 0; i < m; ++i) \n            for (size_t j = 0; j < n; ++j) {\n                for (size_t k = 0; k < p; ++k) \n                    product.at(i, j) += at(i, k) * that.at(k, j);\n            }\n        return product;\n    }\n\n    matrix mul_recursive(matrix const& that, matrix inner_product(matrix const&, matrix const&, matrix const&, matrix const&)) const {\n        assert(m == that.m && n == that.n);\n        if (m == 1 && n == 1) {\n            matrix m(1, 1);\n            m.at(0, 0) = at(0, 0) * that.at(0, 0);\n            return m;\n        }\n        matrix A11 = submat(0, 0, m / 2, n / 2);\n        matrix A12 = submat(0, n / 2, m / 2, n - n / 2);\n        matrix A21 = submat(m / 2, 0, m - m / 2, n / 2);\n        matrix A22 = submat(m / 2, n / 2, m - m / 2, n - n / 2);\n        matrix B11 = that.submat(0, 0, m / 2, n / 2);\n        matrix B12 = that.submat(0, n / 2, m / 2, n - n / 2);\n        matrix B21 = that.submat(m / 2, 0, m - m / 2, n / 2);\n        matrix B22 = that.submat(m / 2, n / 2, m - m / 2, n - n / 2);\n        auto C11_ = std::async(inner_product, A11, B11, A12, B21);\n        auto C12_ = std::async(inner_product, A11, B12, A12, B22);\n        auto C21_ = std::async(inner_product, A21, B11, A22, B21);\n        auto C22_ = std::async(inner_product, A21, B12, A22, B22);\n        matrix C11 = C11_.get();\n        matrix C12 = C12_.get();\n        matrix C21 = C21_.get();\n        matrix C22 = C22_.get();\n        matrix r(m, n);\n        for (size_t i = 0; i < C11.m; ++i) \n            for (size_t j = 0; j < C11.n; ++j)\n                r.at(i, j) = C11.at(i, j);\n        for (size_t i = 0; i < C12.m; ++i) \n            for (size_t j = 0; j < C12.n; ++j)\n                r.at(i, C11.n + j) = C12.at(i, j);\n        for (size_t i = 0; i < C21.m; ++i) \n            for (size_t j = 0; j < C21.n; ++j)\n                r.at(C11.m + i, j) = C21.at(i, j);\n        for (size_t i = 0; i < C22.m; ++i) \n            for (size_t j = 0; j < C22.n; ++j)\n                r.at(C11.m + i, C11.n + j) = C22.at(i, j);\n        return r;\n    }\n\n    matrix mul_parellel(matrix const& that) const {\n        return mul_recursive(that, [](matrix const& a, matrix const& b, matrix const& c, matrix const& d) {\n            return a.mul_plain(b) + c.mul_plain(d);\n        });\n    }\n    \n    matrix mul_parellel2(matrix const& that) const {\n        return mul_recursive(that, [](matrix const& a, matrix const& b, matrix const& c, matrix const& d) {\n            return a.mul_parellel(b) + c.mul_parellel(d);\n        });\n    }\n\n    matrix mul_parellel3(matrix const& that) const {\n        return mul_recursive(that, [](matrix const& a, matrix const& b, matrix const& c, matrix const& d) {\n            return a.mul_parellel2(b) + c.mul_parellel2(d);\n        });\n    }\n\n    matrix mul_parellel4(matrix const& that) const {\n        return mul_recursive(that, [](matrix const& a, matrix const& b, matrix const& c, matrix const& d) {\n            return a.mul_parellel3(b) + c.mul_parellel3(d);\n        });\n    }\n\n    bool operator==(matrix const& that) const {\n        return m == that.m && n == that.n && e == that.e;\n    }\n};\n\nvoid verify(matrix (matrix::* std)(matrix const&) const, matrix (matrix::* test)(matrix const&) const, const char* impl) {\n    srand(1);\n    for (int i = 0; i < 1000; ++i) {\n        matrix m1(16, 16), m2(16, 16);\n        m1.random(); m2.random();\n        if ((m1.*std)(m2) != (m1.*test)(m2)) {\n            fprintf(stderr, "Invalid implementation: %s\\n", impl);\n            exit(-1);\n        }\n    }\n    fprintf(stdout, "Valid implementation: %s\\n", impl);\n}\n\ndouble timeit(matrix (matrix::* test)(matrix const&) const, int size, int times, const char* impl, double base = 0) {\n    double time = timeit([=] {\n        srand(1);\n        for (int i = 0; i < times; ++i) {\n            matrix m1(size, size), m2(size, size);\n            m1.random(); m2.random();\n            (m1.*test)(m2);\n        }\n    });\n    printf("\'%s\' algorithm took %.2f ms to complete %d times %d x %d matrices multiplication", impl, time, times, size, size);\n    if (base && base != time) {\n        printf(", %.2f%% ", abs(base - time) / base * 100); \n        if (base > time) printf("faster");\n        else printf("slower");\n    }\n    puts("");\n    return time;\n}\n\n\nint main() {\n    verify(&matrix::mul_plain, &matrix::mul_parellel, "parellel");\n    double base = timeit(&matrix::mul_plain, 1024, 1, "sequence");\n    timeit(&matrix::mul_parellel, 1024, 1, "parellel", base);\n    timeit(&matrix::mul_parellel2, 1024, 1, "parellel2", base);\n    timeit(&matrix::mul_parellel3, 1024, 1, "parellel3", base);\n    timeit(&matrix::mul_parellel4, 1024, 1, "parellel4", base);\n}\n'})}),"\n",(0,e.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{children:"Valid implementation: parellel\n'sequence' algorithm took 3920.91 ms to complete 1 times 1024 x 1024 matrices multiplication\n'parellel' algorithm took 905.67 ms to complete 1 times 1024 x 1024 matrices multiplication, 76.90% faster\n'parellel2' algorithm took 239.29 ms to complete 1 times 1024 x 1024 matrices multiplication, 93.90% faster\n'parellel3' algorithm took 434.92 ms to complete 1 times 1024 x 1024 matrices multiplication, 88.91% faster\n'parellel4' algorithm took 1317.48 ms to complete 1 times 1024 x 1024 matrices multiplication, 66.40% faster\n"})}),"\n",(0,e.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\u6700\u521d\u7684\u4f18\u5316\u6548\u679c\u8fd8\u662f\u5f88\u660e\u663e\u7684\uff0c\u6211\u5c06\u4e00\u4e2a\u77e9\u9635\u5206\u4e3a\u56db\u4e2a\u5c0f\u77e9\u9635\u518d\u8fdb\u884c\u4e58\u6cd5\u8ba1\u7b97\uff0c\u5f97\u5230\u7684\u7ed3\u679c\u901a\u8fc7\u5185\u79ef\u5f97\u5230\u7ed3\u679c\u7684\u5b50\u77e9\u9635\u3002\u5982\u6b64\u518d\u5206\u4e00\u6b21\uff0c\u6548\u679c\u8fbe\u5230\u6700\u597d\uff0c\u53ef\u5982\u679c\u518d\u5206\uff0c\u6548\u7387\u4e0d\u589e\u53cd\u964d\u4e86\u3002\u8fd9\u662f\u56e0\u4e3a\u5f00\u7ebf\u7a0b\u4e0d\u662f\u6ca1\u6709\u4ee3\u4ef7\u7684\uff0c\u5206\u7684\u6b21\u6570\u8fc7\u591a\u5fc5\u7136\u9020\u6210\u5e38\u6570\u8fc7\u5927\u3002"}),"\n",(0,e.jsx)(n.h3,{id:"\u7ebf\u7a0b\u6c60\u5316",children:"\u7ebf\u7a0b\u6c60\u5316"}),"\n",(0,e.jsx)(n.p,{children:"\u6b64\u5916\u4f18\u5316\u591a\u7ebf\u7a0b\u7684\u4e00\u4e2a\u91cd\u8981\u65b9\u6cd5\u5c31\u662f\u7ebf\u7a0b\u6c60\u5316\u3002\u8003\u8651\u5230\u5f00\u7ebf\u7a0b\u7684\u5de8\u5927\u5f00\u9500\uff0c\u6211\u4eec\u53ef\u4ee5\u51c6\u5907\u4e00\u7ec4\u7ebf\u7a0b\u653e\u5230\u7ebf\u7a0b\u6c60\u4e2d\uff0c\u9700\u8981\u8fdb\u884c\u8ba1\u7b97\u65f6\u5c06\u4efb\u52a1\u4ea4\u7ed9\u7ebf\u7a0b\u6c60\uff0c\u7ebf\u7a0b\u6c60\u5bfb\u627e\u7a7a\u95f2\u7684\u7ebf\u7a0b\u6267\u884c\u4efb\u52a1\u3002"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-cpp",children:'// ...\n\n// use https://github.com/progschj/ThreadPool\n#include "ThreadPool.h"\n\nThreadPool pool(100);\nbool pooled;\n\ntemplate<typename Fn, typename... Args>\n[[nodiscard]] inline auto my_async(Fn&& fn, Args&&... args) {\n    return pooled \n    ? pool.enqueue(std::forward<Fn>(fn), std::forward<Args>(args)...) \n    : std::async(std::forward<Fn>(fn), std::forward<Args>(args)...);\n}\n\n// ...\n        auto C11_ = my_async(inner_product, A11, B11, A12, B21);\n        auto C12_ = my_async(inner_product, A11, B12, A12, B22);\n        auto C21_ = my_async(inner_product, A21, B11, A22, B21);\n        auto C22_ = my_async(inner_product, A21, B12, A22, B22);\n// ...\n\nint main() {\n    double base = timeit(&matrix::mul_plain, 1024, 1, "sequence");\n    timeit(&matrix::mul_parellel, 1024, 1, "unpooled", base);\n    timeit(&matrix::mul_parellel2, 1024, 1, "unpooled2", base);\n    timeit(&matrix::mul_parellel3, 1024, 1, "unpooled3", base);\n    timeit(&matrix::mul_parellel4, 1024, 1, "unpooled4", base);\n    pooled = true;\n    timeit(&matrix::mul_parellel, 1024, 1, "pooled", base);\n    timeit(&matrix::mul_parellel2, 1024, 1, "pooled2", base);\n    timeit(&matrix::mul_parellel3, 1024, 1, "pooled3", base);\n    timeit(&matrix::mul_parellel4, 1024, 1, "pooled4", base);\n}\n'})}),"\n",(0,e.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{children:"'sequence' algorithm took 4011.29 ms to complete 1 times 1024 x 1024 matrices multiplication\n'unpooled' algorithm took 895.97 ms to complete 1 times 1024 x 1024 matrices multiplication, 77.66% faster\n'unpooled2' algorithm took 241.15 ms to complete 1 times 1024 x 1024 matrices multiplication, 93.99% faster\n'unpooled3' algorithm took 439.58 ms to complete 1 times 1024 x 1024 matrices multiplication, 89.04% faster\n'unpooled4' algorithm took 1384.14 ms to complete 1 times 1024 x 1024 matrices multiplication, 65.49% faster\n'pooled' algorithm took 880.25 ms to complete 1 times 1024 x 1024 matrices multiplication, 78.06% faster\n'pooled2' algorithm took 233.02 ms to complete 1 times 1024 x 1024 matrices multiplication, 94.19% faster\n'pooled3' algorithm took 329.14 ms to complete 1 times 1024 x 1024 matrices multiplication, 91.79% faster\n'pooled4' algorithm took 832.20 ms to complete 1 times 1024 x 1024 matrices multiplication, 79.25% faster\n"})}),"\n",(0,e.jsx)(n.p,{children:"\u5b9e\u9645\u4e0a\uff0c\u4e0d\u4ec5\u7ebf\u7a0b\u53ef\u4ee5\u6c60\u5316\uff0c\u5185\u5b58\u4e5f\u53ef\u4ee5\u6c60\u5316\uff08\u8fd9\u91cc\u4e0d\u65ad\u5206\u5c0f\u77e9\u9635\u7528\u7684\u5185\u5b58\u4e5f\u4e0d\u5c11\uff09\uff0c\u4ece\u800c\u51cf\u5c11\u5185\u5b58\u5206\u914d\u548c\u91ca\u653e\u5e26\u6765\u7684\u5e38\u6570\u3002"}),"\n",(0,e.jsx)(n.h3,{id:"cuda",children:"CUDA"}),"\n",(0,e.jsx)(n.p,{children:"\u4f46\u8981\u8bf4\u5230\u77e9\u9635\u5e76\u884c\u8fd0\u7b97\uff0c\u8fd8\u5f97\u662f\u663e\u5361\u3002\u501f\u52a9 CUDA\uff0c\u6211\u53ea\u9700\u8981\u5199\u51fa\u77e9\u9635\u67d0\u4e00\u5143\u7d20\u7684\u7b97\u5f0f\uff0c\u800c\u5e76\u884c\u7684\u4e8b\u5b8c\u5168\u4e0d\u9700\u8981\u81ea\u5df1\u64cd\u5fc3\u3002"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\n#include <string>\n#include <functional>\n#include <chrono>\n#include <vector>\n#include <cassert>\nusing namespace std;\n\n\n#include <cuda.h>\n\ndouble timeit(std::function<void()> test) {\n    auto start = std::chrono::system_clock::now();\n    test();\n    auto stop = std::chrono::system_clock::now();\n    std::chrono::duration<double, std::milli> time = stop - start;\n    return time.count();\n}\n\n\n__global__ void matProduct(int64_t* C, int64_t const* A, int64_t const* B, size_t m, size_t p, size_t n) {\n    size_t idx = blockIdx.x * blockDim.x + threadIdx.x;\n    if (idx >= m * n) return;\n\n    size_t i = idx / m;\n    size_t j = idx % n;\n    int64_t r = 0;\n    for (size_t k = 0; k < p; ++k) {\n        r += A[i * m + k] * B[k * m + j];\n    }\n    C[i * m + j] = r;\n}\n\n\nclass matrix {\n    size_t m, n;\n    std::vector<int64_t> e;\npublic:\n    explicit matrix(size_t m, size_t n): m(m), n(n), e(m * n) {}\n    void random() {\n        for (size_t i = 0; i < m; ++i)\n            for (size_t j = 0; j < n; ++j)\n                at(i, j) = rand();\n    }\n    matrix(matrix const& that) = default;\n    matrix(matrix&&) = default;\n    matrix& operator=(matrix const& that) = default;\n    matrix& operator=(matrix&& that) = default;\n    int64_t& at(size_t i, size_t j) { return e[i * m + j]; }\n    int64_t const& at(size_t i, size_t j) const { return e[i * m + j]; }\n    \n    matrix mul_plain(matrix const& that) const {\n        size_t p = that.m;\n        assert(n == p);\n        matrix product(m, that.n);\n        for (size_t i = 0; i < m; ++i)\n            for (size_t j = 0; j < n; ++j) {\n                for (size_t k = 0; k < p; ++k)\n                    product.at(i, j) += at(i, k) * that.at(k, j);\n            }\n        return product;\n    }\n\n\n    matrix mul_cuda(matrix const& that) const {\n        size_t p = that.m;\n        matrix product(m, n);\n        int64_t *A, *B, *C;\n        size_t size = sizeof(int64_t) * m * n;\n        cudaMalloc(&A, size);\n        cudaMalloc(&B, size);\n        cudaMalloc(&C, size);\n        cudaMemcpy(A, e.data(), size, cudaMemcpyHostToDevice);\n        cudaMemcpy(B, that.e.data(), size, cudaMemcpyHostToDevice);\n        matProduct<<<m, n>>>(C, A, B, m, p, n);\n        cudaDeviceSynchronize();\n        cudaMemcpy(product.e.data(), C, size, cudaMemcpyDeviceToHost);\n        cudaFree(A);\n        cudaFree(B);\n        cudaFree(C);\n        return product;\n    }\n\n    bool operator==(matrix const& that) const {\n        return m == that.m && n == that.n && e == that.e;\n    }\n};\n\nvoid verify(matrix (matrix::* std)(matrix const&) const, matrix (matrix::* test)(matrix const&) const, const char* impl) {\n    srand(1);\n    for (int i = 0; i < 1000; ++i) {\n        matrix m1(16, 16), m2(16, 16);\n        m1.random(); m2.random();\n        if (!((m1.*std)(m2) == (m1.*test)(m2))) {\n            fprintf(stderr, "Invalid implementation: %s\\n", impl);\n            exit(-1);\n        }\n    }\n    fprintf(stdout, "Valid implementation: %s\\n", impl);\n}\n\ndouble timeit(matrix (matrix::* test)(matrix const&) const, int size, int times, const char* impl, double base = 0) {\n    double time = timeit([=] {\n        srand(1);\n        for (int i = 0; i < times; ++i) {\n            matrix m1(size, size), m2(size, size);\n            m1.random(); m2.random();\n            (m1.*test)(m2);\n        }\n    });\n    printf("\'%s\' algorithm took %.2f ms to complete %d times %d x %d matrices multiplication", impl, time, times, size, size);\n    if (base && base != time) {\n        printf(", %.2f%% ", abs(base - time) / base * 100);\n        if (base > time) printf("faster");\n        else printf("slower");\n    }\n    puts("");\n    return time;\n}\n\n\nint main() {\n    verify(&matrix::mul_plain, &matrix::mul_cuda, "cuda");\n    double base1 = timeit(&matrix::mul_plain, 1024, 1, "plain");\n    double base2 = timeit(&matrix::mul_plain, 4096, 1, "plain");\n    timeit(&matrix::mul_cuda, 1024, 1, "cuda", base1);\n    timeit(&matrix::mul_cuda, 4096, 1, "cuda", base2);\n}\n'})}),"\n",(0,e.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{children:"Valid implementation: cuda\n'plain' algorithm took 4126.10 ms to complete 1 times 1024 x 1024 matrices multiplication\n'plain' algorithm took 400662.51 ms to complete 1 times 4096 x 4096 matrices multiplication\n'cuda' algorithm took 119.77 ms to complete 1 times 1024 x 1024 matrices multiplication, 97.10% faster\n'cuda' algorithm took 950.01 ms to complete 1 times 4096 x 4096 matrices multiplication, 99.76% faster\n"})}),"\n",(0,e.jsx)(n.p,{children:"\u6211\u4e13\u95e8\u51c6\u5907\u4e86\u4e00\u4e2a 4096 x 4096 \u7684\u6d4b\u8bd5\u6570\u636e\uff0c\u666e\u901a\u65b9\u6cd5\u77e9\u9635\u8fb9\u957f\u53d8\u5927\u56db\u500d\uff0c\u65f6\u95f4\u53d8\u5927\u4e86\u5c06\u8fd1\u4e00\u767e\u500d\uff0c\u800c CUDA \u53ea\u53d8\u5927\u4e86\u4e0d\u5230\u516b\u500d\u3002"})]})}function u(t={}){const{wrapper:n}={...(0,a.R)(),...t.components};return n?(0,e.jsx)(n,{...t,children:(0,e.jsx)(c,{...t})}):c(t)}},28453:(t,n,i)=>{i.d(n,{R:()=>m,x:()=>s});var e=i(96540);const a={},r=e.createContext(a);function m(t){const n=e.useContext(r);return e.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function s(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:m(t.components),e.createElement(r.Provider,{value:n},t.children)}}}]);