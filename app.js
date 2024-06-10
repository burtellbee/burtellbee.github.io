// Инициализация WebApp
Telegram.WebApp.ready();

function saveData() {
    const key = document.getElementById('inputKey').value;
    const value = document.getElementById('inputValue').value;
    
    // Проверка наличия ключа и значения
    if (key && value) {
        Telegram.WebApp.storage.set(key, value, function() {
            document.getElementById('output').innerText = `Data saved: { ${key}: ${value} }`;
        });
    } else {
        document.getElementById('output').innerText = 'Please enter both key and value.';
    }
}

function loadData() {
    const key = document.getElementById('inputKey').value;
    
    // Проверка наличия ключа
    if (key) {
        Telegram.WebApp.storage.get(key, function(value) {
            if (value) {
                document.getElementById('output').innerText = `Loaded data: { ${key}: ${value} }`;
            } else {
                document.getElementById('output').innerText = `No data found for key: ${key}`;
            }
        });
    } else {
        document.getElementById('output').innerText = 'Please enter a key to load.';
    }
}

// Опционально: обработка ошибок
Telegram.WebApp.storage.onError = function(error) {
    document.getElementById('output').innerText = `Error: ${error.message}`;
};