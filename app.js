if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
    document.getElementById('calculate').addEventListener('click', function() {
       
        const num1 = parseFloat(document.getElementById('num1').value);
        const operator = document.getElementById('operator').value;
        const num2 = parseFloat(document.getElementById('num2').value);
        let result = 0;
    
    
        if (!isNaN(num1) && !isNaN(num2)) {
            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 === 0) {
                        result = 'Chyba (dělení nulou)';
                    } else {
                        result = num1 / num2;
                    }
                    break;
            }
        } else {
            result = 'Zadejte platná čísla';
        }

        document.getElementById('result').textContent = result;
    });
}