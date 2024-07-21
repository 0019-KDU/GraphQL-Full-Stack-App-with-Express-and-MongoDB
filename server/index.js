const express = require("express");
require("dotenv").config();
const colors = require("colors");
const { graphqlHTTP } = require("express-graphql");
const dbConnect = require("./config/db");
const port = process.env.PORT || 5000;
const schema = require("./schema/schema");

const app = express();

//Connection to database
dbConnect();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
