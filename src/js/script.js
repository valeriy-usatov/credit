window.addEventListener("DOMContentLoaded",() => {
    if (document.querySelectorAll(".question__item")) {
        let accardion = document.querySelector(".question__accordion"),
            tab = document.querySelectorAll(".question__item"),
            answer = document.querySelectorAll(".question__answer");
        
        accardion.addEventListener("click", (e) => {   
            const target= e.target.closest(".question__item"); 
            if(target) {
                tab.forEach((item,i) => {
                    if (item===target) {
                        answer[i].classList.add("active");
                        tab[i].classList.add('active-accardion');
                        tab[i].classList.add('active');
                    } else {
                        answer[i].classList.remove("active");
                        tab[i].classList.remove('active-accardion');
                        tab[i].classList.remove('active');
                    }
                })
            }
        })
        

    }
})