const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from Jenkins CI/CD on AWS Elastic Beanstalk!</h1>');
});

app.listen(port, () => {
  console.log(`Application listening at http://localhost:${port}`);
});
