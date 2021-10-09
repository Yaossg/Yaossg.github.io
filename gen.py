import os.path
import json

status_table = {
    "archived": ("Archived", "dark"),
    "wip": ("Work in Progress", "primary"),
    "active": ("Active", "success"),
    "inactive": ("Inactive", "secondary"),
    "deprecated": ("Deprecated", "warning"),
    "cancelled": ("Cancelled", "error")
}

with open("index.html", mode="w", encoding="utf-8") as out:
    doc = [""]
    with open("index_template.html", encoding="utf-8") as it:
        doc = it.read().split("$$$$")
    tmp = ""
    with open("work_template.html", encoding="utf-8") as wt:
        tmp = wt.read()
    ws = []
    with open("works.json", encoding="utf-8") as file:
        works = json.load(file)
        for work in works:
            title = work["title"]
            link = work["link"]
            time = work["time"]
            status = work["status"]
            desc = work["desc"]
            if status not in status_table.keys():
                raise Exception(f"unknow status: {status}")
            status = status_table[status]
            ws.append(tmp
            .replace("$1", link)
            .replace("$2", title)
            .replace("$3", time)
            .replace("$4", status[1])
            .replace("$5", status[0])
            .replace("$6", desc)
            )
    out.write(doc[0])
    out.write('<div class="row">')
    for (i, w) in enumerate(ws):
        out.write(w)
        if i & 1:
            out.write('</div>')
            if i + 1 < len(ws):
                out.write('<div class="row">')
    if len(ws) & 1:
        out.write('</div>')
    out.write(doc[1])
