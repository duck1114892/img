var input = document.querySelector('input')
var btn = document.querySelector('button')
var form = document.querySelector('form')
var todo = document.querySelector('.todo')
var deleteList = document.querySelector('.ti-trash')
var changewp = document.querySelector('.set-wp-btn')
var change =  document.querySelector('.change-wp')
form.addEventListener('submit', function(event) {
    event.preventDefault()
    var getValue = input.value.trim()
    if(getValue) {
         addToDo({
            text: getValue,
            // status:'completed'
         })
    }
})
 function addToDo (val) {
    //add
    var li = document.createElement('li')
    li.innerHTML = `
    <div class="text">${val.text}</div>
    <i class="ti-trash"></i>`
    todo.appendChild(li)
    // gach
    if(val.status === 'completed'){
     li.classList.add('completed')
    }
    li.addEventListener('click', function() {
        this.classList.toggle('completed')
    })
    // xoa
    li.querySelector('.ti-trash').addEventListener('click',  function() {
       this.parentElement.remove()
    })
    input.value = ''
 }
// thay doi hinh nen
 changewp.addEventListener('change', function(e) {
     var file = e.target.files[0]
     var style = document.createElement('span')
     if(!file) return
     if(!file.name.endsWith('jpg')) return;
    style.innerHTML =  `
    <style>
    body{
     height: 790px;
     background: linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0.8)),url(${URL.createObjectURL(file)}) no-repeat center/cover;
 }
 </style>`
  change.appendChild(style)
 })
S