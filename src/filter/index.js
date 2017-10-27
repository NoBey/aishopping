import Vue from 'vue'

// 时间过滤器
const datetime = Vue.filter('datetime', v => {
  let now = new Date()
  let date = new Date(Date.parse(v.replace(/-/g, '/')))
  let diff = (now - date) / 1000
  const timeRange = {
    min: 60,
    hour: 3600,
    day: 86400,
    date: 259200
  }
  const textRange = {
    now: '刚刚',
    min: '分钟前',
    hour: '小时前',
    day: '天前'
  }

  if (diff <= timeRange.min) {
    return textRange.now
  } else if (diff > timeRange.min && diff <= timeRange.hour) {
    return Math.floor(diff / 60) + textRange.min
  } else if (diff > timeRange.hour && diff <= timeRange.day) {
    return Math.floor(diff / 60 / 60) + textRange.hour
  } else if (diff > timeRange.day && diff <= timeRange.date) {
    return Math.floor(diff / 60 / 60 / 24) + textRange.day
  } else if (diff > timeRange.date) {
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    let d = date.getDate()
    return y + '-' + m + '-' + d
  }
})

export default {
  datetime
}
