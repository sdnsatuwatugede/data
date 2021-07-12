let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let time = data[i]["gsx$_cn6ca"]["$t"];
      let nama = data[i]["gsx$_cokwr"]["$t"];
      let tanggal = data[i]["gsx$_cpzh4"]["$t"];

      document.getElementById("demo").innerHTML += "<tr>" + "<td>" + time + "</td>" + "<td>" + nama + "</td>" + "<td>" + tanggal + "</td>" + "</tr>";
    }
  }
};

xmlhttp.open("GET", "https://spreadsheets.google.com/feeds/list/15MZeY6Lm_Hf43pR140PtmCeTqCUhHlLfGX6Ur3IzkH4/od6/public/values?alt=json", true);
xmlhttp.send();
