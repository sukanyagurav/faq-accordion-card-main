const faqs= document.querySelectorAll('.faq')

faqs.forEach((faq)=>{
   const title =faq.firstElementChild
    title.addEventListener('click',()=>{
        const activeFaq = document.querySelector('.active')
        toggleItem(title)
        if(activeFaq && activeFaq!== title){
            toggleItem(activeFaq)
        }
    })
})
function toggleItem(item){
    if(item.classList.contains('active'))
 {
    item.classList.remove('active');
 } 
 else{
    item.classList.add('active');
 }  
}