import express from 'express'
import apis from './routes/api'
const app = express()

const isProd = (process.env.NODE_ENV === "production")
const PORT = 3000

if (isProd) {
  const path = require('path')
  const staticPath = path.resolve(__dirname, "../app")
  app.use(express.static(staticPath))
  app.get('/test', (req, res) => {
    res.sendFile(`${staticPath}/index.html`)
  })
}

app.get('/', (req, res) => {
  res.send(`Express is running in ${isProd ? "Production" : "Development"}`)
})


app.use('/api', apis)

app.listen(PORT, () => console.log(`App is listenting on ${PORT}`))

