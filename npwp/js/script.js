let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let name = data[i]["gsx$_cn6ca"]["$t"];
      let npwp = data[i]["gsx$_cokwr"]["$t"];
      let nik = data[i]["gsx$_cpzh4"]["$t"];
      let telp = data[i]["gsx$_cre1l"]["$t"];
      let email = data[i]["gsx$_chk2m"]["$t"];
      document.getElementById("demo").innerHTML += "<tr>" + "<td>" + name + "</td>" + "<td>" + npwp + "</td>" + "<td>" + nik + "</td>" + "<td>" + telp + "</td>" + "<td>" + email + "</tr>";
    }
  }
};

xmlhttp.open("GET", "https://spreadsheets.google.com/feeds/list/1C-Ab5lKaA-n3b__-9LB-jPcHw1FiRZ0V8olQ_r3z7_Q/od6/public/values?alt=json", true);
xmlhttp.send();
