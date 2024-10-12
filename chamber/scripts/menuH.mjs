    
export function menusettings()  {   
    const hambutton = document.querySelector('#menu');
    const mainnav = document.querySelector('#menulist');

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('open');
        hambutton.classList.toggle('open');

        
    });
}

