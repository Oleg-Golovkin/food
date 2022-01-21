//..............Урок 54 Красивое оповещение пользователя................//
export function ShowThanksModal(message) {
    const modal = document.querySelector("[data-modal]");
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

// Модальные окна

export default function Modal() {
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

    const ModalTime = setInterval(showModalTime, 2000);

    function showModalTime() {
        showModal();
        clearInterval(ModalTime);
    }

    window.addEventListener("scroll", () => {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            showModal();
        }
    });

    window.addEventListener("scroll", () => {
        var scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    });

    window.addEventListener("scroll", () => {

        if (window.pageYOffset == 400) {
            showModal();
        }
    });
}