import {HTTP} from '../utils/http.js'
const _http = new HTTP

class IndexMode {
  Api() {
    return _http.request({
      url: 'article/shoplist',
      method: 'POST',
      data: {
        page: '2',
        rows: '10'
      }
    })
  }
}

export { IndexMode}