const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://saumitrapal:CsCcrDBBh8djBe1m@cluster0.jc8r99i.mongodb.net/userappnew?retryWrites=true&w=majority&appName=Cluster0");

const User = mongoose.model('Users', {
    name: String,
    gmail: String, 
    password: String
});

app.post("/signup", async function(req, res){
    const username = req.body.username;
    const gmail = req.body.gmail;
    const password = req.body.password;

    const existingUser = await User.findOne({gamil: username});
    if(existingUser){
        return res.status(400).send('username already exists');
    }

    const user = new User({
        name: username,
        gmail: gmail,
        password: password
    });

     user.save();
     res.json({
        "msg":"user created successfully"
     })
        
})
app.listen(3000);