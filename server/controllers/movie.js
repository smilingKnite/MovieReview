var mongoose = require('mongoose'),
    M = mongoose.model('Movie'),
    R = mongoose.model('Review');


module.exports = {
    index: function (req, res) {
        M.find({}, function (err, movies) {
            if (err) {
                console.log(err);
                res.json(err)
            } else {
                console.log('-----------------------------');
                console.log(movies);
                res.json(movies);
            }

        });
    },

    add: function (req, res) {
        var rev = new R({
            reviewer: req.body.reviews[0].reviewer,
            stars: req.body.reviews[0].stars,
            review: req.body.reviews[0].review
        });
        rev.save(function(err, rev){
            if(err){
                console.log("Failure");
                console.log(err);
            } else {
                console.log("Success");
                console.log(rev);
                // res.json(rev);
            }
        });
        
        var m = new M({
            title: req.body.title,
            reviews: rev
        });
        m.save(function (err, movie) {
            if (err){
                // console.log("---");
                console.log(err);
                // res.json(err);
                if (err) {
                    console.log(err);
                    console.log("-------420-----");
                    console.log(err['errors']['title']['message']);
                    console.log("-------888-----");
                    res.json(err);
                } 
            } else {
                console.log(rev);
                console.log(movie);
            }
        });
            
        // });
    },

    find: function (req, res) {
        // console.log("+=+=+=");
        // console.log(req.params.id);
        M.find({
            _id: req.params.id
        }, function (err, movie) {
            if (err) {
                console.log(err);
                // console.log("poppers");
                res.json(err);
            } else {
                console.log("-----------------")
                console.log(movie);
                // res.json(pet);
                res.json(movie);
            }
        });
    },

    addRev: function (req, res) {
        console.log("696969696969696969");
        console.log(req.body);
        console.log("-------------");
        console.log(req.params);
        console.log("-------------");
        console.log(req.body.reviewer);
        console.log(req.body.stars);
        console.log(req.body.review);

        var rev = new R(req.body);

        rev.save(function(err, review){
            if(err){
                console.log(err);
                res.json(err);
            } else {
                console.log(review);
                console.log('[-]_[-] [-][-][][][][][][]');

                M.update({
                    _id: req.params.id
                }, {
                    $push: {
                        reviews: [{
                            reviewer: req.body.reviewer,
                            stars: req.body.stars,
                            review: req.body.review
                        }]
                    }
                }, function (err, movie) {
                    if (err) {
                        console.log(err);
                        console.log("llllllllllllll");
                        // res.json(err);/////////////////
                    } else {
                        console.log(movie);
                        console.log(rev);
                        console.log("dddddddddddd");
                        res.json(rev);
                    }
            });
            }
        });



        // if (!req.body){
        //     err = "Oops something went wrong"
        //     res.json(err)
        // }else {
            
        //     
        // }

    },

    getEdit: function (req, res) {
        M.find({
            _id: req.params.id
        }, function (err, movie) {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                console.log("found movie");
                res.json(movie);
            }
        });
    },

    delete: function (req, res) {
        console.log("2835-2385-2389645");
        console.log(req.params);
        M.remove({
            _id: req.params.id
        }, function (err, movie) {
            if (err) {
                console.log(err);
                res.sjon(err);
            } else {
                console.log("Deleted Movie");
                res.json();
            }
        });
    }
}
