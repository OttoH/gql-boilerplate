import { RESTDataSource } from 'apollo-datasource-rest'

const API_KEY = 'api_key'

class NASAAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://api.nasa.gov/planetary/'
    this.apiKey = 'iPnzYfNf7hj7z7dN6XebLucEYM4MvgclLiekPqpx'
  }

  async getNASA() {
    const result = await this.get('apod', {
      [API_KEY]: this.apiKey
    })
    const { title, explanation, url } = result
    return {
      title: title,
      content: explanation,
      articleImages: [
        {
          imageUrl: url
        }
      ]
    }
  }
}

export default NASAAPI
