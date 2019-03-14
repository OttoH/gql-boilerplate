GQL boilerplate
===================
A baisc implementation of modulized schemas with lint and pre-commit check.

## Modules
Use schema.js as an index or entry point.Combine type-defs and resolvers in it.<br />
By doing this, we can separate schemas from every services.

```
export default makeExecutableSchema({
  typeDefs: [newsLayoutTypes],
  resolvers: mergeDeepLeft({}, newsLayoutResolvers) // merge for DEMO
})
```

## Run
```
npm i
npm start
```