export function getdate(){
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    const footer = document.getElementById('footer');

    document.getElementById('currentYear').textContent = `© ${currentYear}`;
    document.getElementById('last-modified').textContent = `Last modified: ${lastModified}`;



};