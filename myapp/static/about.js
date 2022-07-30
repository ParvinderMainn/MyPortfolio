const pic = document.querySelector('.pic');

pic.addEventListener('mouseover',details)
pic.addEventListener('mouseout',normal)

function details(event){
    document.body.style.backgroundColor = '#5d3f27';
}

function normal(event){
    document.body.style.backgroundColor = "";
}
