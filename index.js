const express = require('express');
const path = require('path')
const cors = require('cors')
const app = express();
const router = express.Router();
const port = 5000;
const filepath = path.join(__dirname,'front/login.html')

app.use(cors())
router.get('/login', (req, res) => res.sendFile(filepath));

app.use("/",express.static("front"))

app.use(router)

app.listen(port, () => {
  console.log(`Servidorrodando na porta ${port}`);
});