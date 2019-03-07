let header = document.querySelector('header');

colorChange = () => {
    header.style.color = 'red';
}
//
let parSecond= document.querySelector('#parSecond');

onDblClick = () => {
    parSecond.style.backgroundColor = 'yellow';
}
parSecond.ondblclick = onDblClick;

//
let parFirst= document.querySelector('#parFirst');

najechanieMyszka = () =>{
    //parFirst.style.backgroundColor='blue';
    parFirst.classList.toggle('toggle');
}
parFirst.addEventListener('click',najechanieMyszka);


//usuwanie
//parFirst.removeEventListener('mouseover',najechanieMyszka);

//
let link = document.querySelector('a[href="http://akademia108.pl"]');

link.onclick = (event) =>{
    event.preventDefault();
    console.log(event);
}
//console.log(link);

//
let h1 = document.getElementById('main-header');
colorChange = () => {
    header.style.color = 'red';
    console.log('click z <header></header>')
}
h1.onclick = event =>{
    event.stopPropagation();
    console.log('click z <h1></h1>')
}

