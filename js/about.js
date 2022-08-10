var link=document.querySelector('#platform')
link.addEventListener('click',()=>{
    console.log("platform")
    let menu=document.querySelector('.hide_menu').classList.remove('d-none')
})
link.addEventListener('mouseleave',()=>{
    console.log("platform")
    let menu=document.querySelector('.hide_menu').classList.add('d-none')
})
var eng_link=document.querySelector('.lang_btn')
eng_link.addEventListener('mouseover',()=>{
    let menu=document.querySelector('.lang_panel').classList.remove('d-none')
    eng_link.classList.add('d-none')
})
document.querySelector('.lang_panel').addEventListener('mouseleave',()=>{
   let menu= document.querySelector('.lang_panel').classList.add('d-none')
   eng_link.classList.remove('d-none')
})
document.querySelector('#ru').addEventListener('click',()=>{
    console.log("rus")
})
document.querySelector('#en').addEventListener('click',()=>{
    console.log("eng")
})

var userLang = navigator.language || navigator.userLanguage; 


document.querySelector('.wrap_btn_menu').addEventListener('click',()=>{
    document.querySelector('.header_menu').classList.toggle('d-none')
})

document.querySelector('#ext_chrome').addEventListener('click',()=>{
    window.open("https://chrome.google.com/webstore/detail/volume-master/jghecgabfgfdldnmbfkhmffcabddioke?hl=en-US");
})

