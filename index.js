import sublinks from './data.js';

const link_button = document.querySelectorAll('.link-button');
const submenu = document.querySelector('.submenu');
const nav = document.querySelector('.nav');
const hero = document.querySelector('.hero');
const btn = document.querySelector('.btn');
const slidebar_wrapper = document.querySelector('.slideBar-wrapper');

btn.addEventListener('click',()=>{
    slidebar_wrapper.classList.add('show-wrapper');
})
slidebar_wrapper.addEventListener('click',(e)=>{
    if(e.target.classList.contains('show-wrapper')||e.target.classList.contains('btn-close')){
        slidebar_wrapper.classList.remove('show-wrapper');
    }
})
nav.addEventListener('mouseover',(e)=>{
   if(!e.target.classList.contains('link-button')){
    submenu.classList.remove('show');
   }

})
hero.addEventListener('mouseover',(e)=>{
    if(!e.target.classList.contains('submenu')){
        submenu.classList.remove('show');
    }
})
link_button.forEach((btn)=>{
    btn.addEventListener('mouseover',()=>{
        console.log('zz');
        submenu.classList.add('show');
        let position = btn.getBoundingClientRect();
        let top = position.bottom;
        let left = (position.left + position.right)/2;

        const target = sublinks.find((link)=>{
            if(btn.textContent===link.page){
                return link;
            }
        });
        let {page,links} = target;
        submenu.style.left = `${left}px`;
        submenu.style.top = `${top}px`;
        let column = 2;
        if(links.length===3){
            column=3;
        }
        if(links.length===4){
            column=4;
        }
        submenu.innerHTML =  `
            <h4>${page}</h4>
            <div class="sidebar-sublinks column-${column}">
                ${links.map((a)=>{
                    return `<a href="${a.url}"><i class="${a.icon}"></i>${a.label}</a>`
                }).join("")}
                </div>   `;
    })
})
