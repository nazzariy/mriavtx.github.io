const translations = {
    uk: {
        title: "Генератор конфігурації VTX",
        aux_select: "AUX керування VTX",
        vtx_template: "Шаблон VTX",
        vtx_serial_port: "Серійний порт VTX",
        vtx_protocol: "Протокол VTX",
        power_state_1: "Потужність 1",
        power_state_2: "Потужність 2",
        power_state_3: "Потужність 3",
        include_checkbox: "Додати таблицю частот для обраного VTX",

        version: "Версія",

        generate_button: "Згенерувати CLI команду",
        copy_button: "Скопіювати результат",
        copied_to_clipboard: "Скопійовано в буфер!",

        aux_select_tooltip: "Канал AUX 3-х позиційного перемикача за допомогою якого буде змінюватися потужність відеопередавача. Зазвичай це перемикач SC",
        vtx_template_tooltip: "Ви можете обрати шаблон налаштувань для відеопередавачів. Впливає на параметри нижче. Шаблон також включає в себе таблицю каналів для обраного відеопередавача.",
        vtx_serial_port_tooltip: "Номер порту UART до якого припаяно дріт керування VTX.",
        vtx_protocol_tooltip: "Протокол керування який використовується у VTX. Визначається шаблоном, але може бути змінений вручну.",
        power_state_1_tooltip: "Значення потужності для першого положення перемикача (вгору). Нижче ви можете змінити ліміти для визначення цього положення тоглу.",
        power_state_2_tooltip: "Значення потужності для другого положення перемикача (по центру).Нижче ви можете змінити ліміти для визначення цього положення тоглу.",
        power_state_3_tooltip: "Значення потужності для третього положення перемикача (вниз). Нижче ви можете змінити ліміти для визначення цього положення тоглу.",
        
        band_checkbox: "Додати можливість зміни діапазону частот",
        band_select: "AUX для зміни діапазону",
        band_select_option: "Оберіть AUX",
        band_state_1: "1й діапазон",
        band_state_2: "2й діапазон",
        band_state_3: "3й діапазон",
        band_a_option: 'Діапазон "A"',
        band_b_option: 'Діапазон "B"',
        band_e_option: 'Діапазон "E"',
        band_f_option: 'Діапазон "F"',
        band_r_option: 'Діапазон "R"',
        band_6_option: "‼️ Діапазон #6 в таблиці частот",
        band_7_option: "‼️ Діапазон #7 в таблиці частот",
        band_8_option: "‼️ Діапазон #8 в таблиці частот",
        
        band_select_tooltip: "Канал AUX 3-х позиційного перемикача за допомогою якого буде змінюватися діапазон. Не можна обрати AUX який вже задіяний для керування потужністю VTX. Не має стандартного значення, обовʼязково треба обрати вручну для продовження роботи.",
        band_state_1_tooltip: "Діапазон який буде активовано для першого положення перемикача (вгору). Нижче ви можете змінити ліміти для визначення цього положення. Увага‼️ діапазони 6-8 можуть не підтримуватися вашим VTX. Обирайте тільки, якщо ви впевнені, що вони є.",
        band_state_2_tooltip: "Діапазон який буде активовано для другого положення перемикача (по центру). Нижче ви можете змінити ліміти для визначення цього положення. Увага‼️ діапазони 6-8 можуть не підтримуватися вашим VTX. Обирайте тільки, якщо ви впевнені, що вони є.",
        band_state_3_tooltip: "Діапазон який буде активовано для для третього положення топеремикачаглу (вниз). Нижче ви можете змінити ліміти для визначення цього положення. Увага‼️ діапазони 6-8 можуть не підтримуватися вашим VTX. Обирайте тільки, якщо ви впевнені, що вони є.",
    }
};

function setLanguage(language) {
    localStorage.setItem('language', language);
    translatePage(language);
    updateLanguageSelector(language);
}

function translatePage(language) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[language][key] || element.textContent;
    });
    document.querySelectorAll('option[data-i18n]').forEach(option => {
        const key = option.getAttribute('data-i18n');
        option.textContent = translations[language][key] || option.textContent;
    });
}

function updateLanguageSelector(language) {
    document.getElementById('lang-en').classList.remove('active');
    document.getElementById('lang-uk').classList.remove('active');
    document.getElementById(`lang-${language}`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const language = localStorage.getItem('language') || 'ua';
    setLanguage(language);
});

function getTranslation(key) {
    const language = localStorage.getItem('language') || 'ua';
    return translations[language][key] || key;
}
