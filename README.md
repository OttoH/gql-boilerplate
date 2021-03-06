GQL boilerplate
===================
A baisc implementation of modulized schemas with lint and pre-commit check.

## Modules
Use schema.js as an index or entry point that combines type-defs and resolvers in it.<br />
By doing this, we can separate schemas from every services.

```
import { newsLayoutTypes, newsLayoutResolvers } from './newsLayouts'

export default makeExecutableSchema({
  typeDefs: [newsLayoutTypes],
  resolvers: mergeDeepLeft({}, newsLayoutResolvers) // merge for DEMO
})
```

## Run
```
npm i
npm start


---
console query
---
query basic {
  newsLayout(id: "0") {
    name
  	sections {
      name
      type
      articles {
        title
        content
        articleImages {
          imageUrl
        }
      }
    }
  }
}
```
<br />
<img src="public/images/module-schema.png">