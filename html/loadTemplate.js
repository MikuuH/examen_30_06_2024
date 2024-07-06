// loadTemplate.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('template.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-placeholder').innerHTML = data;
            
            // Дополнительные специфичные действия после загрузки шаблона
            document.querySelector('.button-dialogs').innerHTML = `
                <div class="lable-input">
                    <label>Поиск: <input type="text"></label>
                </div>
                <button class="add-new-book" type="button" onclick="document.getElementById('myDialog').showModal()">
                    Создать книгу
                </button>
                <dialog id="myDialog">
                    🖖 Живи долго и процветай!
                    <button type="button" onclick="document.getElementById('myDialog').close()">Окей</button>
                </dialog>
            `;

            document.querySelector('.container-book').textContent = 'Привет, это страница для просмотра бука.';
        })
        .catch(error => {
            console.error('Error fetching template:', error);
        });
});
