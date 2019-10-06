const express = require("express")
const router = express.Router();
const UserModel=require("../models/User");
const bcrypt=require('bcryptjs')



//Register form

router.get("/register",(req,res)=>{

    res.render("register")
});

//register process

router.post("/register",(req, res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const username=req.body.username;
    const password=req.body.password;
    const password2=req.body.password2;

    req.checkBody('name','Name is required.').notEmpty();
    req.checkBody('email','Email is required.').notEmpty();
    req.checkBody('email','Name is required.').isEmail();
    req.checkBody('username','Username is required.').notEmpty();
    req.checkBody('password','Password is required.').notEmpty();
    req.checkBody('password2','Password does not match.').equals(req.body.password);


    let errors=req.validationErrors();

    if(errors){
        res.render('register', {
            errors:errors
        });
            console.log(errors)
    }
    else{
        let newUser=new UserModel({
            name:name,
            email:email,
            username:username,
            password:password

        })
        //generate satlt
        bycrypt.genSalt(10, function(err, satlt){
            bcrypt.hash(newUser.password,salt,function(err,hash){
                if (err){
                    console.log(err);
                }
                newUser.password=hash;
                newUser.save(function(err){
                    if(err){
                        console.log(err);
                        return;
                    }
                    else{
                        req.flash('success', 'Welcome to Cheer Ups. You can now login!');
                        res.redirect('/user/login');
                    }
                })
            });
        })
    }

})



//Login
router.get("/login",(req,res)=>{
    res.render('login')
})


module.exports=router;