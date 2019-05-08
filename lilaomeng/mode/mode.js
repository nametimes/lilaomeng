import {HTTP} from '../utils/http.js'
const _http = new HTTP

class IndexMode {
  Api(a) {
    return _http.request({
      url:`article/shoplist?page=${a.page}&rows=${a.rows}`,
      method: 'POST',
    })
  }
}

export { IndexMode}