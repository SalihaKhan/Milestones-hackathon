const btnButton = document.getElementById("btn") as HTMLButtonElement
const skillSection = document.getElementById("skills") as HTMLElement

btnButton.addEventListener('click' , ()=>{
    if(skillSection.style.display === 'none'){
        skillSection.style.display = 'block'
    } else {
        skillSection.style.display = 'none'
    }
});