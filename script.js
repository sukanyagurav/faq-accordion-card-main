const faqs= document.querySelectorAll('.faq')

faqs.forEach((faq)=>{
   
    faq.addEventListener('click',()=>{
        const activeFaq = document.querySelector('.active')
        toggleItem(faq)
        if(activeFaq && activeFaq!== faq){
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