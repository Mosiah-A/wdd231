import { getdate } from "./getdate.mjs";
import { menusettings } from "./menuH.mjs";


document.addEventListener('DOMContentLoaded', () => {
    menusettings();
    getdate();
});

const galery = document.getElementById("galery");
let currentPage = 1; // Variável para manter a página atual
const urlBase = `https://api.open5e.com/v1/monsters/?format=json`;

// Variável para o termo de busca
let searchTerm = '';

// Função para buscar dados da API
async function apiFetch(page, search = '') {
    const url = `${urlBase}&page=${page}&search=${encodeURIComponent(search)}`; // Atualiza a URL com a página atual e o termo de busca
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

// Função para exibir os resultados
function displayResults(data) {
    data = data.results;
    let htmlContent = ""; // Inicializa uma string vazia para o conteúdo HTML

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
                
                // Verifica se a ação tem bônus de ataque e dado de dano e inclui se houver
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

        // Adiciona o HTML para cada monstro
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

    // Adiciona os eventos de clique para cada botão de ações
    const toggleButtons = document.querySelectorAll('.toggle-button');
    toggleButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const actionsContainer = button.nextElementSibling; // Seleciona o próximo elemento (actions-container)
            if (actionsContainer.style.display === 'none' || actionsContainer.style.display === '') {
                actionsContainer.style.display = 'block'; // Mostra o container
                button.textContent = 'Hidden actions'; // Altera o texto do botão
            } else {
                actionsContainer.style.display = 'none'; // Esconde o container
                button.textContent = 'Action'; // Restaura o texto do botão
            }
        });
    });
}

// Função para atualizar a galeria ao mudar de página
function updateGallery() {
    apiFetch(currentPage, searchTerm);
}

// Funções para controlar a navegação
function nextPage() {
    currentPage++;
    updateGallery();
}

function previousPage() {
    if (currentPage > 1) { // Evita que a página atual fique menor que 1
        currentPage--;
        updateGallery();
    }
}

// Inicializa a galeria na primeira página
apiFetch(currentPage);

// Cria a barra de busca e a navegação
function createNavigation() {
    return `
        <div id="navigation-Grid">
            <button id="prevButton">Previous</button>
            <button id="nextButton">Next</button>
            <button id="scrollToTop">Back to Top</button>
        </div>
    `;
}

// Cria a barra de busca
function createSearchBar() {
    return `
        <div id="search-bar">
            <input type="text" id="searchInput" placeholder="Search for monsters...">
            <button id="searchButton">Search</button>
        </div>
    `;
}

// Insere a barra de busca e a navegação no início e no final da galeria
galery.insertAdjacentHTML('beforebegin', createSearchBar() + createNavigation());
galery.insertAdjacentHTML('afterend', createNavigation());

// Adiciona eventos de clique para os botões de navegação
document.getElementById('nextButton').addEventListener('click', nextPage);
document.getElementById('prevButton').addEventListener('click', previousPage);

// Evento de clique para o botão de busca
document.getElementById('searchButton').addEventListener('click', () => {
    searchTerm = document.getElementById('searchInput').value; // Obtém o valor da busca
    currentPage = 1; // Reinicia para a primeira página
    updateGallery(); // Atualiza a galeria com o novo termo de busca
});

// Opcional: adicionar um evento para buscar ao pressionar Enter
document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchTerm = e.target.value;
        currentPage = 1;
        updateGallery();
    }
});

// Evento para o botão "Voltar ao Topo"
document.getElementById('scrollToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Rolagem suave para o topo
});
