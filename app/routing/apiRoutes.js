let friends = require('../data/friends.js');

module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friends);
    });

    app.post('/api/friends', (req, res) => {
        let scoreDifference = 0;
        let match = {
            name: '',
            photo: '',
            difference: 1000
        };

        let userData = req.body;
        let userName = userData.name;
        let userScores = userData.scores;

        let matchScore = userScores.map((item) => parseInt(item, 10));

        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: matchScore
        };

        console.log(`\n\r\n==========Name: ${userName}\nUser Score: ${userScores}\n\r\n==========`);

        let sum = matchScore.reduce((a, b) => a + b, 0)
        console.log(`/n/r/n==========Sum of user's score: ${sum}\nBest match score difference: ${match.difference}/n/r/n==========`);

        for (let i = 0; i < friends.length; i++) {

            console.log(friends[i].name);
            scoreDifference = 0;
            console.log(`Total Difference: ${scoreDifference}`);
            console.log(`Legend Match: ${match.difference}`);

            let legendMatch = friends[i].score.reduce((a, b) => a + b, 0);
            console.log(`Total friend score: ${legendMatch}`);
            scoreDifference += Math.abs(sum - matchScore);
            console.log("-------------------------> " + scoreDifference);

            if (scoreDifference <= match.difference) {
                match.name = friends[i].name;
                match.photo = friends[i].photo;
                match.difference = scoreDifference;
            }
            
            console.log(`Score difference: ${scoreDifference}`);
        }
        console.log(match);

        friends.push(userData);
        console.log(`New entry added!\n----------\n${userData}`);
        res.json(userData);
    });
}