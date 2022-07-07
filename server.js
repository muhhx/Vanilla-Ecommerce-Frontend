const express = require("express");
const { resove } = require("path")

const app = express()

app.use("/", express.static(
    resolve(__dirname, "./dist"),
))

app.listen(proccess.env.PORT || 3000, (err) => {
    if(err) { return console.log(err)}

    console.log("Running...")
})