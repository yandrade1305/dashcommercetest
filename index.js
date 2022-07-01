const express = require("express")

const app = express();

app.get('/dashcommercetest', (req, res) => {
    const { user, password } = req.params;

    console.log();

    if (req.query.user.includes("dashcommerce") && req.query.password.includes("chooseme")) {

        return res.status(200).json({
            mensagem: "My full name is Yan Andrade. I want this job!"
        });
    }
    return res.status(200).json({
        mensagem: "Wrong Credentials"
    });

});

app.listen(3000, () => console.log("Executando em 3000"));