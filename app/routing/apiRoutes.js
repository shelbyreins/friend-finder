var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
       var user = req.body;
       var scoresArray = [];
       var bestMatch = 0

       for(var i = 0; i < friends.length; i++){
           var scoreDifference = 0;
           
           for(var j = 0; j < user.scores.length; j++){
               scoreDifference += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(user.scores[j])));
           }

           scoresArray.push(scoreDifference);
       }

    for (var i = 0; i < scoresArray.length; i ++){
       

        if(scoresArray[i] <= scoresArray[bestMatch]){
            bestMatch = i;
        }
    }

    var bestFriendMatch = friends[bestMatch];
        res.json(bestFriendMatch);

    friends.push(user);
    });
}

