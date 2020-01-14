let friends = require('../data/friends.js');

let display = $('#legendDisplay');

const displayLegends = () => {
    friends.forEach(element => {
    display
    .append(`
        <div class="card" style="width: 18rem;">
        <img src="${element.photo}" class="card-img-top" alt="${element.name}'s photo">
        <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    `)
    });
};

displayLegends();