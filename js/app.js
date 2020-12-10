var hamburgerBtn = document.querySelector('.hamburger'),
    closeIcon = document.querySelector('.close'),
    mobile = document.querySelector('.mobile');

hamburgerBtn.addEventListener('click', (e)=>{
    e.target.style.display = 'none';
    closeIcon.style.display = 'block';
    mobile.classList.add('active');
});

closeIcon.addEventListener('click', (e)=>{
    e.target.style.display = 'none';
    hamburgerBtn.style.display = 'block';
    mobile.classList.remove('active');
});