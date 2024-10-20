import { getdate } from "./getdate.mjs";
import { menusettings } from "./menuH.mjs";

document.addEventListener('DOMContentLoaded', () => {
    getdate();
    menusettings();
});

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentDate = new Date();

function renderCalendar() {
    const calendarBody = document.getElementById("calendarBody");
    calendarBody.innerHTML = "";
    const monthName = document.getElementById("monthName");
    monthName.textContent = monthNames[currentDate.getMonth()] + " " + currentDate.getFullYear();

    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    let date = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            const cell = document.createElement("td");
            if (i === 0 && j < firstDay) {
                cell.textContent = "";
            } else if (date > daysInMonth) {
                cell.textContent = "";
            } else {
                cell.textContent = date;
                date++;
            }
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
    }
}

document.getElementById("prev").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

document.getElementById("next").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

renderCalendar();


document.addEventListener('DOMContentLoaded', () => {
    const messageDiv = document.getElementById('message');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentVisit = new Date();

    if (lastVisit) {
        const lastVisitDate = new Date(lastVisit);
        const timeDifference = currentVisit - lastVisitDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            messageDiv.textContent = "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
            messageDiv.textContent = `You last visited 1 day ago.`;
        } else {
            messageDiv.textContent = `You last visited ${daysDifference} days ago.`;
        }
    } else {
        messageDiv.textContent = "Welcome! Let us know if you have any questions.";
    }

    messageDiv.style.display = 'block';
    localStorage.setItem('lastVisit', currentVisit);
});
