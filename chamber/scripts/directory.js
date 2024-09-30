
// footer secting
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('currentYear').textContent = `© ${currentYear}`;
    document.getElementById('last-modified').textContent = `Last modified: ${lastModified}`;
});

// menu settings
const hambutton = document.querySelector('#menu');
const mainnav = document.querySelector('#navegation');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});


// members.json

// Fetch members data and display it on the page
async function fetchMembers() {

    // Fetch the JSON data from the file
    const response = await fetch('/chamber/scripts/members.json');
    
    // Check if the response is ok
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    
    // Parse the JSON data
    const data = await response.json();

    // Get the members list container
    const membersList = document.getElementById('members-list');

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
