const app = require('./index');

const port = process.env.PORT || 3000;

const server = app.listen(3000, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});


module.exports = server;
