const express = require("express");

const app = express()

app.use("/", express.static("./dist"))

app.listen(import.meta.env.VITE_APP_PORT || 3000, (err) => {
    if(err) { return console.log(err)}

    console.log("Running...")
})