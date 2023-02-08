import express from 'express'
import swaggerUi from 'swagger-ui-express'
import routes from './routes'
const swaggerFile = require('../swagger_output.json')

class AppController {
  public express
  public port: string
  constructor() {
    this.express = express()

    this.bodyParser()
    this.routes()
    this.documemtation()
  }
  routes() {
    this.express.use(routes)
  }
  bodyParser() {
    this.express.use(express.urlencoded({ extended: false }))
    this.express.use(express.json())
  }
  documemtation() {
    this.express.use(
      '/documentation',
      swaggerUi.serve,
      swaggerUi.setup(swaggerFile)
    )
  }
  server() {
    this.express.listen(3000, () => {
      console.log('servidor rodando')
    })
  }
}

export default new AppController()
