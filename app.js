const controls = document.querySelectorAll('.controls');
const controlButtons = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.section');
const mainContent = document.querySelector('.main-content');
const foregroundElements = document.querySelectorAll('.foreground-element');

function controlButtonSwitching(){
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
    mainContent.addEventListener('click', (e) => {
        const id = (e.target.dataset.id);
        if(id){
            switchSection(id);
            switchForeGround(id);
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
        if(element.classList[element.classList.length-1] == elementId){
            element.classList.add('active-foreground');
        }
    })
}


controlButtonSwitching();
controlActiveElements();

// console.log(document.getElementsByClassName("anime-list-link")[0].get("class"));

