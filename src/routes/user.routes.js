import Render from 'express';

const render = Render();

render.get('/', (req, res) => {
  res.send('Hola desde User');
});

export default render;
