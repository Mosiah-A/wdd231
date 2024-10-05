import { getdate } from "./getdate.mjs";
import { menusettings } from "./menuH.mjs";
import { apiFetch, forecast } from "./weather.mjs";

document.addEventListener('DOMContentLoaded', () => {
    getdate();
    menusettings();
    apiFetch();
    forecast();
});

const url = "https://mosiah-a.github.io/wdd231/chamber/scripts/members.json";
const cards = document.querySelector("#members-list");

async function fetchMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        // sorte data
        const shuffledMembers = data.members.sort(() => 0.5 - Math.random());

        // Limit to max 4 members
        const limitedMembers = shuffledMembers.slice(0, 4);

        // add each members
        limitedMembers.forEach(member => {    
            if (member['membership-level'] === 1 || member['membership-level'] === 2) {
                const memberDiv = document.createElement('div');
                memberDiv.classList.add('member');

                let name = document.createElement('h2');
                name.textContent = member.name;

                let others = document.createElement('p');
                others.textContent = member['other information'];

                const innerdiv = document.createElement('div');
                innerdiv.classList.add('imageMemberBox');

                let img = document.createElement('img');
                img.setAttribute('src', member.image);
                img.setAttribute('alt', 'profile image');
                img.setAttribute('width', '200px');

                const divinfo = document.createElement('div');

                // add element remotely
                divinfo.innerHTML = `
                    <strong>Address:</strong> 
                    <p>${member.addresses}</p>
                    <p class='number'><strong>Phone Number:</strong> ${member['phone numbers']}</p>
                    <a class="website" href="${member['website URLs']}" target="_blank">Website</a>
                `;

                // create struture
                memberDiv.appendChild(name);
                memberDiv.appendChild(others);
                memberDiv.appendChild(innerdiv);
                innerdiv.appendChild(img);
                innerdiv.appendChild(divinfo);
                cards.appendChild(memberDiv);
            }
        });
    } catch (error) {
        console.error('Erro ao buscar membros:', error);
    }
}

fetchMembers();
