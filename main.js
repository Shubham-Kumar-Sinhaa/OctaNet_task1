const observer_1 = new IntersectionObserver((entries_1) => {
    entries_1.forEach((entry_1) => {
        console.log(entry_1)
        if(entry_1.isIntersecting){
            entry_1.target.classList.add('show_1');
        }else{
            entry_1.target.classList.remove('show_1');
        }
    })
})

const f_rightElementS = document.querySelectorAll('.f_right');
f_rightElementS.forEach((el_1) => observer_1.observe(el_1));


const observer_2 = new IntersectionObserver((entries_2) => {
    entries_2.forEach((entry_2) => {
        console.log(entry_2)
        if(entry_2.isIntersecting){
            entry_2.target.classList.add('show_2');
        }else{
            entry_2.target.classList.remove('show_2');
        }
    })
})

const f_leftElementS = document.querySelectorAll('.f_left');
f_leftElementS.forEach((el_2) => observer_2.observe(el_2));


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
})

const f_upElements = document.querySelectorAll('.f_up');
f_upElements.forEach((el) => observer.observe(el));


const obs = new IntersectionObserver((elem) => {
    elem.forEach((elm) => {
        console.log(elm)
        if(elm.isIntersecting){
            elm.target.classList.add('out');
        }else{
            elm.target.classList.remove('out');
        }
    })
})

const f_outElements = document.querySelectorAll('.f_out');
f_outElements.forEach((e) => obs.observe(e));