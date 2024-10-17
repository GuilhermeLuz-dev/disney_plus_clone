document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("[data-tab-button]");


    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const targetTab = event.target.dataset.tabButton
            const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
            esconderButaoAtivo();
            esconderTabs();
            button.classList.add("shows__tabs__button--is-active");
            tab.classList.add("shows__list--is-active");

        })
    })

})

function esconderButaoAtivo(){
    const buttons = document.querySelectorAll("[data-tab-button]");

    buttons.forEach(button =>{
        button.classList.remove('shows__tabs__button--is-active');
    })
}

function esconderTabs() {
    const tabsContainer = document.querySelectorAll("[data-tab-id]");

    tabsContainer.forEach((tab) => {
        tab.classList.remove("shows__list--is-active");
    })
}