const express = require("express");
const app = express();

app.use(express.json());

app.post("/health-cheakup", (req, res) => {
    const kidneys = req.body.kidneys;
    const kidneysklenght = kidneys.lenght;

    res.send("you have "+ kidneysklenght +" kidneys");
})

app.use(function(err, req, res, next){
    res.json({
        msg : "sorry something is up with our server"
    })
})

app.listen(3000);