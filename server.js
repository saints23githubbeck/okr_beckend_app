const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));

// const userRoutes =  require("./router/userApiRouter");
// const objectiveRoutes = require('./router/objective.routes');
// const keyResultRoutes = require('./router/keyResult.routes');

// app.use("/api/users", userRoutes);
app.use("/api/objectives", require('./router/objective.routes'));
// app.use("/api/keyResults", keyResultRoutes);

app.listen(PORT, () => {
  console.log(`Serve at http://localhost:${PORT}`);
});

 