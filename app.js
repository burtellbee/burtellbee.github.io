window.Telegram.WebApp.ready();

function saveData() {
    const key = document.getElementById('inputKey').value;
    const value = document.getElementById('inputValue').value;
    
    // Проверка наличия ключа и значения
    if (key && value) {
        Telegram.WebApp.storage.setItem(key, value).then(() => {
            document.getElementById('output').innerText = `Data saved: { ${key}: ${value} }`;
        }).catch(error => {
            document.getElementById('output').innerText = `Error saving data: ${error.message}`;
        });
    } else {
        document.getElementById('output').innerText = 'Please enter both key and value.';
    }
}

function loadData() {
    const key = document.getElementById('inputKey').value;
    
    // Проверка наличия ключа
    if (key) {
        Telegram.WebApp.storage.getItem(key).then(value => {
            if (value !== null) {
                document.getElementById('output').innerText = `Loaded data: { ${key}: ${value} }`;
            } else {
                document.getElementById('output').innerText = `No data found for key: ${key}`;
            }
        }).catch(error => {
            document.getElementById('output').innerText = `Error loading data: ${error.message}`;
        });
    } else {
        document.getElementById('output').innerText = 'Please enter a key to load.';
    }
}