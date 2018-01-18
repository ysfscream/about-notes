var love = '2017-3-3'

function weloveTime (startTime) {
  var startDate = new Date(startTime)
  var nowDate = new Date()
  var loveTime = nowDate.getTime() - startDate.getTime()
  // 计算出相差天数
  var days = Math.floor(loveTime / (24 * 3600 * 1000))
  // 计算出小时数 
  var leave1 = (loveTime % (24 * 3600 * 1000)) // 计算天数后剩余的毫秒数
  var hours = Math.floor((loveTime % (24 * 3600 * 1000)) / (3600 * 1000))
  // 计算相差分钟数
  var leave2 = leave1 % (3600 * 1000) // 计算小时数后剩余的毫秒数
  var minutes = Math.floor(leave2 / (60 * 1000))

  // 计算相差秒数
  var leave3 = leave2 % (60 * 1000) // 计算分钟数后剩余的毫秒数
  var seconds = Math.round(leave3 / 1000)
  //   console.log(`${days}:${hours}:${minutes}:${seconds}`)
  let timeDisplay = document.getElementById('time')
  timeDisplay.innerHTML = '💑 ' + days + ' : ' + hours + ' : ' + minutes + ' : ' + seconds
}

setInterval('weloveTime(love)', 1000)
