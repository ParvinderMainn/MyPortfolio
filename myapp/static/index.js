const Brief = document.querySelector('#b')

Brief.addEventListener('click',brief)

function brief(event){
    document.getElementById('b').style.color = 'salmon';
}