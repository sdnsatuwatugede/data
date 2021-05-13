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

      document.getElementById("demo").innerHTML += "<tr>" + "<td>" + name + "</td>" + "<td>" + induk + "</td>" + "<td>" + jk + "</td>" + "<td>" + nisn + "</td>" + "<td>" + tl + "</td>" + "<td>" + tgllahir + "</td>" + "</tr>";
    }
  }
};

xmlhttp.open("GET", "https://spreadsheets.google.com/feeds/list/1eG_uysmfA4t6mh_MkblBB4hYlBzUo6KkhSOBnCSS364/od6/public/values?alt=json", true);
xmlhttp.send();
