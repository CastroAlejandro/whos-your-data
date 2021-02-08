function Login (req, res) {
    if (req.user) {
        res.redirect("/gamesList")
    }
    res.render("login");
}

module.exports = Login;