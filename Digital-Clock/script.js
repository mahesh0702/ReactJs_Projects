const clcok = document.getElementById('clock');
setInterval(function () {
  let date = new Date();
  clcok.innerHTML = date.toLocaleTimeString();
}, 1000);
