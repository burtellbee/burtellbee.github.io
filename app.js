window.addEventListener('DOMContentLoaded', () => {
    const valueEl = document.getElementById('value');
    // Telegram.WebApp.CloudStorage.getItem('value', (value) => {
    //     console.log(value)
    //     valueEl.innerText = value;
    // });
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
Telegram.WebApp.ready();
function loadData() {
    Telegram.WebApp.CloudStorage.getItem('value', function(value) {
        if (value) {
            document.getElementById('value').innerText = value;
        } else {
            document.getElementById('value').innerText = `No data found for!`;
        }
    });
}