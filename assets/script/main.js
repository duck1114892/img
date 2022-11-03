

const buyBtns          = document.querySelectorAll('.js-buy-ticket')
const modal            = document.querySelector('.js-modal')
const modalClose       = document .querySelector('.js-modal-close')
const modalcontainer   = document .querySelector('.js-modal-container')
const signinBtn        = document.querySelector('.signinlink')
const searchBtn        = document.querySelector('.search-btn')
const searchBtnOpen    = document.querySelector('.search-btn-modal')
const searchBtnClose   = document.querySelector('.body-web')
const modalButton      = document.querySelector('.modal-button')
const modalInput       = document.getElementById('modal-user')
const notify           = document.querySelector('.notify')
const passwordInput    = document.getElementById('modal-password')
const aboutHeader      = document.querySelector('.about')
const album            = document.querySelector('.album')
const muave            = document.querySelector('.muave')
const contentsection   = document.querySelector('.content-section ')
const modalpassword    = document.getElementById('modal-password')
const useracc          = document.querySelector('#modal-user')
const textHeader       = document.querySelector('.text-head')
const hinhanhHeader    = document.querySelector('.hinhanh-header')
const feature          = document.querySelector('.feature')

// function
function showBuyTicket(){
    modal.classList.add('open')
    
}
function hideTicket(){
    modal.classList.remove('open')
}


for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTicket)
}
signinBtn.addEventListener('click',showBuyTicket)
modal.addEventListener('click', hideTicket)
modalcontainer.addEventListener('click',function (event) { 
    event.stopPropagation()
})
// the menu//
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mmenubtn');
var headerheight = header.clientHeight;
mobileMenu.onclick=function(){
var isClose =header.clientHeight === headerheight;
if (isClose){
   header.style.height='auto';
}
else{
   header.style.height = null;
}
}
//dong mo menu
var menuItems = document.querySelectorAll('#nav div a[href*="#"]'); 
   for(var i = 0; i < menuItems.length; i++){
       var menuItem = menuItems[i];
       menuItem.onclick = function(event){
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('suppnav');
       if(!isParentMenu){
        header.style.height = null;
       }
       else{
           event.preventDefault();
       }
    }
    }
    

//get value
async function signin() {
    var link = " http://localhost:3000/info"
    var data = await fetch(link)
    .then(function(res) {
        return res.json();
    })
function searchBtnOpenF() {
    searchBtnOpen.classList.add('open')
}
function searchBtncloseF() {
    searchBtnOpen.classList.remove('open')
}

    useracc.addEventListener('keypress', function(e) {
         if(e.code === 'Enter') {
        active()
         }
    })
    modalButton.addEventListener('keypress', function(e) {
        if(e.code === 'Enter') {
         active()
        }
    })
    modalButton.addEventListener('click', function() {
        active()
    })
    modalpassword.addEventListener('keypress',function(e){
     if(e.code === 'Enter') {
        active()
     }
    })
  


    function active() {
    let valueUser = modalInput.value.trim();    
    let valuePassword = passwordInput.value.trim(); 
    console.log(valuePassword)
    for(let i = 0 ; i <= data.length; i++){
        var username = data[i].name
        var userpassword = data[i].password

    if(valueUser && valuePassword) {
    if( valueUser == username && valuePassword == userpassword) {
    notify.classList.add('open')
    notify.innerText =`Người Dùng ${valueUser} Đã Đăng Nhập`
    textHeader.innerHTML = `Chào Mừng Nguời Dùng ${data[i].name} Đã Đến Với Web Của DuckGG`
    setTimeout(function(){
        notify.classList.remove('open')
        hideTicket()
    },1000)
    searchBtn.addEventListener('click', searchBtnOpenF)
    searchBtnClose.addEventListener('click', searchBtncloseF)
    async function getcontentAbout () {
        var linkAbout = "http://localhost:3000/content"
        var dataAbout =  await fetch(linkAbout)
        .then(function(res) {
            return res.json()
        })
        aboutHeader.innerText = dataAbout.title
    }
    getcontentAbout()
    muave.classList.add('open')
    album.classList.add('open')
    modalClose.addEventListener('click', hideTicket)
    modal.addEventListener('click',hideTicket) 
    contentsection.classList.add('open')
    stopPropagation()
    }


    else {
    notify.classList.add('open')
    notify.innerText = 'Nhập sai tên hoặc mật khẩu'
    setTimeout(function(){
    notify.classList.remove('open')
},1000)
}
}

    else{
    notify.classList.add('open')
    notify.innerText = 'Vui Lòng Nhập Tên Hoặc Mật Khẩu'
    setTimeout(function(){
    notify.classList.remove('open')
    },1000)
    } 
}
} 
}
signin()

