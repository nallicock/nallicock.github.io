const navBarBtns = document.getElementsByClassName("nav-btn");

for (let btn of navBarBtns) {
    btn.addEventListener('click', () => {
        btn.classList.add('apply-shake');
    });

    btn.addEventListener('animationend', () => {
        btn.classList.remove('apply-shake');
    });
}