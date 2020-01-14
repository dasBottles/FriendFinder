let friends = require('../data/friends.js');

module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friends);
    });

    app.post('/api/friends', (req, res) => {
        let matchScore = 0;

        let legendMatch = {
            name: '',
            photo: '',
            legendDifference: 1000
        };

        let userData = {
            name: '',
            photo: '',
            score: []
        };

        let userScoreTotal = req.body.scores.map((item) => parseInt(item, 10));
        console.log("Best match friend diff " + legendMatch.legendDifference);
        
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            score: userScoreTotal
        };
        let userScoreSum = userScoreTotal.reduce((a, b) => a + b, 0);
        
        
        console.log(`\n\r\n==========\nName: ${userData.name}\nUser Score: ${userData.score}\nScore Total: ${userScoreSum}\n==========`);

        friends.forEach((element) => {
            matchScore = 0;
            console.log(`\n---------\nLegend Name: ${element.name}\nMatch Score: ${matchScore}\nLegend Difference: ${legendMatch.legendDifference}\n----------\n`)
            let matchSum = element.score.reduce((a, b) => a + b, 0);
            console.log("Total friend score " + matchSum);
            matchScore += Math.abs(userScoreSum - matchSum);
            console.log("-------------------------> " + matchScore);

            
            if (matchScore <= legendMatch.legendDifference) {
                legendMatch.name = element.name;
                legendMatch.photo = element.photo;
                legendMatch.legendDifference = matchScore;
            }
        });

        console.log(legendMatch);
        friends.push(userData);
        console.log(`New entry added!\n----------\n${userData.name}`);
        res.json(legendMatch);
    });
}