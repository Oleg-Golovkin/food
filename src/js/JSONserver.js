export function JSONserver() {
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

    //..............Урок 54 Красивое оповещение пользователя................//

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
}
