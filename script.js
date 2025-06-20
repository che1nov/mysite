// Анимация появления элементов при прокрутке
document.addEventListener('DOMContentLoaded', function() {
    // Анимация прогресс-баров навыков
    const skillLevels = document.querySelectorAll('.skill-level');
    
    // Функция для анимации прогресс-баров
    function animateSkills() {
        skillLevels.forEach(skill => {
            const width = skill.style.width;
            skill.style.width = '0';
            setTimeout(() => {
                skill.style.transition = 'width 1.5s ease-in-out';
                skill.style.width = width;
            }, 300);
        });
    }
    
    // Наблюдатель за появлением секции навыков в поле зрения
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    // Наблюдаем за секцией навыков
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
    
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
});
