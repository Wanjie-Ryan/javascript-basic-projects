// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class



const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click', () =>{

    // console.log(links.classList)

    //  console.log(links.classList.contains('show-links'))

    // originally, there is the links class which does not display the bar, then we add a functionality saying that, if the show links is present,then remove it, but originally, there is no class called show-links so we then add it.
    
    // if(links.classList.contains('show-links')){

    //     links.classList.remove('show-links');
    // }
    // else{
    //     links.classList.add('show-links');
    // }

    links.classList.toggle('show-links')
})














