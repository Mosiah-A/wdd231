
// footer secting
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('currentYear').textContent = `© ${currentYear}`;
    document.getElementById('last-modified').textContent = `Last modified: ${lastModified}`;
});
