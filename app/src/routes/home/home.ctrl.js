"use strict";
const {
    use
} = require(".");
const User = require("../../model/User");
const UserStorage = require("../../model/UserStorage");
//urㅣ 로 옮긴 후 보여주는 기능을 해주는 module


const output = {
    home: (req, res) => {
        res.render("home/index")
    },

    login: (req, res) => {
        res.render("home/login")
    },
    register: (req, res) => {
        res.render("home/register")
    },
}

const process = {
    login: (req,res) =>{
       const user = new User(req.body);
       const response =user.login();
       return res.json(response);
    },
    register:(req,res) =>{
        const user = new User(req.body);
        const response =user.register();
        return res.json(response);
     },
};


module.exports = {
    output,
    process,
};

/*👉 같은 것
{
    hello : hello,
    login : login
    key : value
}
*/