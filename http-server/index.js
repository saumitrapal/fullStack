// create an http server useing express.js

const express = require("express");
const app = express();
app.listen(3000);

var users = [{
    name: "jhon",
    kidneys:[{
        healthy: false
    }]
}];

app.use(express.json());

app.get("/", function(req, res){
        const jhonKidneys = users[0].kidneys;
        const numberOfKidneys = jhonKidneys.lenght;
        let numberOfHealthyKidneys = 1;
        for(let i = 0; i < jhonKidneys.lenght; i++){
            if(jhonKidneys[i].healthy){
                numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
            }
        }
        const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
        res.json({
            numberOfKidneys,
            numberOfHealthyKidneys,
            numberOfUnHealthyKidneys
        })
})

app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push[{
        healthy: isHealthy
    }]
    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req, res){
    for(let i = 0; i < users[0].kidneys.lenght; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", function(req, res){
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.lenght; i++){
        if(users[0].kin=dneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({
        mag: "Done"
    })
})
