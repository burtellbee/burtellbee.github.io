window.addEventListener('DOMContentLoaded', () => {
    Telegram.WebApp.ready();
    const valueEl = document.getElementById('value');
    Telegram.WebApp.CloudStorage.getItem('value', (v) => {
        console.log(v);
        valueEl.innerText = v;
    });
    const nameContainer = document.getElementById('name');
    nameContainer.innerText = '@user';
    const formContainer = document.getElementById('form');
    formContainer.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(formContainer.querySelector('input').value)
        let input = formContainer.querySelector('input');
        let val = input.value;
        if (val.length > 0) {
            Telegram.WebApp.CloudStorage.setItem('value', val);
        } else {
            Telegram.WebApp.CloudStorage.setItem('value', '0');
        }
        valueEl.innerText = val;
    })
})