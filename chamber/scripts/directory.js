
// footer secting
import getData from "./footer";

document.addEventListener('DOMContentLoaded', () => {
    getData()

})


// menu settings
const hambutton = document.querySelector('#menu');
const mainnav = document.querySelector('#navegation');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});

/*
// members.json
const url = "https://mosiah-a.github.io/wdd231/chamber/scripts/members.json"
// Fetch members data and display it on the page
async function fetchMembers() {

    // Fetch the JSON data from the file
    const response = await fetch(url);
    
    // Parse the JSON data
    const data = await response.json();

    // Get the members list container
    const membersList = await document.getElementById('members-list');

    // Iterate through the members and display their information
    data.members.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('member');

        // Create the content to display
        memberDiv.innerHTML = `
            
            <h2>${member.name}</h2>
            <p >Other information: ${member['other information']}</p>
            
            <div class="imageMemberBox">
                <img src="${member.image}" alt="" width="200px">
                <div>
                    <p><strong>Address:</strong> ${member.addresses}</p>
                    <p><strong>Phone Number:</strong> ${member['phone numbers']}</p>
                    <p><strong>Website URL:</strong> <a href="${member['website URLs']}" target="_blank">${member['website URLs']}</a></p>
                    <p><strong>Membership Level:</strong> ${member['membership-level']}</p>
                </div>
                
            </div>
        `;

        // Append the member's information to the container
        membersList.appendChild(memberDiv);
    });
    
}

// Call the function to fetch and display the members
fetchMembers();
*/
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