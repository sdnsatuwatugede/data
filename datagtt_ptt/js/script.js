let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let name = data[i]["gsx$_cn6ca"]["$t"];
      let tmplhr = data[i]["gsx$_cokwr"]["$t"];
      let tgllhr = data[i]["gsx$_cpzh4"]["$t"];
      let nuptk = data[i]["gsx$_cre1l"]["$t"];
      let skawal = data[i]["gsx$_chk2m"]["$t"];
      let skakhir = data[i]["gsx$_ciyn3"]["$t"];
      document.getElementById("demo").innerHTML += "<tr>" + "<td>" + name + "</td>" + "<td>" + tmplhr + "</td>" + "<td>" + tgllhr + "</td>" + "<td>" + nuptk + "</td>" + "<td>" + skawal + "<td>" + skakhir + "</td>" + "</tr>";
    }
  }
};

xmlhttp.open("GET", "https://spreadsheets.google.com/feeds/list/1r5ZHuMixh4aLZtjtIt3Pseq4RDQI6KvLvN1biF-Ws-E/od6/public/values?alt=json", true);
xmlhttp.send();
