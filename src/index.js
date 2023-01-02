

import express from 'express';
import routes from './routes';
import cors from 'cors'



// Use Express
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(routes);

// Process
const port = process.env.PORT || 3004;
const appEnv = process.env.NODE_ENV || 'local'
process.title = 'hostess.prod'

const appInfo = {
  name: process.title,
  environment: appEnv,
  port: port
}

app.listen(port, () => {
  console.table(appInfo);
});
