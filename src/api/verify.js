function test (data) {
  let reg = /^1[345789]\d{9}$/
  if (data.mobile === '') {
    return {
      status: false,
      text: '手机号不能为空'
    }
  } else {
    return {
      status: true,
      text: ''
    }
  }
}



export default {
  test,
}
