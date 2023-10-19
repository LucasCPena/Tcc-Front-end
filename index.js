const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const router = express.Router();
const port = 5000;

const login = path.join(__dirname, "src/login.html");
//const main = path.join(__dirname, "src/Main.html");

app.use(cors());
app.use(express.static("node_modules"));
router.get("/login", (req, res) => res.sendFile(login));
//router.get("/main", (req, res) => res.sendFile(main));

app.use("/", express.static("src"));

app.use(router);

app.listen(port, () => {
  console.log(`Servidorrodando na porta ${port}`);
});
