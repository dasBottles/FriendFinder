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

        let matchData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: matchScore
        };
        
        console.log(`/n/r/n==========Name: ${userName}\nUser Score: ${userScores}/n/r/n==========`);

        let sum = matchScore.reduce((a, b) => a + b, 0)
        console.log(`/n/r/n==========Sum of user's score: ${sum}\nBest match score difference: ${match.difference}/n/r/n==========`);

        friends.forEach(element => {
            console.log(friends.name);
            scoreDifference = 0;
            
        })

    })
}