
import { getdate } from "./getdate.mjs";
import { menusettings } from "./menuH.mjs";
document.addEventListener('DOMContentLoaded', () => {
    getdate()
    menusettings()
})


const url = "https://mosiah-a.github.io/wdd231/chamber/scripts/members.json"

const cards = document.querySelector("#members-list");

async function fetchMembers() {
    const response = await fetch(url)
    const data = await response.json()
    data.members.forEach(member => {
        const memberDiv = document.createElement('div')
        memberDiv.classList.add('member');
        let name = document.createElement('h2');
        name.textContent = member.name;
        let others = document.createElement('p');
        others.textContent = member['other information'];
        const innerdiv =  document.createElement('div');
        innerdiv.classList.add('imageMemberBox');
        let img =document.createElement('img');
        img.setAttribute('src', member.image);
        img.setAttribute('alt', 'profile image')
        img.setAttribute('width', '200px');
        const divinfo = document.createElement('div');
        divinfo.classList.add('divInfo');
        let information = document.createElement('p');
        information.innerHTML= `<p><strong>Address:</strong> ${member.addresses}</p>
                    <p><strong>Phone Number:</strong> ${member['phone numbers']}</p>
                    <p><strong>Website URL:</strong> <a href="${member['website URLs']}" target="_blank">${member['website URLs']}</a></p>
                    <p><strong>Membership Level:</strong> ${member['membership-level']}</p>`

        memberDiv.appendChild(name);
        memberDiv.appendChild(others);
        memberDiv.appendChild(innerdiv);
        innerdiv.appendChild(img);
        innerdiv.appendChild(divinfo);
        divinfo.appendChild(information);
        cards.appendChild(memberDiv);
    })
};

fetchMembers();



const list = document.getElementById('list')
const grid = document.getElementById('grid')

list.addEventListener('click', () => {
    const member = document.getElementById("members-list")
    member.classList.remove('grid')
    member.classList.add("list")
    grid.classList.remove('active')
    list.classList.add('active')
})

grid.addEventListener('click', () => {
    const member = document.getElementById("members-list")
    member.classList.remove('list')
    member.classList.add("grid")
    list.classList.remove('active')
    
    grid.classList.add('active')

})