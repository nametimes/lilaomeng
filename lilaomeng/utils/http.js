import { config } from '../config.js'

class HTTP {
  request(params){
    let method = !params.method ? "GET" : params.method
    return new Promise((a,b) => {
      wx.request({
        url: config.api_base_url + params.url,
        method,
        data: params.data || null,
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success:res => {
          a(res)
        },
        fail:err => {
          b(err)
          console.log(err)
        }
      })
    })
  }
}


export { HTTP }