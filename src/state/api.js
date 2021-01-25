import axios from 'axios'
import { TOKEN, GET_URL, POST_URL } from '../constants/end-point'

axios.defaults.headers.common = { Authorization: `Bearer ${TOKEN}` }

class API {
  static async init() {
    const data = await axios.get(GET_URL).then(result => result.data)
    if (data.error) {
      throw data.error
    }
    const albums = data.albums.items.filter(
      album => album.album_type === 'album'
    )
    return albums
  }
}

export default API
