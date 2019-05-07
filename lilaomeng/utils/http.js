class HTTP {
  request(data){
    let method = !data.method ? "GET":data.method
    return new Promise((a,b) => {
      wx.request({
        url:data.url,
        method,
        data:data.data || null,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success:res => {
          a(res)
          // console.log(res)
        },
        fail:err => {
          b(err)
          // console.log(err)
        }
      })
    })
  }
}


export { HTTP }