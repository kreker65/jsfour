const link = document.querySelector('a');
// const link = document.getElementsByClassName('a')[0];

console.log(link);
console.dir(link);

$('.submit-button').click(function(e){
    e.preventDefault();
    const text = `<p>${$('#commentText').val()}</p>`;
    $('.comment-container').append(text);
    $('#commentText').val('').hide(5000);
})
 const clockContainer = document.querySelector('.clock');
 setInterval(function() {
    clockContainer.innerText = (new Date()).toLocaleTimeString();
}, 10);
const display = document.querySelector('.calculator input[name=display]');
document.querySelectorAll('.digits, .opers')
 .forEach( btn => btn.addEventListener('click', digitOperPressed) );
 
function digitOperPressed(e) {
    display.value += e.target.innerText;
} 

document.querySelector('.result')
    .addEventListener('click', function(){
        display.value = eval(display.value);       
    })
document.querySelector('.clear')
    function testing(button){
  var x = button.value;
  document.getElementById("display").innerHTML+=x;
}
function clear() {
  document.getElementById("display").innerHTML = "";
 }
 
 
 
 