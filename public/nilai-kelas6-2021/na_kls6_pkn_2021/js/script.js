let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let nama_lengkap = data[i]["gsx$_cn6ca"]["$t"];
      let jumlah = data[i]["gsx$_cokwr"]["$t"];
      let na = data[i]["gsx$_cpzh4"]["$t"];
      let ranking = data[i]["gsx$_cre1l"]["$t"];

      document.getElementById("demo").innerHTML += "<tr>" + "<td>" + nama_lengkap + "</td>" + "<td>" + jumlah + "</td>" + "<td>" + na + "</td>" + "<td>" + ranking + "</td>" + "</tr>";
    }
  }
};

xmlhttp.open("GET", "https://spreadsheets.google.com/feeds/list/1qC6AoEH_cJCIqGR8df6Qv1wnv_uDaFbTymfZq0155Sg/od6/public/values?alt=json", true);
xmlhttp.send();
