var html = document.querySelector('html');
var body = document.querySelector('body');
var dark = document.getElementById('dark');
let icon = document.querySelectorAll('.heart-icon');
var logo = document.getElementById('img1')

var nav = document.querySelector('.nav')
var hero = document.querySelector('.view-1')
var card = document.querySelectorAll('.card')
var beans = document.querySelector('.beans')
var about = document.querySelector('#About');
var them = 0;

dark.addEventListener('click', () => {
    if (them === 0) {

        logo.src = './images/dark-logo.png'
        logo.style.scale = '1.5'
        logo.style.paddingTop = '1.6rem'
        body.style.backgroundColor = '#000';
        html.style.backgroundColor = '#000';
        body.style.color = '#f1f1f1';
        dark.innerHTML = 'Light Mode';
        dark.style.color = '#000'
        beans.style.backgroundColor = '#000';
        beans.style.boxShadow = '0 4px 8px rgba(255, 255, 255, 0.1)';
        about.style.boxShadow = '0 4px 8px rgba(255, 255, 255, 0.1)';
        hero.style.boxShadow = '0 4px 8px rgba(255, 255, 255, 0.1)';
        nav.style.boxShadow = '0 4px 8px rgba(255, 255, 255, 0.1)';
        card.forEach(c => {
            c.style.backgroundColor = '#000';
            c.style.boxShadow = '0 4px 8px rgba(255, 255, 255, 0.1)';
        });


        document.querySelectorAll('h1, h2, h3, h4, p, a').forEach(el => {
            el.style.color = '#f1f1f1';
        });

        them = 1;
    } else {
        logo.src = './images/logo.png'
        logo.style.scale = '1'
        logo.style.paddingTop = '0rem'
        nav.style.boxShadow = '0 4px 8px rgba(228, 220, 220, 0.83)'
        body.style.backgroundColor = 'white';
        html.style.backgroundColor = 'white';
        body.style.color = '#000';
        dark.innerHTML = 'Dark Mode';
        dark.style.color = '#000';
        beans.style.backgroundColor = '#ffffff';
        beans.style.boxShadow = '0 15px 25px rgba(0, 0, 0, 0.1)';
        document.querySelectorAll('h1, h2, h3, h4, p, a').forEach(el => {
            el.style.color = '#000';
        });
        card.forEach(c => {
            c.style.backgroundColor = '#ffffff';
            c.style.boxShadow = '0 15px 25px rgba(0, 0, 0, 0.1)';
        });


        them = 0;
    }

    dark.style.cursor = 'pointer';
});


icon.forEach((icon) => {
    var val = 0;
    icon.addEventListener('click', () => {
        if (val === 0) {
            icon.innerHTML = '❤️';
            val = 1;
        } else {
            icon.innerHTML = '🤍';
            val = 0;
        }
    });
});
