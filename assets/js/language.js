/*================================
    VARIABLES
=================================*/

const changeLanguageLink = document.querySelector('#change-language-link')
const english = document.querySelectorAll('.en');
const viet = document.querySelectorAll('.vi');


/*================================
    EVENT LISTENER
=================================*/

changeLanguageLink.addEventListener('click', (event) => {

    let lang = event.target.dataset.lang;
    changeLanguage(lang);
});


/*================================
    CHANGE LANGUAGE FUNCTION
=================================*/

function changeLanguage(lang) {

    if (lang == 'eng') {
        english.forEach(el => {
            el.style.display = 'block';
        });

        viet.forEach(el => {
            el.style.display = 'none';
        });

        changeLanguageLink.dataset.lang = 'vi';
        changeLanguageLink.innerHTML = 'Xem CV Tiếng Việt';
        setLocalStorage(lang);
    }
    else {
        viet.forEach(el => {
            el.style.display = 'block';
        });

        english.forEach(el => {
            el.style.display = 'none';
        });

        changeLanguageLink.dataset.lang = 'eng';
        changeLanguageLink.innerHTML = 'View this CV in English';
        setLocalStorage(lang);
    }
}


/*================================
    SET LOCAL STORAGE
=================================*/

function setLocalStorage(lang) {
    let userLang = {
        lang: lang
    }

    let userLanguage = JSON.stringify(userLang);
    localStorage.setItem('userLanguage', userLanguage);
}

/*================================
    CHECK LOCAL STORAGE - 
    - FIRES ON EVERY PAGE LOAD
=================================*/

function checkLocalStorage() {
    changeLanguage('eng')
    if ('userLanguage' in localStorage) {
        let userLanguage = localStorage.getItem('userLanguage');
        let userLang = JSON.parse(userLanguage);
     
        if (userLang.lang == 'vi') {
            changeLanguage('vi');
        }
        else {
            changeLanguage('eng')
        }
    }
}
checkLocalStorage();