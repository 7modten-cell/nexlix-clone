const searchPanel=document.getElementById('searchPanel');
document.getElementById('searchToggle').addEventListener('click',()=>{searchPanel.classList.add('open');searchPanel.setAttribute('aria-hidden','false');searchPanel.querySelector('input').focus();});
document.getElementById('searchClose').addEventListener('click',()=>{searchPanel.classList.remove('open');searchPanel.setAttribute('aria-hidden','true');});
document.getElementById('menuToggle').addEventListener('click',()=>document.getElementById('menuPanel').classList.toggle('open'));
document.getElementById('themeToggle').addEventListener('click',()=>document.body.classList.toggle('soft-contrast'));
document.querySelector('.ticker-close').addEventListener('click',()=>document.querySelector('.ticker').remove());
document.addEventListener('keydown',e=>{if(e.key==='Escape'){searchPanel.classList.remove('open');document.getElementById('menuPanel').classList.remove('open');}});
