const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const dropdowan = document.querySelector('.dropdown');

dropdowan.style.display='none';

menu.addEventListener('click',(e){
    menu.style.display='none';
    dropdowan.style.display='flex';
});

close.addEventListener('click',(e)
{
    menu.style.display='flex';
    dropdowan.style.display='none';

});