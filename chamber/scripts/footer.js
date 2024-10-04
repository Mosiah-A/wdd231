
export let getData=  document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('currentYear').textContent = `© test ${currentYear}`;
    document.getElementById('last-modified').textContent = `Last modified: ${lastModified}`;
    createDesign()
});

function createDesign () {
document.addEventListener('DOMContentLoaded', () => {

    let footer = document.getSelection('footer');
    footer.style.cssText =  `
    margin: auto;
    text-align: center;
    background-color: var(--blue);
    color: var(--white);
    height: 4rem;
    padding: 20px;
    padding-bottom: 70px;`
})};

