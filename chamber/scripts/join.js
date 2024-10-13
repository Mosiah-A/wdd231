import { getdate } from "./getdate.mjs";
import { menusettings } from "./menuH.mjs";

document.addEventListener('DOMContentLoaded', () => {
    getdate();
    menusettings();
});


const bronze = document.getElementById('bronzeModal');
const modal = document.querySelector("dialog");
const close = document.getElementById("close");
const silver = document.getElementById("silverModal");
const gold = document.getElementById("goldModal");

bronze.addEventListener('click', () => {
    const description = 'A bronze member shown on a directory of members';
    createModal('Bronze', description);
    modal.showModal(); // Ensure to show the modal after setting content
});

silver.addEventListener('click', () => {
    const description = 'A Silver member shown on directory members and on HomePage';
    createModal('Silver', description);
    modal.showModal();
});

gold.addEventListener('click', () => {
    const description = 'A Gold member shown on directory members, on HomePage and has access to a private group';
    createModal('Gold', description);
    modal.showModal();
});

close.addEventListener('click', () => {
    modal.close();
    modal.querySelector('h3')?.remove();
    modal.querySelector('p')?.remove();
});

function createModal(title, description) {
    modal.querySelector('h3')?.remove(); // Ensure existing titles are removed
    modal.querySelector('p')?.remove(); // Ensure existing paragraphs are removed

    const titleElement = document.createElement('h3');
    titleElement.innerText = title;

    const p = document.createElement('p');
    p.innerText = description;

    modal.appendChild(titleElement);
    modal.appendChild(p);
}

document.addEventListener('DOMContentLoaded', () => {
    const timestampField = document.getElementById('datetime');
    const currentDateTime = new Date().toISOString();

    const date = new Date(decodeURIComponent(currentDateTime));
    const formattedDate = date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        fractionalSecondDigits: 3,
        hour12: false,
        timeZone: 'UTC'
    });

    timestampField.value = formattedDate;
});
