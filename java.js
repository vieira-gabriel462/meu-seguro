document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Sua mensagem foi enviada com sucesso!');
});
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Previne o envio padrão
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, insira um email válido!');
        return;
    }

    alert('Formulário enviado com sucesso!');
    this.reset(); 
});

function validateEmail(email) {
    const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return regex.test(email);
}
const mobileMenu = document.querySelector('.navbar');
const menuToggle = document.createElement('button');
menuToggle.textContent = '☰';
menuToggle.classList.add('menu-toggle');
mobileMenu.parentNode.insertBefore(menuToggle, mobileMenu);

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('show-menu');
});


const faqItems = document.querySelectorAll('.faq-item h3');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const content = item.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
        });
    });
});

const animatedElements = document.querySelectorAll('.animate');

function handleScroll() {
    const triggerBottom = window.innerHeight * 0.8;

    animatedElements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;

        if (elTop < triggerBottom) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
handleScroll();
