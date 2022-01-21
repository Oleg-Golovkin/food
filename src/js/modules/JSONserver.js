import {postForm} from "../services/services";
import {ShowThanksModal} from "./modal";
export default function JSONserver(formSelektor) {
    const forms = document.querySelectorAll(formSelektor);
        

        const statusMassege = {
            error: "Ошибка",
            load: "Идет загрузка",
            ok: "Данные отправлены. Вскоре мы с Вами свяжемся!"
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

    

    
}