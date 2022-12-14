import Express from 'express'
import transactions from './data.js'
import cors from 'cors'

const PORT = 3001;

const app = Express()
app.use(cors({ origin: '*' }))
app.get('/get-transactions', (req, res) => {
  res.status(200).send(transactions())
})

app.listen(PORT, () => console.log('Server started at port ', PORT))
