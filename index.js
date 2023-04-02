window.onload = function(){
    'use strict'; 

    const menuOpen = document.querySelector('.menu-icon');
    const menuClose = document.querySelector('.menuc-icon');
    const menuUnderlay = document.querySelector('.underlay');
    const menuLinks = document.querySelector('.main-nav');
    const mainBody = document.querySelector('.main-body');
    const mainB = document.getElementById('main1');
    const dropD = document.querySelector('.drop-d1');
    const mainB2 = document.getElementById('main2');
    const dropD2 = document.querySelector('.drop-d2');
    const theOpener = document.querySelector('.arrow-down1');
    const theCloser = document.querySelector('.arrow-up1');
    const theOpener2 = document.querySelector('.arrow-down2');
    const theCloser2 = document.querySelector('.arrow-up2');

    
    //menu option open
    const listener = (event) => {
        const bgChanger = () =>{
            menuUnderlay.style.backgroundColor ='hsla(0, 0%, 8%, 80%)';
            menuUnderlay.style.width ='100vw';
            menuUnderlay.style.transition ='all 1s';
        }
        
        const openMenu = () => {
            menuLinks.style.width ='70%';
        }

        bgChanger();
        openMenu();

        console.log('button clicked');
    }
    menuOpen.addEventListener('click',listener);


    //close menuj
    const listen = (event) => {
        console.log('button clicked');

        const bgChanger = () =>{
            menuUnderlay.style.backgroundColor ='unset';
            menuUnderlay.style.width ='0';
            menuLinks.style.width ='auto';
            menuUnderlay.style.transition ='all 0.5s';
            
        }
        bgChanger();

        const closeMenu = () => {
            menuUnderlay.style.width ='0%';
        }
        closeMenu();
    }
    menuClose.addEventListener('click',listen);


    //features dropdown menu
    const listening = (event) => { 
        dropD.style.padding = '2rem';
        dropD.style.height = 'auto';
        dropD.style.transition = 'all 0.5s';
        theCloser.style.display ='block';
        theOpener.style.display ='none';

    }
    mainB.addEventListener('click', listening);



    //campany dropdown menu
    const listening2 = (event) => {
        dropD2.style.padding = '2rem';
        dropD2.style.height = 'auto';
        dropD2.style.transition = 'all 0.5s';
    }
    mainB2.addEventListener('click', listening2);


    const close = (event)=>{
        dropD.style.padding = '0';
        dropD.style.height = '0';
        dropD.style.display = 'none';
        dropD.style.transition = 'all 0.5s';
    }

    theCloser.addEventListener('click', close);
}