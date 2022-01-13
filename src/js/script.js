"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const Tab = require("./tab"),
        Slider = require("./slider"),
        Timer = require("./timer");
    Tab();
    Slider();
    Timer();
   

    

   

    // Modal
    const btn = document.querySelectorAll('[data-btn="1"]'),
        modal = document.querySelector("[data-modal]"),
        modalClose = document.querySelector("[data-close]");

    /* Мой вариант через инлайн стили */
    // btn.forEach((item) => {
    //     item.addEventListener("click", () => {
    //         modal.style.cssText = "display: block";
    //     });            
    // });

    // modalClose.addEventListener("click", () => {
    //     modal.style.cssText = "display: none";
    // });      

    // Вариант преподавателя, через присвоение классов CSS
    btn.forEach((item) => {
        item.addEventListener("click", () => {
            showModal();
        });
    });

    function showModal() {
        modal.classList.add("show");
        modal.classList.remove("hide");
    }

    function HideModal() {
        modal.classList.add("hide");
        modal.classList.remove("show");
    }

    modalClose.addEventListener("click", HideModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            HideModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains("show")) {
            HideModal();
        }
    });

    // const ModalTime = setInterval(showModalTime, 2000);

    // function showModalTime() {
    //     showModal();
    //     clearInterval(ModalTime);
    // }

    // window.addEventListener("scroll", () => {            
    //     if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
    //         showModal();
    //     }
    // });


    window.addEventListener("scroll", () => {
        var scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    });

    window.addEventListener("scroll", () => {

        if (window.pageYOffset == 400) {
            showModal();
        }
    });

    // Class

    // const btnCall = document.querySelector('[data-btn="2"]'),
    //     menu__field = document.querySelector('.menu__field');

    // menu__field.querySelector('.menu .container').innerHTML = '';

    // class Menu__item {
    //     constructor(src, alt, NameMenu, TextMenu, price, TextPrice, days, parantSelector, ...classes) {
    //         this.src = src;
    //         this.alt = alt;
    //         this.NameMenu = NameMenu;
    //         this.TextMenu = TextMenu;
    //         this.price = price;
    //         this.TextPrice = TextPrice;
    //         this.days = days;
    //         this.parant = document.querySelector(parantSelector),
    //             this.classes = classes;
    //     }
    //     creatBlock() {
    //         const element = document.createElement("div");
    //         if (this.classes === 0) {
    //             this.classes = ".menu__item";
    //         } else {
    //             this.classes.forEach(classes => {
    //                 element.classList.add(classes)
    //             });
    //         }
    //         element.innerHTML = `<div class="menu__item">
    //             <img src=${this.src} alt=${this.alt}>
    //             <h3 class="menu__item-subtitle">Меню ${this.NameMenu}</h3>
    //             <div class="menu__item-descr">${this.TextMenu}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">${this.price}:</div>
    //                 <div class="menu__item-total"><span>${this.TextPrice}</span> ${this.days}</div>
    //             </div>
    //         </div>`;
    //         this.parant.append(element);
    //     }
    // }

    // function counterMenu() {
    //     let i = 0;
    //     btnCall.addEventListener('click', () => {
    //         i++;
    //         if (i == 1) {
    //             new Menu__item(
    //                 'img/tabs/vegy.jpg',
    //                 'vegy', 'Меню "Фитнес"',
    //                 `Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих
    //         овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной
    //         ценой и высоким качеством!`,
    //                 'Цена',
    //                 '229',
    //                 'грн/день',
    //                 '.menu .container'

    //             ).creatBlock();
    //         }
    //         if (i == 2) {
    //             const div = new Menu__item(
    //                 'img/tabs/elite.jpg',
    //                 'elite',
    //                 'Меню “Премиум”',
    //                 `В меню “Премиум” мы используем не только красивый дизайн упаковки, но
    //             и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода
    //             в ресторан!`,
    //                 'Цена',
    //                 '550',
    //                 'грн/день',
    //                 '.menu .container'
    //             ).creatBlock();
    //         }
    //         if (i == 3) {
    //             const div = new Menu__item(
    //                 'img/tabs/post.jpg',
    //                 'post',
    //                 'Меню "Постное”',
    //                 `Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие
    //         продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное
    //         количество белков за счет тофу и импортных вегетарианских стейков.`,
    //                 'Цена',
    //                 '430',
    //                 'грн/день',
    //                 '.menu .container'


    //             ).creatBlock();
    //         }
    //     });
    // }

    // counterMenu();

    // Training

    // const btnLow = document.querySelector('#low'),
    //     btnMedium = document.querySelector('#medium'),
    //     calculatingField = document.querySelector('.calculating__field'),
    //     body = document.querySelector('body');



    // function changeCollor(selektor, selektorParent, background) {
    //     selektor.addEventListener('click', (e) => {
    //         e.target.classList.toggle("calculating__choose-item_active");
    //     });

    //     selektorParent.addEventListener('click', (e) => {
    //         if (e.target == selektorParent) {
    //             selektor.classList.remove("calculating__choose-item_active");
    //         }
    //     });
    // }
    // changeCollor(btnLow, calculatingField);



    //----------------------------------------------    Классы ES6 практика ----------------------------------//

    const btnOreder = document.querySelector(".order .btn_min"),
        menuItem = document.querySelectorAll(".menu__item"),
        containerMenuField = document.querySelector(".menu .container");




    // class CreatMenuItem {
    //     constructor(parentSelector, img, altimg, h3, menuItemDescr, menuItemTotalSpan, ...selector) {
    //         this.img = img;
    //         this.h3 = h3;
    //         this.menuItemDescr = menuItemDescr;
    //         // this.menuItemCost = menuItemCost;
    //         this.menuItemTotalSpan = menuItemTotalSpan;
    //         this.selector = selector;
    //         this.parent = document.querySelector(parentSelector),
    //             this.altimg = altimg;
    //     }


    //     NewMenuItem() {
    //         const element = document.createElement('div');
    //         if (this.selector.length == 0) {
    //             this.selector = "menu__item";
    //             element.classList.add(this.selector);
    //         } else {
    //             this.selector.forEach(selector => {
    //                 element.classList.add(this.selector);
    //             });
    //         }


    //         element.innerHTML +=
    //             `   <img src= ${this.img} alt=${this.altimg}>
    //                 <h3 class="menu__item-subtitle">${this.h3}</h3>
    //                 <div class="menu__item-descr">${this.menuItemDescr}</div>
    //                 <div class="menu__item-divider"></div>
    //                 <div class="menu__item-price">
    //                     <div class="menu__item-cost">Цена:</div>
    //                     <div class="menu__item-total"><span>${this.menuItemTotalSpan}</span>гр/день</div>
    //                 </div>`;
    //         this.parent.append(element);
    //     }
    // }

    // fetch("http://localhost:3000/menu")
    //     .then(data => data.json())
    //     .then(res => {
    //         res.forEach(item => {
    //             new CreatMenuItem(".menu .container", item.img, item.altimg, item.title, item.descr, item.price).NewMenuItem();
    //         });
    //     });

    //---------- Урок № 51 JSON формат передачи данных. Глубокое клонирование-------//

    const LOL = {
        Name: "Oleg",
        age: "31",
        obj: {
            home: "Tula",
            family: "Golovkin"
        }
    };



    const A = JSON.parse(JSON.stringify(LOL));

    A.obj.home = "Moskow";



    const people = {
        name: 'Oleg',
        age: 30,
        famyli: {
            name: 'Olga'
        },
    };

    const clonePeople = (JSON.parse(JSON.stringify(people)));
    clonePeople.famyli.name = 'Golovkin';
    // console.log(clonePeople);


    // Урок 53 Реализация скрипта отправки данных на сервер//

    const forms = document.querySelectorAll("form");



    const statusMassege = {
        error: "Ошибка",
        load: "Идет загрузка",
        ok: "Данные отправлены. Вскоре мы с Вами свяжемся!"
    };

    const postForm = async (url, request) => {
        let res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: request
        });
        return await res.json();
        // возвращаем наверх (функцию pastForm)
        //  результат ответа (команда res.json()) 
        // запроса на сервер,
        // чтобы в дальншейшем обрабатывать через Promise
        //  этот ответ
    };

    forms.forEach(item => {
        sendinForm(item);
    });

    function sendinForm(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            // Вместо перебора
            // const object = {};
            // formData.forEach((value, key) => {
            //     object[key] = value;
            // });

            // Делаем преобразование
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postForm("http://localhost:3000/requests", json)
                .then(data => {
                    console.log(data);
                    ShowThanksModal(statusMassege.ok);
                })
                .catch(() => {
                    ShowThanksModal(statusMassege.error);
                })
                .finally(() => {
                    form.reset();
                });

        });
    }




    // Урок 54 Красивое оповещение пользователя................//

    function ShowThanksModal(message) {
        const modalContent = document.querySelector(".modal__content");
        modalContent.remove();
        const div = document.createElement("div");
        document.querySelector(".modal__dialog").append(div);
        div.classList.add("modal__content");
        div.innerHTML = `
        <div data-close class="modal__close">&times;</div>
        <div class="modal__title">${message}</div> 
        <img src="icons/spinner.svg" alt="spinner">
        `;
        const img = div.querySelector("img");
        img.style.cssText = `display: block;
        margin: 10px auto;`;

        setTimeout(function () {
            modal.classList.add("hide");
            modal.classList.remove("show");
            div.remove();
            document.querySelector(".modal__dialog").append(modalContent);
        }, 2000);
    }

    //----------------------- Урок 55 promise-------------------------------//



    const promise = new Promise((resolve, reject) => {
        // console.log("Первая операция");
        const product = {
            one: "film",
            two: "play"
        };
        resolve(product);
    });

    promise.then((product) => {
        return new Promise((resolve, reject) => {
            // console.log("Третья операция");
            product.name = "Oleg";
            resolve(product);
            reject(product);
        });
    }).then((product) => {
        // console.log(product);
        return product
    }).then((product) => {
        // console.log(product);
        return product;
    }).catch((product) => {
        // console.log(product);
        return product;
    }).finally((product) => {
        // console.log("Последняя операция");
        return product;
    });


    const test = time => {
        return new Promise((reject, resolve) => {
            setTimeout(() => {
                reject();
            }, time);

        });
    };

    Promise.all([test(1000), test(6000)]).then(() => {
        // console.log("Задача выполнена");
    });



    // ------------Урок 57 методы перебора массивов----------


    // const name = ['Ivan', 'Saha', 'Evgenich']

    // const newName =  name.filter(function(name) {
    //     return name.length > 5
    // })
    // console.log(newName)

    const name = [4, 4, ];

    const newName = name.reduce((sum, item) => sum + item, 3);
    // console.log(newName);

    const obj = {
        names: 'Ivan',
        name: 1,
        animal: 'vdvdfvd',
        vsvsd: 2
    };

    // console.log(Object.entries(obj)
    //     .map(obj => obj[1])
    //     .filter(obj => typeof (obj) === "number")
    // )


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

    // const obj = {
    //     name: "Jhon",
    //     age: 30,

    //     get getAge() {
    //         return this.age
    //     },

    //     set getAge(num) {
    //         this.age = num
    //     },
    // }

    // console.log(obj.age);
    // console.log(obj.userAge = 40);


    class Oleg {
        constructor(name) {
            this._userName = name;
        }

        say() {
            console.log(`Привет ${this._userName}`);
        }

        get Name() {
            return this._userName;
        }

        set Name(Name) {
            this._userName = Name;
        }

    }

    const pp = new Oleg("Олег");
    pp.Name = "Ivan";
    pp.say();
});