const o=document.querySelector("ul[role='tablist']"),s=[...o.querySelectorAll("a")],i=document.querySelectorAll("section[role='tabpanel']"),f=(r,l,t)=>{const e=r.indexOf(t),c=r.indexOf(l),a=r.length-1,d=c===0&&e===a,u=e===0&&c===a;e>c?d?l.classList.replace("r","l"):(t.classList.replace("r","l"),l.classList.replace("l","r")):(t.classList.replace("l","r"),l.classList.replace("r","l"),u&&t.classList.replace("r","l"),e===0&&r[a].classList.replace("l","r"))};s.forEach((r,l)=>{r.addEventListener("click",t=>{t.preventDefault();const e=o.querySelector("[aria-selected='true']"),c=t.currentTarget;c!==e&&n(e,c),f(s,e,c)}),r.addEventListener("keydown",t=>{const e=s.indexOf(t.currentTarget);switch(t.code){case"ArrowDown":t.preventDefault(),i[l].focus();break;case"ArrowLeft":t.preventDefault(),s[e-1]&&n(t.currentTarget,s[e-1]),e!==0&&s[e-1].classList.replace("l","r"),s[e].classList.replace("r","l");break;case"ArrowRight":t.preventDefault(),s[e+1]&&n(t.currentTarget,s[e+1]),e!==s.length-1&&s[e+1].classList.replace("r","l"),s[e].classList.replace("l","r");break}})});i.forEach((r,l)=>{r.addEventListener("keydown",t=>{switch(t.code){case"ArrowUp":t.preventDefault(),s[l].focus();break}})});const n=(r,l)=>{l.focus(),l.removeAttribute("tabindex"),l.setAttribute("aria-selected","true"),r.setAttribute("aria-selected","false"),r.setAttribute("tabindex","-1"),i[s.indexOf(r)].hidden=!0,i[s.indexOf(r)].removeAttribute("aria-hidden"),i[s.indexOf(l)].hidden=!1,i[s.indexOf(l)].setAttribute("aria-hidden","false")};