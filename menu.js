// Elementos do menu
const btnMenu = document.getElementById('btn_menu');
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');

// Função para abrir/fechar o menu
function toggleMenu(event) {
    event.preventDefault(); // Evita comportamento padrão do link/botão
    menu.classList.toggle('abrir-menu');
    document.body.classList.toggle('menu-aberto'); // Controla o overflow do body
}

// Função para fechar o menu
function closeMenu() {
    menu.classList.remove('abrir-menu');
    document.body.classList.remove('menu-aberto'); // Restaura rolagem do body
}

// Abrir menu ao clicar no botão
btnMenu.addEventListener('click', toggleMenu);

// Fechar menu ao clicar no overlay
overlay.addEventListener('click', closeMenu);

// Fechar menu ao clicar no botão de fechar
menu.querySelector('.btn-fechar').addEventListener('click', closeMenu);

// Função para rolar até um elemento pelo ID
function scrollToElement(elementId) {
    closeMenu(); // Fecha o menu antes de rolar
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
        console.log('Rolando para:', elementId);
    } else {
        console.log('Elemento não encontrado:', elementId);
    }
}

// Associa eventos aos links do menu desktop e mobile
const links = [
    { buttonId: 'vaiStaDesktop', targetId: 'AlvoSta' },
    { buttonId: 'vaiEspDesktop', targetId: 'AlvoEsp' },
    { buttonId: 'vaiSobDesktop', targetId: 'AlvoSob' },
    { buttonId: 'vaiProDesktop', targetId: 'AlvoPro' },
    { buttonId: 'vaiStaMobile', targetId: 'AlvoSta' },
    { buttonId: 'vaiEspMobile', targetId: 'AlvoEsp' },
    { buttonId: 'vaiSobMobile', targetId: 'AlvoSob' },
    { buttonId: 'vaiProMobile', targetId: 'AlvoPro' }
];

links.forEach(({ buttonId, targetId }) => {
    const button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Evita comportamento padrão do link
            scrollToElement(targetId);
        });
    }
});