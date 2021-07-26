const express = require("express");
const { sequelize } = require("./models");
const db = require("./models");
const http = require("http");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function main(){
  await sequelize.sync({
      
  })
}
main()

const userRoutes =  require("./router/userApiRouter");
const objectiveRoutes = require('./router/objective.routes');
const keyResultRoutes = require('./router/keyResult.routes');

app.use("/api/users", userRoutes);
app.use("/api/objectives", objectiveRoutes);
app.use("/api/keyResults", keyResultRoutes);

const httpServer = http.Server(app);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
db.sequelize.sync().then(()=> {
  httpServer.listen(PORT, () => {
    console.log(`Serve at http://localhost:${PORT}`);
});  
})
 