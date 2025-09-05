const  app  = require("./src/app")

const connectToDb = require("./src/Db/db")
connectToDb()
require("dotenv").config()

app.listen(3000, () => {
    console.log("The server is running on the port 3000");
});
