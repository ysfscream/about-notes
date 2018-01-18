const love = '2017-3-3'
function diffTime (startTime) {
  const startDate = new Date(startTime)
  let nowDate = new Date()
  let loveTime = nowDate.getTime() - startDate.getTime()
  // 计算出相差天数
  let days = Math.floor(loveTime / (24 * 3600 * 1000))
  // 计算出小时数 
  let leave1 = (loveTime % (24 * 3600 * 1000)) // 计算天数后剩余的毫秒数
  let hours = Math.floor((loveTime % (24 * 3600 * 1000)) / (3600 * 1000))
  // 计算相差分钟数
  let leave2 = leave1 % (3600 * 1000) // 计算小时数后剩余的毫秒数
  let minutes = Math.floor(leave2 / (60 * 1000))

  // 计算相差秒数
  let leave3 = leave2 % (60 * 1000) // 计算分钟数后剩余的毫秒数
  let seconds = Math.round(leave3 / 1000)
  //   console.log(`${days}:${hours}:${minutes}:${seconds}`)
  let timeDisplay = document.getElementById('time')
  timeDisplay.innerHTML = `💑 ${days} : ${hours} : ${minutes} : ${seconds}`
}

setInterval('diffTime(love)', 1000)
