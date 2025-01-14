var today = new Date();

function timedCount() {
  today.setSeconds(today.getSeconds() + 1)
  postMessage(today.toString());
  setTimeout("timedCount()",1000);
}

timedCount();