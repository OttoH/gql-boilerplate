const { gql } = require('apollo-server-express')

export const newsLayoutTypes = gql`
  type NewsLayout {
    id: ID!
    name: String
    sections: [NewsSection!]
    layoutOpt: NewsLayoutOpts
  }

  type NewsLayoutOpts {
    renderType: String
  }

  type NewsSection {
    id: ID!
    name: String
    type: String
    articles: [NewsArticle!]
  }

  type NewsArticle {
    id: ID!
    title: String
    publisher: NewsPublisher
    content: String
    articleImages: [NewsArticleImage!]
  }

  type NewsPublisher {
    id: ID!
    name: String
    Date: String
  }

  type NewsArticleImage {
    imageUrl: String
    imageWidth: String
    imageHeight: String
  }

  # This type specifies the entry points into our API
  type Query {
    newsLayout(id: String): NewsLayout
  }
`

/* moco data, fetch it from DB later*/
const defaultLayoutOpts = {
  renderType: 'type A'
}
const defaultLayouts = {
  id: '0',
  name: 'mock layouts',
  layoutOpt: defaultLayoutOpts,
  sections: [
    {
      id: '0',
      name: 'mock section',
      type: 'section type',
      articles: []
    }
  ]
}

export const newsLayoutResolvers = {
  Query: {
    newsLayout: async (_source, { id = '0' }, { dataSources }) => {
      return dataSources.nasaApi.getNASA().then(nasaData => {
        const article = {
          id: `nasa_${id}`,
          ...nasaData
        }
        const result = {
          ...defaultLayouts
        }
        result.sections[0].articles[0] = article
        return result
      })
    }
  }
}
