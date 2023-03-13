exports.homeRoutes = (req, res) => {
    // res.render('index');
    res.send("Crud Application Home");
}

exports.add_user = (req, res) => {
    res.render('add_user');
    res.send("Add User");
}

exports.update_user = (req, res) => {
    res.render('update_user')
    res.send("Update User");
}