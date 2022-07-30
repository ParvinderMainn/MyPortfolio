const pic = document.querySelector('.pic');

pic.addEventListener('mouseover',details)
pic.addEventListener('mouseout',normal)

function details(event){
    document.body.style.backgroundColor = '#917b50';
}

function normal(event){
    document.body.style.backgroundColor = "";
}
