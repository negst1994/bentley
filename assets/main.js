const socket = io()
const messages = document.querySelector('.messages')
const form = document.querySelector('.form')
const input = document.querySelector('.input')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (input.value) {
        socket.emit('chat message', {
            message: input.value,
        })
        input.value = ''
    }
})

socket.on('chat message', (data) =>{
    const item = document.createElement('li')
    item.innerHTML = `${data.message}`
    messages.appendChild(item)
})

$(document).ready(function(){

    $('.goal1').click(function(){
  
        $('.input').val("Гол первой комманды");
        $('.btn').click();
    });
    $('.goal2').click(function(){
  
        $('.input').val("Гол второй комманды");
        $('.btn').click();
    });
    $('.redcard').click(function(){
  
        $('.input').val("Удаление с поля");
        $('.btn').click();
    });
    $('.yelowcard').click(function(){
  
        $('.input').val("Желтая карта");
        $('.btn').click();
    });
  });
