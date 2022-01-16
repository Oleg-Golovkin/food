export function KlassES6() {
    class CreatMenuItem {
        constructor(parentSelector, img, altimg, h3, menuItemDescr, menuItemTotalSpan, ...selector) {
            this.img = img;
            this.h3 = h3;
            this.menuItemDescr = menuItemDescr;
            // this.menuItemCost = menuItemCost;
            this.menuItemTotalSpan = menuItemTotalSpan;
            this.selector = selector;
            this.parent = document.querySelector(parentSelector),
                this.altimg = altimg;
        }


        NewMenuItem() {
            const element = document.createElement('div');
            if (this.selector.length == 0) {
                this.selector = "menu__item";
                element.classList.add(this.selector);
            } else {
                this.selector.forEach(selector => {
                    element.classList.add(this.selector);
                });
            }


            element.innerHTML +=
                `   <img src= ${this.img} alt=${this.altimg}>
                    <h3 class="menu__item-subtitle">${this.h3}</h3>
                    <div class="menu__item-descr">${this.menuItemDescr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.menuItemTotalSpan}</span>гр/день</div>
                    </div>`;
            this.parent.append(element);
        }
    }

    fetch("http://localhost:3000/menu")
        .then(data => data.json())
        .then(res => {
            res.forEach(item => {
                new CreatMenuItem(".menu .container", item.img, item.altimg, item.title, item.descr, item.price).NewMenuItem();
            });
        });
}
