export function getdate(){
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    const footer = document.getElementById('footer');
    footer.style.cssText = `
    margin: auto;
    text-align: left;
    background-color: var(--blue    );
    color: var(--white);
    height: 10rem;
    padding: 20px;
    padding-bottom: 70px;
    `

    document.getElementById('currentYear').textContent = `© ${currentYear}`;
    document.getElementById('last-modified').textContent = `Last modified: ${lastModified}`;


};