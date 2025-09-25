// Function to handle language switching
function switchLanguage() {
    const lang = document.documentElement.lang === 'ar' ? 'en' : 'ar';
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update button text
    const langSwitcher = document.getElementById('lang-switcher');
    langSwitcher.textContent = lang === 'ar' ? 'EN' : 'AR';

    // Define translations
    const translations = {
        'ar': {
            'home-title': 'فريق ساتيك السعودي',
            'home-desc': 'نُطوّر مشاريع وأفكار تقنية سعودية تصنع أثرًا حقيقيًا.',
            'about-title': 'من نحن',
            'about-desc': 'ساتيك فريق سعودي شغوف بالتقنية وريادة الأعمال. نحول الأفكار إلى منتجات رقمية عملية بجودة عالية وتجربة استخدام ممتازة.',
            'about-bullet1': 'قيمنا: الاحترافية، الشفافية، روح الفريق.',
            'about-bullet2': 'مجالاتنا: الويب، أدوات تعليمية، حلول ذكية.',
            'about-bullet3': 'هدفنا: منتج عربي يفخر به المستخدم.',
            'projects-title': 'المشاريع',
            'project1-title': 'لوحة تحكم للمدارس',
            'project1-desc': 'نظام لمتابعة الحضور، الدرجات، والتقارير الفورية للطلاب والمعلمين.',
            'project2-title': 'موسوعة تفاعلية',
            'project2-desc': 'موسوعة عربية مبسطة، فيها محتوى تفاعلي واختبارات قصيرة لقياس تقدم التعلم.',
            'project3-title': 'منصة تدريب سيبراني',
            'project3-desc': 'مختبرات عملية وتحديات CTF لتقوية مهارات الدفاع والهجوم السيبراني.',
            'contact-title': 'تواصل معنا',
            'instagram-title': 'الإنستقرام',
            'instagram-desc': 'فيه الإعلانات عن المشاريع والأحداث',
            'tiktok-title': 'تيك توك',
            'tiktok-desc': 'فيه مشاريع الفريق ولقطات ممتعة',
            'x-title': 'X',
            'x-desc': 'فيه أحدث الأخبار والتحديثات',
            'discord-title': 'دِسكورد',
            'discord-desc': 'سيرفر المجتمع—انضم وتابع كل جديد',
            'email-title': 'الإيميل',
            'email-desc': 'للتواصل والاستفسارات مباشرة',
            'copyright': '© 2025 جميع الحقوق محفوظة - فريق ساتيك',
            'nav-home': 'الرئيسية',
            'nav-about': 'من نحن',
            'nav-projects': 'المشاريع',
            'nav-contact': 'تواصل معنا',
            'learn-more-text': 'اكثر',
            'team-button-text': 'تعرف على الفريق',
            'site-title': 'فريق ساتيك',
            'logo-alt': 'شعار ساتيك',
        },
        'en': {
            'home-title': 'Satech Saudi Team',
            'home-desc': 'We develop Saudi technical projects and ideas that make a real impact.',
            'about-title': 'About Us',
            'about-desc': 'Satech is a Saudi team passionate about technology and entrepreneurship. We turn ideas into practical digital products with high quality and an excellent user experience.',
            'about-bullet1': 'Our Values: Professionalism, Transparency, Team Spirit.',
            'about-bullet2': 'Our Fields: Web, Educational Tools, Smart Solutions.',
            'about-bullet3': 'Our Goal: An Arabic product that the user is proud of.',
            'projects-title': 'Projects',
            'project1-title': 'School Dashboard',
            'project1-desc': 'A system to track attendance, grades, and instant reports for students and teachers.',
            'project2-title': 'Interactive Encyclopedia',
            'project2-desc': 'A simplified Arabic encyclopedia with interactive content and short quizzes to measure learning progress.',
            'project3-title': 'Cyber Training Platform',
            'project3-desc': 'Practical labs and CTF challenges to strengthen cyber defense and offense skills.',
            'contact-title': 'Contact Us',
            'instagram-title': 'Instagram',
            'instagram-desc': 'Where we announce projects and events',
            'tiktok-title': 'TikTok',
            'tiktok-desc': 'Features team projects and fun clips',
            'x-title': 'X',
            'x-desc': 'For the latest news and updates',
            'discord-title': 'Discord',
            'discord-desc': 'The community server—join and follow all that is new',
            'email-title': 'Email',
            'email-desc': 'For direct communication and inquiries',
            'copyright': '© 2025 All rights reserved - Satech Team',
            'nav-home': 'Home',
            'nav-about': 'About Us',
            'nav-projects': 'Projects',
            'nav-contact': 'Contact Us',
            'learn-more-text': 'More',
            'team-button-text': 'Meet the Team',
            'site-title': 'Satech Team',
            'logo-alt': 'Satech Logo',
        }
    };

    // Update text content based on the new language
    const currentTranslations = translations[lang];

    document.title = currentTranslations['site-title'];
    document.querySelector('.logo img').alt = currentTranslations['logo-alt'];
    document.querySelector('.logo span').textContent = currentTranslations['site-title'];
    document.querySelector('.hero h1').textContent = currentTranslations['home-title'];
    document.querySelector('.hero p').textContent = currentTranslations['home-desc'];
    
    // Check if the button with class 'learn-more' exists before trying to update its text
    const learnMoreButton = document.querySelector('.learn-more .button-text');
    if (learnMoreButton) {
      learnMoreButton.textContent = currentTranslations['learn-more-text'];
    }

    document.querySelector('#about h1').textContent = currentTranslations['about-title'];
    document.querySelector('#about p').textContent = currentTranslations['about-desc'];
    document.querySelector('#about .bullets li:nth-child(1)').textContent = currentTranslations['about-bullet1'];
    document.querySelector('#about .bullets li:nth-child(2)').textContent = currentTranslations['about-bullet2'];
    document.querySelector('#about .bullets li:nth-child(3)').textContent = currentTranslations['about-bullet3'];
    
    const aboutButtonText = document.querySelector('#about a.button-text');
    if (aboutButtonText) {
      aboutButtonText.textContent = currentTranslations['team-button-text'];
    }

    document.querySelector('#projects h1').textContent = currentTranslations['projects-title'];
    document.querySelector('#projects .accordion:nth-of-type(1)').textContent = currentTranslations['project1-title'];
    document.querySelector('#projects .panel:nth-of-type(1) p').textContent = currentTranslations['project1-desc'];
    document.querySelector('#projects .accordion:nth-of-type(2)').textContent = currentTranslations['project2-title'];
    document.querySelector('#projects .panel:nth-of-type(2) p').textContent = currentTranslations['project2-desc'];
    document.querySelector('#projects .accordion:nth-of-type(3)').textContent = currentTranslations['project3-title'];
    document.querySelector('#projects .panel:nth-of-type(3) p').textContent = currentTranslations['project3-desc'];
    document.querySelector('#contact h1').textContent = currentTranslations['contact-title'];
    document.querySelector('.social-card.instagram .title').textContent = currentTranslations['instagram-title'];
    document.querySelector('.social-card.instagram .desc').textContent = currentTranslations['instagram-desc'];
    document.querySelector('.social-card.tiktok .title').textContent = currentTranslations['tiktok-title'];
    document.querySelector('.social-card.tiktok .desc').textContent = currentTranslations['tiktok-desc'];
    document.querySelector('.social-card.x .title').textContent = currentTranslations['x-title'];
    document.querySelector('.social-card.x .desc').textContent = currentTranslations['x-desc'];
    document.querySelector('.social-card.discord .title').textContent = currentTranslations['discord-title'];
    document.querySelector('.social-card.discord .desc').textContent = currentTranslations['discord-desc'];
    document.querySelector('.social-card.email .title').textContent = currentTranslations['email-title'];
    document.querySelector('.social-card.email .desc').textContent = currentTranslations['email-desc'];
    document.querySelector('footer p').textContent = currentTranslations['copyright'];
    
    // Update nav links
    document.querySelector('.nav-links li:nth-child(1) a').textContent = currentTranslations['nav-home'];
    document.querySelector('.nav-links li:nth-child(2) a').textContent = currentTranslations['nav-about'];
    document.querySelector('.nav-links li:nth-child(3) a').textContent = currentTranslations['nav-projects'];
    document.querySelector('.nav-links li:nth-child(4) a').textContent = currentTranslations['nav-contact'];
}

// Add event listener to the language switcher button
document.getElementById('lang-switcher').addEventListener('click', switchLanguage);

// Robust hamburger menu
(function(){
  const body = document.body;
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('navLinks');
  const backdrop = document.getElementById('backdrop');

  function openMenu(){
    body.classList.add('menu-open');
    if(btn) btn.setAttribute('aria-expanded','true');
  }

  function closeMenu(){
    body.classList.remove('menu-open');
    if(btn) btn.setAttribute('aria-expanded','false');
  }

  function toggle(){
    if(body.classList.contains('menu-open')) closeMenu();
    else openMenu();
  }

  if(btn) btn.addEventListener('click', toggle);
  if(backdrop) backdrop.addEventListener('click', closeMenu);
  if(nav) nav.addEventListener('click', e => { if(e.target.tagName==='A') closeMenu(); });

  window.addEventListener('keydown', e => { if(e.key==='Escape') closeMenu(); });

  // Ensure desktop always visible
  const mq = window.matchMedia('(max-width: 900px)');
  function handleMQ(){ if(!mq.matches) closeMenu(); }
  mq.addEventListener ? mq.addEventListener('change', handleMQ) : mq.addListener(handleMQ);
  handleMQ();

  // Register SW
  if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{ navigator.serviceWorker.register('sw.js').catch(console.error); });
  }

  // Accordion functionality
  const acc = document.getElementsByClassName('accordion');
  for(let i=0; i<acc.length; i++){
    acc[i].addEventListener('click', function(){
      this.classList.toggle('active');
    });
  }
})();
script.js
12 