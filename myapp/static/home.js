const pic = document.querySelector('.pic');
const na = document.querySelector('.name');
const dev = document.querySelector('.developer');
const p = document.querySelector('.par');
const sur = document.querySelector('.surname');
const d = document.querySelector('.dev');
const ab = document.querySelector('.loves');


pic.addEventListener('mouseover',details)
pic.addEventListener('mouseout',normal)
p.addEventListener('mouseover',full_name)
p.addEventListener('mouseout',normal_name)
d.addEventListener('mouseover',about)
d.addEventListener('mouseout',hide)




function about(event){
    anime({
        targets: ab,
        width: ['0','100%'],
        easing: 'easeInOutQuad',
    
    })
}

function hide(event){
    anime({
        targets: ab,
        width: ['100%','0'],
        easing: 'easeInOutQuad'
    })
}

function normal_name(event){
    anime({
        targets: sur,
        width: ['100%','0'],
        easing: 'easeInOutQuad'
    })
}


function full_name(event){
    anime({
        targets: sur,
        width: ['0','100%'],
        easing: 'easeInOutQuad'
    })
}




function normal(event){
    document.body.style.backgroundColor = "";
}

function details(event){
    document.body.style.backgroundColor = '#4F1E0E';
}

