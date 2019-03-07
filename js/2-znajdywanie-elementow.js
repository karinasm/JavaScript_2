let element;

// po id
element=document.getElementById('parFirst');

//po klasie
element=document.getElementsByClassName('link superlink');
element=document.getElementsByClassName('link')[document.getElementsByClassName('link').length-1];//wyszukuje po elemencie

//po tagu
element=document.getElementsByTagName('p');
element=document.getElementsByTagName('p')[0];

//query selector 
element=document.querySelector('#sectionFirst #parSecond .par2').innerHTML; //pobierzemy sam tekst .innerHTML
element=document.querySelectorAll('#sectionFirst a')[2].innerHTML; 

element= document.getElementById('main-header').parentElement;
element=document.getElementById('main-header').parentElement.childNodes;
element=document.getElementById('main-header').parentElement.children;
element=document.getElementById('main-header').parentElement.childNodes[5];

element= document.querySelector('header').firstElementChild;
element= document.querySelector('header').lastElementChild;


console.log(element);