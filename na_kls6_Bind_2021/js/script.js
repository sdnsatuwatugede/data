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
      let ket = data[i]["gsx$_chk2m"]["$t"];

      document.getElementById("demo").innerHTML += "<tr>" + "<td>" + nama_lengkap + "</td>" + "<td>" + jumlah + "</td>" + "<td>" + na + "</td>" + "<td>" + ranking + "</td>" + "<td>" + ket + "</td>" + "</tr>";
    }
  }
};

xmlhttp.open("GET", "https://spreadsheets.google.com/feeds/list/1-qGHF00AyrkjkPA2eb0pA42ReYKdo-GjPb64j92opAc/od6/public/values?alt=json", true);
xmlhttp.send();
