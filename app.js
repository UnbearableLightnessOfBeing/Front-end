const controls = document.querySelectorAll('.controls');
// const controlButtons = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.section');
// const mainContent = document.querySelector('.main-content');
const foregroundElements = document.querySelectorAll('.foreground-element');
const dynamicBackgrounds= document.querySelectorAll('.dynamic-shape');
const themeToggleButton = document.querySelector('.theme-btn');
const info = document.getElementById('information');


function controlButtonSwitching(){
    let controlButtons= document.querySelectorAll('.control');
    for(let i=0; i < controlButtons.length; i++){
        controlButtons[i].addEventListener('click', function(){
            deactivateButtons();
            this.classList.add('active-btn');

        });
    }
}
function deactivateButtons(){
    let pressedButton = document.querySelectorAll('.active-btn');
    pressedButton[0].classList.remove('active-btn');
}

function controlActiveElements(){
    let mainContent = document.querySelector('.main-content');
    mainContent.addEventListener('click', (e) => {
        const id = (e.target.closest('div').dataset.id);
        if(id){
            switchSection(id);
            switchForeGround(id);
            switchBackground(id);
        }
    })
}

function switchSection(SectionId){
    allSections.forEach((section) =>{
        section.classList.remove('active');
        if(section.id == SectionId){
            section.classList.add('active');
        }
        })
}
function switchForeGround(elementId){
    foregroundElements.forEach((element) =>{
        element.classList.remove('active-foreground');
        if(element.classList.contains(elementId)){
            element.classList.add('active-foreground');
        }
    })
}

function switchBackground(elementId){
    dynamicBackgrounds.forEach((element) =>{
        element.classList.remove('active-background');
        if(element.classList.contains(elementId)){
            element.classList.add('active-background');
        }
    })
}

function controlThemeToggling(){
    themeToggleButton.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('light-mode');
    });
}

function changeResponsiveContetn(){
    
    setInfoBackgroundText();
    changeInfoBackgroundText();
}

function setInfoBackgroundText(){
    if(window.innerWidth <= 1000){
        info.innerHTML = "info";
    }
    else{
        info.innerHTML = "information";
    }
}
function changeInfoBackgroundText(){
    window.addEventListener('resize', () =>{
        if(window.innerWidth <= 1000){
            info.innerHTML = "info";
        }
        if(window.innerWidth > 1000){
            info.innerHTML = "information";
        }
    });
}

function adjustBackgroundText() {
    let bgText = document.querySelector('#contacts .bg-text');
    window.addEventListener('resize', function() {
        if(this.innerWidth < 600) {
            bgText.innerText = 'INFO';
        }else {
            bgText.innerText = 'CONTACT INFO';
        }
    });
}

window.addEventListener('load', function() {

    adjustBackgroundText();
    switchBackground('home');

    controlButtonSwitching();
    controlActiveElements();
    controlThemeToggling();
    changeResponsiveContetn();

});

