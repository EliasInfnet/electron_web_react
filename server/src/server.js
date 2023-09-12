import express from 'express'
import cors from 'cors'
import path from 'path'
import asyncHandler from 'express-async-handler'

const app = express()

app.use(express.json()) 
app.use(cors())

app.get('/' , asyncHandler((req,res) => {
  const process_env = process.env
  const process_cwd = process.cwd()
  const process_execPath = process.execPath
  const path_resolve = path.resolve()
  
  res.json({
    process_env,
    process_cwd,
    process_execPath,
    path_resolve
  })
}))

const PORT = 5007

const listen = app.listen(PORT, () => console.log(`rodando na porta ${PORT}`))