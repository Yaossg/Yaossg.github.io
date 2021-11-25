const works = document.getElementById("works")

const status_table = {
    "archived": ["Archived", "dark"],
    "progressing": ["Progressing", "primary"],
    "active": ["Active", "success"],
    "inactive": ["Inactive", "secondary"],
    "deprecated": ["Deprecated", "warning"],
    "cancelled": ["Cancelled", "error"]
}

const template = 
`
<div class="col-md-6 col-sm-12">
  <div class="row">
	<div class="col-7">
	  <h4><a href="$link">$title</a></h4>
	</div>
	<div class="col-4">
	  <h5 class="text-right"><span aria-hidden="true"></span><span class="badge badge-$4">$5</span></h5>
	</div>
  </div>
  <p>$desc</p>
</div>
`

ws = []
fetch("./works.json").then(resp => resp.json()).then(json => {
  json.forEach(work => {
      let title = work.title
      let link = work.link
      let status = work.status
      let desc = work.desc
      status = status_table[status]
      if (status === undefined) { throw new Error("unknown status") }
      ws.push(template
          .replace("$link", link)
          .replace("$title", title)
          .replace("$4", status[1])
          .replace("$5", status[0])
          .replace("$desc", desc)
      )
  });
}).catch(e => {/*err handler*/})

out = '<div class="row">'
for (let i = 0; i < ws.length; ++i) {
    const w = ws[i];
    out += w
    if(i & 1) {
        out += '</div>'
        if(i + 1 < ws.length)
            out += '<div class="row">'
    }
}
        
if (ws.length & 1)
    out  += '</div>'

works.innerHTML = template.replace("$$$$", out)