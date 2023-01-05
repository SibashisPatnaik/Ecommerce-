const mongoose = require("mongoose");
const expressApp = require("./app");
require("dotenv").config();

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    //  useCreateIndex: true,
    //  useFindAndModify: false,
  })
  .then(() => {
    console.log("DB connection successful!");
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT || 3000;
expressApp.listen(port, () => {
  console.log(`ExpressApp running on port ${port}...`);
});
