import express from 'express'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 5000

const start = () => {
  try {
    app.listen(PORT, () => console.log('SERVER STARTED'))
  } catch (error) {
    console.log(error)
  }
}

start()
