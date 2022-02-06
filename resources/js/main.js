time = document.getElementById('countdown')
setInterval(function ()
{time.innerHTML = showLeft()},1000)
console.log(showLeft())

function showLeft() {
  //获取当前时间
  var nowTime = Date.now();
  // var nowTime = new Date().getTime();
  //获取当天 23:59
  var endTime = new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1
  //获取时间差
  var timediff = Math.round((endTime - nowTime) / 1000);
  //获取还剩多少小时
  var hour = parseInt(timediff / 3600 % 24) + parseInt(timediff / 3600 / 24) * 24;
  //获取还剩多少分钟
  var minute = parseInt(timediff / 60 % 60);
  //获取还剩多少秒
  var second = timediff % 60;
  //输出还剩多少时间
  hour = timerFilter(hour);
  minute = timerFilter(minute);
  second = timerFilter(second);
  console.log(endTime)
  setTimeout(showLeft, 1000);
  return (hour + "hours" + minute + "minutes" + second + "seconds" + "till the end!")

  //给小于10的数值前面添加 0
  function timerFilter(params) {
    if (params - 0 < 10) {
      return '0' + params
    } else {
      return params
    }
  }
}