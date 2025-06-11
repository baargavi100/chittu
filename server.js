
console.log("Starting server...");
const express = require('express');
const app = express();
const PORT = 4000;
const names = "baaga";

let Data = {
  message: "This one was for data",
  status: "success"
};

app.use(express.json());


app.get('/', (req, res) =>  {
  res.send(
    <body style="background:pink; color:purple;" >
      <h2>BAAGA:</h2>
      <p>${JSON.stringify(Data)}</p>
      <a href="/dashboard">Go to dashboard</a>
    </body>
  ,);
});


app.get('/dashboard', (req, res) => {
  console.log("Received request at /dashboard");
  res.send(
    <body>
      <h1>Dashboard</h1>
      <a href="/">Go to Home</a>
    </body>
  );
});


app.get('/api/data', (req, res) => {
  console.log('This one was for /api/data');
  res.send(Data);
});


app.post('/api/data', (req, res) => {
  const newEntry = req.body;
  console.log('Received POST:', newEntry);
  Data = { ...Data, ...newEntry };  
  res.sendStatus(201);
});


app.delete('/api/endpoint', (req, res) => {
  Data = {};  
  console.log('Deleted the data object');
  res.sendStatus(203);
});


app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
});
