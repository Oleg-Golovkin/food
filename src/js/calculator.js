export function Calculator(){
        //______________ урок 066. Создаем кулькулятор на сайте____________//.

    // Переменная вывода значения кулькулятора
    const calculatingResult = document.querySelector(".calculating__result span");
    let sex, ratio, height, weight, age;

    if (localStorage.getItem("sex")) {
        sex = localStorage.getItem("sex");
    } else {
        sex = "woman";
        localStorage.setItem("sex", "woman");
    }

    if (localStorage.getItem("ratio")) {
        ratio = localStorage.getItem("ratio");
    } else {
        ratio = 1.375;
        localStorage.setItem("ratio", 1.375);
    }



    // 1. Функция по:
    // // 1.1. Проверка на заполненность переменных
    function resaultFormula() {
        // Если хотябы одна переменная не заполнена, то..
        // ! - false + пустая переменная дает tru и условие выполняется
        if (!sex || !ratio || !height || !weight || !age) {
            calculatingResult.textContent = "____";
            // формула не применяется
            return;
        }
        // 1.2 Подсчет формулы, если в функции № 2 выбран пол
        // В формуле используются пустые переменные, заполнение которых
        // происходит в двух следующих функциях
        if (sex === "woman") {
            // Math.round это округление до целых чисел
            // Формула для подсчета калорий взята из инета
            calculatingResult.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            calculatingResult.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    };
    // Эту формулу вызываем в двух других функциях,
    // чтобы эта формула каждый раз пересчитывалась 
    // при добавлении новых данных в этих функциях 
    resaultFormula();

    function initLocalStorage(parantSelector, activeSelector) {
        let elements = document.querySelectorAll(`${parantSelector} div`);

        elements.forEach(element => {
            element.classList.remove(activeSelector);
            if (element.getAttribute("id") === localStorage.getItem("sex")) {
                element.classList.add(activeSelector);
            }
            if (element.getAttribute("data-ratio") === localStorage.getItem("ratio")) {
                element.classList.add(activeSelector);
            }
        });
    }

    initLocalStorage("#gender", "calculating__choose-item_active");
    initLocalStorage(".calculating__choose_big", "calculating__choose-item_active");

    // 2 Функция по получению атрибутов из нажимаемых блоков и присвоение
    // этих атрибутов к пустым переменным
    function getStaticInformation(parantSelector, activeSelector) {
        // 2.1. Одна функция для двух блоков селекторов, у которых разные родители.
        // Поэтому, чтобы функция была применима к обоим блокам, родителя задаю
        // через атрибут parantSelector
        const elements = document.querySelectorAll(`${parantSelector} div`)
        elements.forEach(element => {
            element.addEventListener("click", (e) => {
                // У одного из блоков есть и id и дата-атрибут. Поэтому 
                //именно у этого блока ищем то, что нету у второго - дата-атрибут, а..
                if (e.target.getAttribute("data-ratio")) {
                    ratio = +e.target.getAttribute("data-ratio");
                    // у второго ищем все остальное    
                    localStorage.setItem("ratio", +e.target.getAttribute("data-ratio"));
                } else {
                    sex = e.target.getAttribute("id");
                    localStorage.setItem("sex", e.target.getAttribute("id"));
                }
                // Обычное удаление у всех класса и присвоение его к нажимаемому 
                elements.forEach(element => {
                    element.classList.remove(activeSelector);
                });
                e.target.classList.add(activeSelector);
                // Переподсчет формулы c учетом новых данных.
                resaultFormula();
            });
        });
    }
    getStaticInformation("#gender", "calculating__choose-item_active");
    getStaticInformation(".calculating__choose_big", "calculating__choose-item_active");

    // 3 функция по получению информации у input. 
    // Одна функция для каждого input, поэтому задаю атрибут
    // , который использую для получения доступа к каждому
    // input
    function getDinamicInformation(id) {
        const input = document.querySelector(id);
        input.addEventListener("input", (e) => {
            // Необязательный блок. Проверка на то, чтобы в input вводились
            // только цифры.
            if (input.value.match(/\D/)) {
                input.style.border = "1px solid red";
            } else {
                input.style.border = "none";
            }

            // Множество условий потому, что функция применима
            // ко всем input, у каждого из которых индивидуальный
            // id. Следовательно, чтобы вытащить из нужного 
            // input значение, для этого у каждого input получю его атрибут id
            // и через условие сравниваю с нужным мне атрибутом, чтобы
            // остановить перебор и вытащить у этого самого input, у которого
            // совпадает атрибут id, его значение для помещения в пустую
            // переменную
            const atribute = e.target.getAttribute("id");

            if (atribute == "height") {
                height = +e.target.value;
            }
            if (atribute == "weight") {
                weight = +e.target.value;
            }
            if (atribute == "age") {
                age = +e.target.value;
            }
            resaultFormula();
        });
    }
    getDinamicInformation("#height");
    getDinamicInformation("#weight");
    getDinamicInformation("#age");
}