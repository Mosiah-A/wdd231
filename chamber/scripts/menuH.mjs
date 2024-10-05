    
export function menusettings()  {   
    const hambutton = document.querySelector('#menu');
    const mainnav = document.querySelector('#navegation');

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('open');
        hambutton.classList.toggle('open');

        
    });
    setNavStyle()
}

function setNavStyle() {
    const logoNav = document.getElementById('logo-nav');
    const header = document.querySelector('header');
    const navDiv = document.getElementById('navDiv');
    const navegation = document.getElementById('navegation');
    const menu = document.getElementById('menu');
    const menuList = document.getElementById('menulist');
    const links = document.getElementsByClassName('link');
    const joinbtn = document.getElementById('joinbtn');
    logoNav.style.cssText = `
    width: 44px;
    height: auto;
    margin-left: 80px;
    `
    
    header.style.cssText = `
    display:block;
    `
    
    navDiv.style.cssText = `
    display:grid;
    grid-template-columns: 44px auto 44px;
    color: var(--red);
    background-color: var(--light-blue);
    margin: 0;
    padding: 20px;
    `
    navegation.style.cssText = `
    width: 100%;
    background-color: var(--black);
    grid-template-rows: 1fr;
    text-align: center;
    `
    menu.style.cssText = `
    display: none;
    
    `
    menuList.style.cssText = `
    display: flex;  
    flex-direction: row;
    height: 4rem;
    width: 100%;
    list-style: none;
    justify-content: space-around;
    align-items: center;
    `
    
    for (let i = 0; i < links.length; i++) {
        links[i].style.cssText = `
            color: var(--white);
            text-decoration: none;
            padding: 1rem;

        `;
    }
    joinbtn.style.cssText = `
    width: 150px;
    height: 55px;
    position: absolute;
    right: 100px;
    font-size: 18px;
    background-color: var(--blue);
    color: var(--white);
    border: none;
    border-radius: 20px;
    `
    joinbtn.addEventListener('mouseover', function() {
        joinbtn.style.backgroundColor = 'var(--dblue)'; // Cor ao passar o mouse
        joinbtn.style.fontSize = '20px'; // Aumenta o tamanho da fonte
    });
    
    joinbtn.addEventListener('mouseout', function() {
        joinbtn.style.backgroundColor = 'var(--blue)'; // Restaura a cor original
        joinbtn.style.fontSize = '18px'; // Restaura o tamanho da fonte original
    })




     // CSS Styling using JavaScript
     const style = document.createElement('style');
     style.innerHTML = `
         #navDiv {
             display: flex;
             flex-direction: column;
             height: 20vh;
         }
         h1 {
             font-size: 1rem;
             width: 100%;
         }
         button {
             display: block;
             margin: 0 auto;
             width: auto;
             padding: 10px 20px;
             font-size: 1rem;
             border-radius: 8px;
         }
         #menulist {
             display: flex;
             flex-direction: column;
             justify-content: space-around;
             align-items: center;
             width: 100%;
             background-color: var(--dblue);
             padding: 0;
             margin: 0;
         }
         #navegation li {
             width: 99vw;
         }
         #navegation li a {
             width: 100%;
             text-align: center;
             padding: 15px 0;
             border-bottom: 1px solid var(--dblue);
         }
         #menu {
             display: block;
             font-size: 1.5rem;
             border: 0;
             background: none;
             color: var(--black);
             width: 100vw;
             cursor: pointer;
             padding: 20px;
         }
         #menu::before {
             content: "☰";
             font-size: 40px;
             color: var(--black);
         }
         #menu.open::before {
             content: "❎";
         }
         header {
             background-color: var(--dblue);
         }
         #navegation {
             display: grid;
             grid-template-rows: 0fr;
             transition: grid-template-rows 0.5s ease-out;
         }
         #navegation.open {
             grid-template-rows: 1fr;
         }
         #navegation a:hover {
             background-color: #bbb;
             color: #333;
             font-weight: 700;
             width: 100%;
         }
     `;
     document.head.appendChild(style);
}


