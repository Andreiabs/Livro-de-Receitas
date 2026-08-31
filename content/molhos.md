<div style="text-align: center;"><span style="font-size: 20px;"><b>MOLHOS</b></span></div>

```dataview
LIST
WHERE contains(categoria, "molho") OR contains(file.tags, "molho")
SORT file.name ASC
```