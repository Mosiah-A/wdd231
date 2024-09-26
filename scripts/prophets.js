const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetsData(url) {
    let response = await fetch(url);
    let data = await response.json();
    // console.table(data);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullname = document.createElement('h2');
        let portrait = document.createElement('img');

        fullname.textContent = `${prophet.name} ${prophet.lastname}`;
        

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullname);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
  }
getProphetsData(url)    
