import { Application } from 'https://deno.land/x/oak/mod.ts'
import { GraphQLService } from './resolvers/index.ts'

const app = new Application()

app.use(async (ctx, next) => {
  await next()
  const rt = ctx.response.headers.get('X-Response-Time')
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`)
})

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.response.headers.set('X-Response-Time', `${ms}ms`)
})

await app.use(
  await GraphQLService.routes(),
  await GraphQLService.allowedMethods()
)

console.log('Server start at http://localhost:8080')
console.log('Playgroud at http://localhost:8080/graphql')
await app.listen({ port: 8080 })
