import { Hono } from './hono.js'
import { serveStatic } from './cloudflare-pages.js'

const app = new Hono()

app.get('/', serveStatic({ path: '../index.html' }))

app.post('/purge', async (c) => {
  const { zoneId, apiToken } = await c.req.json()

  const response = await fetch(`https://api.cloudflare.com/client/v4/zones/${zoneId}/purge_cache`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ purge_everything: true }),
  })

  const result = await response.json()

  if (result.success) {
    return c.json({ message: 'Cache purged successfully' })
  } else {
    return c.json({ error: 'Failed to purge cache' }, 400)
  }
})

export const onRequest = app.fetch
