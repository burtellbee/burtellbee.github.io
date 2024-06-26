// Инициализация WebApp
Telegram.WebApp.ready();

function saveData() {
    const key = document.getElementById('inputKey').value;
    const value = document.getElementById('inputValue').value;
    
    // Проверка наличия ключа и значения
    if (key && value) {
        Telegram.WebApp.CloudStorage.setItem(key, value, (result, error) => {
            if (result) {
                document.getElementById('output').innerText = `Data saved: { ${key}: ${value} }`;
            } else {
                document.getElementById('output').innerText = `Error saving data: ${error}`;
            }
        });
    } else {
        document.getElementById('output').innerText = 'Please enter both key and value.';
    }
}

function loadData() {
    const key = document.getElementById('inputKey').value;
    
    // Проверка наличия ключа
    if (key) {
        Telegram.WebApp.CloudStorage.getItem(key, (value, error) => {
            if (value) {
                document.getElementById('output').innerText = `Loaded data: { ${key}: ${value} }`;
            } else {
                document.getElementById('output').innerText = `Error loading data: ${error || 'No data found for key: ' + key}`;
            }
        });
    } else {
        document.getElementById('output').innerText = 'Please enter a key to load.';
    }
}