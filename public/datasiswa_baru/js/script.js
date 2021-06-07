let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let nama_lengkap = data[i]["gsx$namalengkap"]["$t"];
      let jk = data[i]["gsx$jeniskelamin"]["$t"];
      let nik = data[i]["gsx$nikno.kitasuntukwna"]["$t"];
      let nokk = data[i]["gsx$nokk"]["$t"];
      let tl = data[i]["gsx$tempatlahir"]["$t"];
      let tgllahir = data[i]["gsx$tanggallahir"]["$t"];

      document.getElementById("demo").innerHTML += "<tr>" + "<td>" + nama_lengkap + "</td>" + "<td>" + jk + "</td>" + "<td>" + nik + "</td>" + "<td>" + nokk + "</td>" + "<td>" + tl + "</td>" + "<td>" + tgllahir + "</td>" + "</tr>";
    }
  }
};

xmlhttp.open("GET", "https://spreadsheets.google.com/feeds/list/1YpnaMqdV0Y_HgaqgaWrN236D7kg6AVdUhiwyidEfZNY/od6/public/values?alt=json", true);
xmlhttp.send();
