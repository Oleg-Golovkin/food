"use strict";

import Tab from "./modules/tab";
import Slider from "./modules/slider";
import Timer from "./modules/timer";
import Modal from "./modules/modal";
import KlassES6 from "./modules/klassES6";
import JSONserver from "./modules/JSONserver";
import Calculator from "./modules/calculator";   



document.addEventListener("DOMContentLoaded", () => {
    Tab();
    Slider({                
        slideItem: ".offer__slide",
        nextSlideItem: ".offer__slider-next",
        prevSlideItem: ".offer__slider-prev",
        slideWapper: ".offer__slider"
    });
    Timer();
    Modal();
    KlassES6();
    JSONserver("form");
    Calculator();   
});