document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("[data-tab-button]");
    const questions = document.querySelectorAll("[data-faq-question]");
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;


    window.addEventListener('scroll', function () {
        const posicaoAtual = window.scrollY;
        if (posicaoAtual < alturaHero) {
            ocultarHeader();
        } else {
            exibirHeader();
        }

    })

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

    questions.forEach(question => {
        question.addEventListener("click", (event) => {
            abreOuFechaResposta(event);
        })
    })
})

function ocultarHeader() {
    const header = document.querySelector(".header");
    header.classList.add("header--is-hidden");
}

function exibirHeader() {
    const header = document.querySelector(".header");
    header.classList.remove("header--is-hidden");
}

function esconderButaoAtivo() {
    const buttons = document.querySelectorAll("[data-tab-button]");

    buttons.forEach(button => {
        button.classList.remove('shows__tabs__button--is-active');
    })
}

function esconderTabs() {
    const tabsContainer = document.querySelectorAll("[data-tab-id]");

    tabsContainer.forEach((tab) => {
        tab.classList.remove("shows__list--is-active");
    })
}

function abreOuFechaResposta(event) {
    const classe = "faq__questions__item--is-open";
    const targetQuestion = event.target.parentNode;

    targetQuestion.classList.toggle(classe);
}