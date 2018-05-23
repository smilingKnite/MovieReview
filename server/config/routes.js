var mongoose = require('mongoose');
// var Pet = mongoose.model('Movie');
var path = require('path');

var mon = require('../controllers/movie');

module.exports = function (app) {


    app.get('/movies', function (req, res) {
        mon.index(req, res);
    });

    // app.get('/newMovie', function (req, res) {
    //     res.sendFile(path.resolve("./public/dist/public/index.html"));
    // });

    app.post("/newMovie", function (req, res) {

        console.log('______________________________________');
        console.log(req.body);
        mon.add(req, res);
    });

    app.get("/movie/:id", function (req, res) {
        // console.log(req.params.id)
        mon.find(req, res);
    });

    app.post('/add-rev/movie/:id', function (req, res) {
        console.log(req.params);
        console.log("pooooooooooooooooooooooooooooooop")
        console.log(req.body);

        mon.addRev(req,res);
    });
    // app.post('/update/:id', function (req, res) {
    //     console.log(req.body);
    //     mon.edit(req, res);
    // });

    app.delete('/delete/movie/:id', function (req, res) {
        console.log(req.params);
        // console.log(req.body);
        mon.delete(req, res);
        // res.redirect('/tasks');
    });

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });

}