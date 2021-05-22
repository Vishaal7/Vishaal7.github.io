const abt = document.querySelector('.abtme')
const exit = document.querySelector('.dp')
const set3 = document.querySelector('.set3')
const set4 = document.querySelector('.set4')
const set5 = document.querySelector('.set5')
const set6 = document.querySelector('.set6')
const set7 = document.querySelector('.set7')
const set8 = document.querySelector('.set8')
const set9 = document.querySelector('.set9')
const set10 = document.querySelector('.set10')

const exp =document.querySelector('.exp')
const skills =document.querySelector('.skills')
const apply =document.querySelector('.apply')
const hobbies =document.querySelector('.hobbies')
const hire =document.querySelector('.hire')
const contact =document.querySelector('.contact')
const edu = document.querySelector('.edu')

const content = document.querySelector('.content')
  const end = content.getBoundingClientRect().bottom





edu.addEventListener('click',()=>{
    set3.style.display =" block"
     content.scrollBy(0,end)
      })
 exp.addEventListener('click',()=>{
   set4.style.display =" block"
   content.scrollBy(0,end)
     })
   skills.addEventListener('click',()=>{
     set5.style.display =" block";
     content.scrollBy(0,end)
    })
 apply.addEventListener('click',()=>{
     set6.style.display =" block";
     content.scrollBy(0,end)
     })
 hobbies.addEventListener('click',()=>{
      set7.style.display =" block";
      content.scrollBy(0,end)
      })
 hire.addEventListener('click',()=>{
     set8.style.display =" block";
     content.scrollBy(0,end)
    })
contact.addEventListener('click',()=>{
       set9.style.display ="block"
      set10.style.display =" block";
      content.scrollBy(0,end)
   })

content.sc

 exit.addEventListener('click',()=>window.scrollTo(0,0))