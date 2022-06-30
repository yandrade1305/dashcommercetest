const axios = require("axios")
const express = require("express")

const app = express();

app.get('/dashcommercetest', (req, res) => {
    const { user, password } = req.params;
    if (user !== "dashcommerce" || password !== "chooseme") {
        return res.status(200).json({
            message: "Wrong Credentials"
        });
    } else {
        return res.status(200).json({
            message: "My full name is Yan Andrade. I want this job!"
        });
    }
});

app.listen(3000, () => console.log("Executando em 3000"));

// dashcommercetest?user="dashcommerce"&password="chooseme"