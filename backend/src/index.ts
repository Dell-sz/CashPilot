import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Servidor rodando com sucesso!')
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
