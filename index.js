import bodyParser from "body-parser";
import express from "express";
import usersRoutes from "./routes/users.js"

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use("/users",usersRoutes)

app.get('/', (req, res) =>{ res.send('HELLO FROM HOMEPAGE')})


app.listen(PORT, () =>
  console.log(`server is running on port : http://localhost:${PORT}`)
);

