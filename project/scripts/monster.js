import { getdate } from "./getdate.mjs";
import { menusettings } from "./menuH.mjs";


document.addEventListener('DOMContentLoaded', () => {
    menusettings();
    getdate();
});

const galery = document.getElementById("galery");
let currentPage = 1; // variable to initial page
const urlBase = `https://api.open5e.com/v1/monsters/?format=json`;

// sheach variavle
let searchTerm = '';

// function to search data to API
async function apiFetch(page, search = '') {
    const url = `${urlBase}&page=${page}&search=${encodeURIComponent(search)}`; // update the to finde data
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to show result
function displayResults(data) {
    data = data.results;
    let htmlContent = ""; // init html 

    data.forEach(element => {
        const name = element.name;
        const size = element.size;
        const cr = element.cr;
        const type = element.type;
        const speed = element.speed;
        const alignment = element.alignment;
        const AC = element.armor_class;
        const hp = element.hit_points;
        const str = element.strength;
        const dex = element.dexterity;
        const con = element.constitution;
        const int = element.intelligence;
        const wis = element.wisdom;
        const char = element.charisma;
        const skills = element.skills;
        const senses = element.senses;
        const language = element.languages;
        const actions = element.actions;

        function formatAttributes(attributes) {
            return `
        Attributes:
        ${Object.entries(attributes)
                .map(([type, value]) => `${type.charAt(0).toUpperCase() + type.slice(1)}: ${value}`)
                .join('\n')}
            `;
        }

        function getActionsDetails(actionsArray) {
            return actionsArray.map(action => {
                let details = `<p><strong> ${action.name}</strong>`;
                
                
                if (action.attack_bonus) {
                    details += `<br><strong>Attack Bonus:</strong> +${action.attack_bonus}`;
                }
                if (action.damage_dice) {
                    details += `<br><strong>Damage:</strong> ${action.damage_dice}`;
                }
                
                details += `</p>`; 
                return details;
            }).join(''); 
        }

        // Ads html to each monster
        htmlContent += `
        <div class="card">
            <div class="name">
                <h3>${name}</h3>
                <p>${alignment}</p>
                <p class="cr">CR: ${cr}</p>
            </div>
            <div class="baseInfo">
                <p>${size}</p>
                <p>${type}</p>
                <div class="speed">
                    ${formatAttributes(speed)}
                </div>
            </div>
            <div class="achp">
                <p>AC: ${AC}</p>
                <p>HP: ${hp}</p>
            </div>
            <div class="mod">
                <p>STR ${str}</p>
                <p>DEX ${dex}</p>
                <p>CON ${con}</p>
                <p>INT ${int}</p>
                <p>WIS ${wis}</p>
                <p>CHAR ${char}</p>
            </div>
            <div class="skill">
                <h4>Skills</h4>
                ${formatAttributes(skills)}
            </div>
            <div class="sense">
                <h4>Senses</h4>
                ${senses}
            </div>
            <div class="language">
                <h4>Languages</h4>
                ${language}
            </div>
            <button class="toggle-button">Actions</button>
            <div class="actions-container" style="display:none;">${getActionsDetails(actions)}</div>
        </div>
        `;
    });

    galery.innerHTML = htmlContent;

    // add event to show the actions 
    const toggleButtons = document.querySelectorAll('.toggle-button');
    toggleButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const actionsContainer = button.nextElementSibling; // Select the next element (actions-container)
            if (actionsContainer.style.display === 'none' || actionsContainer.style.display === '') {
                actionsContainer.style.display = 'block'; // show the container
                button.textContent = 'Hidden actions'; 
            } else {
                actionsContainer.style.display = 'none'; // hidder the container
                button.textContent = 'Action'; 
            }
        });
    });
}

function updateGallery() {
    apiFetch(currentPage, searchTerm);
}

function nextPage() {
    currentPage++;
    updateGallery();
}

function previousPage() {
    if (currentPage > 1) { 
        currentPage--;
        updateGallery();
    }
}

apiFetch(currentPage);

function createNavigation() {
    return `
        <div id="navigation-Grid">
            <button id="prevButton">Previous</button>
            <button id="nextButton">Next</button>
        </div>
    `;
}

function createSearchBar() {
    return `
        <div id="search-bar">
            <input type="text" id="searchInput" placeholder="Search for monsters...">
            <button id="searchButton">Search</button>
        </div>
    `;
}

galery.insertAdjacentHTML('beforebegin', createSearchBar() + createNavigation());
galery.insertAdjacentHTML('afterend', createNavigation());

document.getElementById('nextButton').addEventListener('click', nextPage);
document.getElementById('prevButton').addEventListener('click', previousPage);

document.getElementById('searchButton').addEventListener('click', () => {
    searchTerm = document.getElementById('searchInput').value; 
    currentPage = 1; 
    updateGallery(); 
});


document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchTerm = e.target.value;
        currentPage = 1;
        updateGallery();
    }
});

