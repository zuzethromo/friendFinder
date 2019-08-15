let friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        let bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
    console.log(req.body);

    let userData = req.body;
    let userScores = userData.scores;

    console.log(userScores);

    let totalDifference = 0;
        
    for (let i = 0; i < friends.length; i++) {
        console.log(friends[i]);
        totalDifference = 0;

    for (let j = 0; j < friends[i].scores[j]; j++) {
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
        
        if (totalDifference <= bestMatch.friendDifference) {
            bestMatch.name = friends[i].name;
            bestMatch.photo = friends[i].photo;
            bestMatch.friendDifference = totalDifference;
        }
    }
    }

    friends.push(userData);
    res.json(bestMatch);

    });
}