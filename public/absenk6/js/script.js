let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let nama = data[i]["gsx$_cn6ca"]["$t"];
      let nis = data[i]["gsx$_cokwr"]["$t"];
      let hadir = data[i]["gsx$_cpzh4"]["$t"];
      let ijin = data[i]["gsx$_cre1l"]["$t"];
      let sakit = data[i]["gsx$_chk2m"]["$t"];

      document.getElementById("demo").innerHTML += "<tr>" + "<td>" + nama + "</td>" + "<td>" + nis + "</td>" + "<td>" + hadir + "</td>" + "<td>" + ijin + "</td>" + "<td>" + sakit + "</tr>";
    }
  }
};

xmlhttp.open("GET", "https://spreadsheets.google.com/feeds/list/1DexB28eRJG_KED89ECzOpGL9Wo6tycFxXUrILtuUS8c/od6/public/values?alt=json", true);
xmlhttp.send();
