const menu = document.querySelector('.sidebar-toggle')
const sidebar = document.querySelector('.sidebar')
const closebtn = document.querySelector('.close-btn')


menu.addEventListener('click',()=>{

    sidebar.classList.toggle('show-sidebar')

    // if(sidebar.classList.contains('show-sidebar')){

    //     sidebar.classlist.remove('show-sidebar')
    // }
    // else{
    //     sidebar.classList.add('show-sidebar')
    // }

})

closebtn.addEventListener('click', ()=>{

    if(sidebar.classList.contains('show-sidebar')){
        sidebar.classList.remove('show-sidebar')
    }
})