const express = require("express");
const { sequelize } = require("./models");
const db = require("./models");
const http = require("http");
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function main(){
  await sequelize.sync({
      
  })
}


main()
const userRoutes =  require("./router/userApiRouter");
const objectiveRoutes = require('./router/objective.routes');

app.use("/api/users", userRoutes);
app.use("/api/objectives", objectiveRoutes);

const httpServer = http.Server(app);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
db.sequelize.sync().then(()=> {
  httpServer.listen(PORT, () => {
    console.log(`Serve at http://localhost:${PORT}`);
});  
})
 