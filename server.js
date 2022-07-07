const express = require("express");

const app = express()

app.use("/", express.static("./dist"))

app.listen(proccess.env.PORT || 3000, (err) => {
    if(err) { return console.log(err)}

    console.log("Running...")
})