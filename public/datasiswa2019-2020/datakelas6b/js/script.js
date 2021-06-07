let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let name = data[i]["gsx$_cn6ca"]["$t"];
      let induk = data[i]["gsx$_cokwr"]["$t"];
      let jk = data[i]["gsx$_cpzh4"]["$t"];
      let nisn = data[i]["gsx$_cre1l"]["$t"];
      let tl = data[i]["gsx$_chk2m"]["$t"];
      let tgllahir = data[i]["gsx$_ciyn3"]["$t"];
      let ortu = data[i]["gsx$_ckd7g"]["$t"];

      document.getElementById("demo").innerHTML +=
        "<tr>" + "<td>" + name + "</td>" + "<td>" + induk + "</td>" + "<td>" + jk + "</td>" + "<td>" + nisn + "</td>" + "<td>" + tl + "</td>" + "<td>" + tgllahir + "</td>" + "<td>" + ortu + "</td>" + "</tr>";
    }
  }
};

xmlhttp.open("GET", "https://spreadsheets.google.com/feeds/list/1A3kmo18fvYgWrgYwS-7uGepaPsXjxiYRd2Uamifl6jA/od6/public/values?alt=json", true);
xmlhttp.send();
