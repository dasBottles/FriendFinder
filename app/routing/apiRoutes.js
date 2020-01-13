let friends = require('../data/friends.js');

module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friends);
    });

    app.post('/api/friends', (req, res) => {
        let matchDifference = 0;
        let match = {
            name: '',
            photo: '',
            matchDifference: 1000
        };

        let userData = {
            name: '',
            photo: '',
            scores: []
        }
        let userSum = req.body.scores.map((item) => parseInt(item, 10));
        
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: userSum
        };
        
        console.log(`\n\r\n==========\nName: ${userData.name}\nUser Score: ${userData.scores}\n\==========`);
        
        const scoreTotal = (arr) => arr.reduce((a, b) => a + b, 0);
        console.log('scoreTotal', scoreTotal(userSum))

        friends.forEach(element => {
            difference = 0;
            let matchSum = scoreTotal(element.score);
            console.log(`\n------------\nLegend Name: ${element.name}\nScore: ${matchSum}\n------------\n`);

            difference += Math.abs(matchSum - userSum);

            if (difference <= matchDifference) {
                matchDifference = difference;
                match.name = element.name;
                match.photo = element.photo;
            }
        });



        friends.push(userData);
        res.json(userData);
        console.log(`New entry added!\n----------\n${userData}`);
    });
}