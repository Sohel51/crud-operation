exports.homeRoutes = (req, res) => {
    // res.render('index');
    res.send("Crud Application Home");
}

exports.add_user = (req, res) => {
    res.send("Add User");
}

exports.update_user = (req, res) => {
    res.send("Update User");
}