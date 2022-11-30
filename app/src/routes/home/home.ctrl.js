"use strict";
//urㅣ 로 옮긴 후 보여주는 기능을 해주는 module
const users = {
    id: ["lynnet", "bruno", "ian"],
    pwd: ["1234","12345", "123456"],
};

const output = {
    home: (req, res) => {
        res.render("home/index")
    }, 

    login: (req, res) => {
        res.render("home/login")
    },
}

const process = {
    login: (req,res) => {
       const id = req.body.id,
        pwd = req.body.pwd;

     if(users.id.includes(id)){
        const idx =users.id.indexOf(id);
        if(users.pwd[idx] ===pwd){
            return res.json({
                success: true,
            })
        }
     }
     return res.json({
        msg: "로그인에 실패했습니다.",
     })
    },
}

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