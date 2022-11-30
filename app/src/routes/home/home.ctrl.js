"use strict";
const {
    use
} = require(".");
const UserStorage = require("../../model/UserStorage");
//urㅣ 로 옮긴 후 보여주는 기능을 해주는 module


const output = {
    home: (req, res) => {
        res.render("home/index")
    },

    login: (req, res) => {
        res.render("home/login")
    },
}

const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;

        const users = UserStorage.getUsers("id", "psword");

        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    success: true,
                });
                response.success = true;
                return res.json(response);
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
        response.success = false;
        response.msg = "로그인에 실패하셨습니다.";
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