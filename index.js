const yesBtn = document.querySelector("#yesBtn");

yesBtn.addEventListener("click",function () {
    alert("sabia que ibas a decir que sii..  no te fallare shi:: te voy a cuiadar mucho mucho mucho muchooo  TE AMOO LADY <3")
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function ()  {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transforma',`translate(-${randomX}%,-${randomY}%)`);
})