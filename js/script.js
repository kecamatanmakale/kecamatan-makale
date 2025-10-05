
document.addEventListener('DOMContentLoaded', function(){
  const newsList = [
    "Pemerintah Kecamatan Makale melaksanakan gotong royong membersihkan lingkungan kota.",
    "Festival Budaya Toraja 2025 akan digelar di Plaza Kolam Makale.",
    "Pelayanan administrasi kependudukan kini bisa diakses secara online.",
    "Camat Makale menghadiri rapat koordinasi bersama Bupati Tana Toraja."
  ];
  let idx = 0;
  const ticker = document.getElementById('newsTicker');
  if(ticker){
    function update(){ ticker.textContent = newsList[idx]; idx=(idx+1)%newsList.length; }
    update(); setInterval(update,6000);
  }
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImg');
  const closeBtn = document.getElementById('closeModal');
  document.querySelectorAll('.gallery-item').forEach(img=>{
    img.addEventListener('click', ()=>{
      if(!modal) return;
      modal.style.display='flex'; modalImg.src = img.dataset-src || img.src;
    });
  });
  if(closeBtn) closeBtn.onclick = ()=> modal.style.display='none';
  if(modal) modal.addEventListener('click', (e)=>{ if(e.target===modal) modal.style.display='none'; });
  const navLinks = document.querySelectorAll('nav a');
  const path = window.location.pathname.split('/').pop();
  navLinks.forEach(a=>{
    if(a.getAttribute('href')===path || (path==='' && a.getAttribute('href')==='index.html')){ a.classList.add('active'); }
  });
  document.querySelectorAll('[data-share]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(document.title);
      const service = btn.dataset.share;
      let shareUrl = '#';
      if(service==='whatsapp') shareUrl = `https://wa.me/?text=${text}%20${url}`;
      if(service==='facebook') shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      if(service==='twitter') shareUrl = `https://twitter.com/intent/tweet?text=${text}%20${url}`;
      if(service==='instagram') { alert('Untuk berbagi ke Instagram, silakan gunakan aplikasi Instagram (posting manual).'); return; }
      window.open(shareUrl,'_blank');
    });
  });
});
