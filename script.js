const hamb_menu = document.getElementById("hamb_menu");
const line = document.querySelectorAll('.line');
const navMobile = document.getElementById("menu")


const activeMenu = () => {
    if(!hamb_menu.classList.contains('active')) {
        hamb_menu.classList.add('active');
        line.forEach(line => {
            line.classList.add('active');
        })
        navMobile.classList.add('active');
    } else {
        hamb_menu.classList.remove('active');
        line.forEach(lines => {
            lines.classList.remove('active');
        })
        navMobile.classList.remove('active');
    }
}

hamb_menu.addEventListener('click', activeMenu);

