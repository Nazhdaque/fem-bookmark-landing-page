const s=document.querySelector("ul[role='tablist']"),t=[...s.querySelectorAll("a")],c=document.querySelectorAll("section[role='tabpanel']");t.forEach((r,a)=>{r.addEventListener("click",e=>{e.preventDefault();const n=s.querySelector("[aria-selected='true']");e.currentTarget!==n&&i(n,e.currentTarget)}),r.addEventListener("keydown",e=>{const n=t.indexOf(e.currentTarget);switch(e.code){case"ArrowDown":e.preventDefault(),c[a].focus();break;case"ArrowLeft":e.preventDefault(),t[n-1]&&i(e.currentTarget,t[n-1]);break;case"ArrowRight":e.preventDefault(),t[n+1]&&i(e.currentTarget,t[n+1]);break}})});c.forEach((r,a)=>{r.addEventListener("keydown",e=>{switch(e.code){case"ArrowUp":e.preventDefault(),t[a].focus();break}})});const i=(r,a)=>{a.focus(),a.removeAttribute("tabindex"),a.setAttribute("aria-selected","true"),r.setAttribute("aria-selected","false"),r.setAttribute("tabindex","-1"),c[t.indexOf(r)].hidden=!0,c[t.indexOf(r)].removeAttribute("aria-hidden"),c[t.indexOf(a)].hidden=!1,c[t.indexOf(a)].setAttribute("aria-hidden","false")};