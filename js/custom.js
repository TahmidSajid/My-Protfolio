let btn_p = document.querySelectorAll('.btn_cross')[0];

let btn_first = btn_p.firstElementChild;

let cross_l = btn_first.firstElementChild;
let cross_m = cross_l.nextElementSibling;
let cross_r = cross_m.nextElementSibling;

btn_first.addEventListener('click',()=>{
    cross_m.classList.toggle('d-none')
    cross_l.classList.toggle('btn_l_cross')
    cross_l.classList.toggle('mb-1')
    cross_r.classList.toggle('mb-1')
    cross_r.classList.toggle('btn_r_cross')
})
