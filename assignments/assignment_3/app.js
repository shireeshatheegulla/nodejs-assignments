const express=require("express");
const faker=require("faker");
const bodyparser=require("body-parser");
const app=express();

app.use(express.static("public"));

app.use(bodypcarser.urlencoded({extended:false}))

var users=[];
for(let i=0;i<5;i++){
users.push({
    name:faker.name.findName(),
    email:faker.internet.email(),
    image:faker.image.image()

});
}

app.set('views','./views');
app.set('view engine','ejs');

app.get("/",(req,res) =>{
    res.render("home",{users});
});
app.get("/form",(req,res) =>{
    res.render("form");
});

app.post("/user/add",(req,res) =>{
    users.push({
        name:req.body.name,
        email:req.body.email,
        image:faker.image.image()
    })

    res.redirect("/");
});

app.listen(3000,()=> console.log("server running"));