import {Router} from 'express';

const routes = new Router();

routes.get('/kural', (req, res) => {
  res.send('from routes')
})

export default routes