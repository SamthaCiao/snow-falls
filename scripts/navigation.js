// 导航切换和滚动监听
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');
    
    // 导航点击事件
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // 更新导航状态
                navItems.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // 滚动监听，自动高亮当前section
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navItems.forEach(nav => {
                    nav.classList.remove('active');
                    if (nav.getAttribute('data-section') === id || 
                        nav.getAttribute('href') === `#${id}`) {
                        nav.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // 页面加载时检查当前section
    function checkCurrentSection() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            
            if (scrollPos >= top && scrollPos < bottom) {
                const id = section.getAttribute('id');
                navItems.forEach(nav => {
                    nav.classList.remove('active');
                    if (nav.getAttribute('data-section') === id || 
                        nav.getAttribute('href') === `#${id}`) {
                        nav.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', checkCurrentSection);
    checkCurrentSection();
});

