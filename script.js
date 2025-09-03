const checkUpdatesButton = document.getElementById('check-updates');

// **Симуляция проверки обновлений (без бэкенда)**
checkUpdatesButton.addEventListener('click', () => {
    // В РЕАЛЬНОМ ПРИЛОЖЕНИИ ЗДЕСЬ БЫЛ БЫ ЗАПРОС К БЭКЕНДУ
    // ДЛЯ ПРОВЕРКИ ОБНОВЛЕНИЙ.

    // Демонстрация:
    alert('Обновлений пока нет.');  // Замените на более информативное сообщение
    // Или, если есть изменения (предположим, мы их получили с бэкенда):
    // alert('Внимание! Расписание изменилось.  Посмотрите на понедельник, урок Математика.');

    // В реальном приложении вы бы сравнили текущее расписание с тем, что пришло с бэкенда
    // и показали только те изменения, которые произошли.
});


// Функция для вывода уведомления (браузер запросит разрешение)
function showNotification(title, body) {
    if (Notification.permission === "granted") {
        new Notification(title, {
            body: body,
            icon: "icon.png" // Замените на свой значок
        });
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification(title, {
                    body: body,
                    icon: "icon.png"
                });
            }
        });
    }
}

// Пример вызова уведомления (не работает без взаимодействия пользователя)
// showNotification("Важное обновление!", "Расписание на понедельник изменено.");