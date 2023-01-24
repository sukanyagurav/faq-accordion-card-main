const toggleBtn = document.querySelectorAll('.faq-toggle');
console.log(toggleBtn)
toggleBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
       
        btn.parentNode.classList.toggle('active');
    })
})
