const translations = {
    en: {
        title: "VTX config generator",
        aux_select: "AUX for VTX control",
        vtx_template: "VTX template",
        vtx_serial_port: "VTX serial port",
        vtx_protocol: "VTX protocol",
        power_state_1: "Power state 1",
        power_state_2: "Power state 2",
        power_state_3: "Power state 3",
        include_checkbox: "Include VTX table for selected template",

        version: "Version",

        generate_button: "Generate CLI",
        copy_button: "Copy result",
        copied_to_clipboard: "Copied to clipboard!",

        aux_select_tooltip: "AUX channel of the 3-position toggle switch, which will be used to select the power of the video transmitter. This is usually the SC toggle",
        vtx_template_tooltip: "You can choose a configuration template for some popular VTXs. Affects the settings below. Also includes a channels table for the selected VTX.",
        vtx_serial_port_tooltip: "The number of the UART port to which the VTX control wire is soldered. For SpeedyBee F405 v3 it is UART 1 (TX1 pin).",
        vtx_protocol_tooltip: "The control protocol used in VTX. Defined by the template, but can be changed manually.",
        power_state_1_tooltip: "Power value for the first position of the toggle (up). This is usually the lowest (25mW) power value. This is actually the sequence number of the powervalue from the frequency table. Below you can change the limits for determining this toggle position.",
        power_state_2_tooltip: "Power value for the second position of the toggle (center). This is usually the middle power value. This is actually the sequence number of the powervalue from the frequency table. Below you can change the limits for determining this toggle position.",
        power_state_3_tooltip: "Power value for the third toggle position (down). This is usually the highest power value. This is actually the sequence number of the powervalue from the frequency table. Below you can change the limits for determining this toggle position.",
 
        band_checkbox: "Include band change capability",
        band_select: "AUX for band change",
        band_select_option: "Select AUX",
        band_state_1: "Band 1",
        band_state_2: "Band 2",
        band_state_3: "Band 3",
        band_a_option: 'Band "A"',
        band_b_option: 'Band "B"',
        band_e_option: 'Band "E"',
        band_f_option: 'Band "F"',
        band_r_option: 'Band "R"',
        band_6_option: "‼️ Band #6 in the frequency table",
        band_7_option: "‼️ Band #7 in the frequency table",
        band_8_option: "‼️ Band #8 in the frequency table",
        
        band_select_tooltip: "3-position toggle AUX channel used for band switching. You can't select the AUX already assigned for VTX power control. No default value, must be manually selected to proceed.",
        band_state_1_tooltip: "Band assigned to the first toggle position (up). Below you can change the limits for determining this toggle position. Warning‼️ bands 6-8 might not be supported by your VTX. Only select if you are sure they are supported.",
        band_state_2_tooltip: "Band assigned to the second toggle position (center). Below you can change the limits for determining this toggle position. Warning‼️ bands 6-8 might not be supported by your VTX. Only select if you are sure they are supported.",
        band_state_3_tooltip: "Band assigned to the third toggle position (down). Below you can change the limits for determining this toggle position. Warning‼️ bands 6-8 might not be supported by your VTX. Only select if you are sure they are supported.",

    },
    uk: {
        title: "Конфігуратор VTX",
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

        aux_select_tooltip: "Канал AUX 3-х позиційного тумблера за допомогою якого буде змінюватися потужність відеопередавача. Зазвичай це тумблер SC",
        vtx_template_tooltip: "Ви можете обрати шаблон налаштувань для деяких популярних відеопередавачів. Впливає на параметри нижче. Шаблон також включає в себе таблицю каналів для обраного відеопередавача.",
        vtx_serial_port_tooltip: "Номер порту UART до якого припаяно дріт керування VTX.",
        vtx_protocol_tooltip: "Протокол керування який використовується у VTX. Визначається шаблоном, але може бути змінений вручну.",
        power_state_1_tooltip: "Значення потужності для першого положення тумблера (вгору). Зазвичай це найнижче значення потужності. Нижче ви можете змінити ліміти для визначення цього положення тумблера.",
        power_state_2_tooltip: "Значення потужності для другого положення тумблера (по центру). Зазвичай це середнє значення потужності. Нижче ви можете змінити ліміти для визначення цього положення тумблера.",
        power_state_3_tooltip: "Значення потужності для третього положення тумблера (вниз). Зазвичай це максимальне значення потужності. Нижче ви можете змінити ліміти для визначення цього положення тумблера.",
        
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
        
        band_select_tooltip: "Канал AUX 3-х позиційного тумблера за допомогою якого буде змінюватися діапазон. Не можна обрати AUX який вже задіяний для керування потужністю VTX. Не має стандартного значення, обовʼязково треба обрати вручну для продовження роботи.",
        band_state_1_tooltip: "Діапазон який буде активовано для першого положення тумблера (вгору). Нижче ви можете змінити ліміти для визначення цього положення. Увага‼️ діапазони 6-8 можуть не підтримуватися вашим VTX. Обирайте тільки, якщо ви впевнені, що вони є.",
        band_state_2_tooltip: "Діапазон який буде активовано для другого положення тумблера (по центру). Нижче ви можете змінити ліміти для визначення цього положення. Увага‼️ діапазони 6-8 можуть не підтримуватися вашим VTX. Обирайте тільки, якщо ви впевнені, що вони є.",
        band_state_3_tooltip: "Діапазон який буде активовано для для третього положення тумблера (вниз). Нижче ви можете змінити ліміти для визначення цього положення. Увага‼️ діапазони 6-8 можуть не підтримуватися вашим VTX. Обирайте тільки, якщо ви впевнені, що вони є.",
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
