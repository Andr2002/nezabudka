let exitBtn = document.querySelector('.exit-btn').addEventListener('click', () => {
    if (confirm("Вы действительно хотите выйти из аккаунта?"))
        window.location.href = "index.html";
    else
        return false;
});