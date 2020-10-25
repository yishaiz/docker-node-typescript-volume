const express = require('express');
const redis = require('redis');

const app = express();
// const client = redis.createClient();
const client = redis.createClient({
  host: 'redis-server',
  port: 6379,
});

const port = 8081;
client.set('visits', 0);

this.visits = 0;
app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    const newVisits = parseInt(visits) + 1;
    res.send(`Number of visits is : ${newVisits}`);

    client.set('visits', newVisits);
  });
});

app.get('/local', (req, res) => {
  // //   client.get('visits', (err, visits) => {
  this.visits = parseInt(this.visits) + 1;
  res.send(`Number of visits is : ${this.visits}`);
});

app.listen(port, () => {
  console.log(`Server is listenning on port : ${port}`);
});
