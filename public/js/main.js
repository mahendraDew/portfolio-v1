// ********************* about page - qualification/work/POR ************************
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active');
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})



// ************* footer - auto update copyright year *************
document.querySelector('#copyright-year').innerText = new Date().getFullYear();


// ****************** contact-page - form validation ***********************
function validateForm(){
    
}