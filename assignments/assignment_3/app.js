const express=require("express");
const bodyparser=require("body-parser")
const app=express()

app.use(bodyparser());
var users=[];
users.push({
    name:"siri",
    email:"siri@gmail.com",
    age:24,
    city:"siddipet",
    profession:"student",

});

app.set('views','./views');
app.set('view engine','ejs');

app.get("/",(req,res) =>{
    res.render("home.ejs",{users});
});
app.get("/form",(req,res) =>{
    res.render("form.ejs");
});

app.post("/add/user",(req,res) =>{
    users.push({
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        city:req.body.city,
        profession:req.body.profession
    })

    res.redirect("/");
});

app.listen(3000,()=> console.log("server running"));