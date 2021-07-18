let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let nama = data[i]["gsx$_cn6ca"]["$t"];
      let kelas = data[i]["gsx$_cokwr"]["$t"];
      let nik = data[i]["gsx$_cpzh4"]["$t"];
      let nokk = data[i]["gsx$_cre1l"]["$t"];
      let regakte = data[i]["gsx$_chk2m"]["$t"];

      document.getElementById("demo").innerHTML += "<tr>" + "<td>" + nama + "</td>" + "<td>" + kelas + "</td>" + "<td>" + nik + "</td>" + "<td>" + nokk + "</td>" + "<td>" + regakte + "</td>" + "</tr>";
    }
  }
};

xmlhttp.open("GET", "https://spreadsheets.google.com/feeds/list/18sNHN6fcwa0mITiNtAqnrQLOZV1lDisvURKaCPyNEUo/od6/public/values?alt=json", true);
xmlhttp.send();
