"use strict";
//urㅣ 로 옮긴 후 보여주는 기능을 해주는 module

const home = (req,res) =>{
    res.render("home/index")
 };

 const login = (req,res)=>{
    res.render("home/login")  
};

module.exports={
    home,
    login,
};

/*👉 같은 것
{
    hello : hello,
    login : login
    key : value
}
*/