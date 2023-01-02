import Router from 'express';
const routes = new Router();

//Index 
routes.get('/', (req, res) => {
  res.send({ api: 'Running bro! ' })
})

routes.get('/r', (req, res) => {
  res.send({ api: 'Running bro, r route! ' })
})





export default routes;
