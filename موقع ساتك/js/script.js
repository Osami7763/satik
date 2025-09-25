// Function to handle language switching
function switchLanguage() {
    const lang = document.documentElement.lang === 'ar' ? 'en' : 'ar';
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update button text
    const langSwitcher = document.getElementById('lang-switcher');
    if(langSwitcher) { // Check if the button exists
        langSwitcher.textContent = lang === 'ar' ? 'EN' : 'AR';
    }

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
            'project1-desc': 'لوحة تحكم مدرسية ذكية، صممت لإدارة المدرسة بسهولة وفاعلية، تجمع كل المعلومات والمهام في مكان واحد لتسهيل متابعة الطلاب، المقررات، والأنشطة اليومية بطريقة منظمة وآمنة.',
            'project2-title': 'موسوعة تفاعلية',
            'project2-desc': 'موسوعة تفاعلية سعودية، تجمع المعرفة المحلية بطريقة ديناميكية تسمح للمستخدمين بالتفاعل، الاكتشاف، والمساهمة، لتكون مرجعًا رقميًا مبتكرًا لكل المهتمين بالثقافة والتقنية في المملكة.',
            'project3-title': 'نظام تشغيل سعودي',
            'project3-desc': 'نظام تشغيل سعودي بالكامل، صُمم ليعكس رؤية المملكة في الاعتماد على حلول وطنية، مع بناء بيئة رقمية مستقلة وآمنة تسهم في تطوير التقنية المحلية وتعزيز الابتكار الوطني.',
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
            'project1-desc': 'A smart school control panel, designed to manage the school easily and effectively, gathering all information and tasks in one place to facilitate monitoring of students, courses, and daily activities in an organized and secure way.',
            'project2-title': 'Interactive Encyclopedia',
            'project2-desc': 'A Saudi interactive encyclopedia that collects local knowledge in a dynamic way, allowing users to interact, discover, and contribute, to be an innovative digital reference for all those interested in culture and technology in the Kingdom.',
            'project3-title': 'Saudi Operating System',
            'project3-desc': 'A completely Saudi operating system, designed to reflect the Kingdom\'s vision of relying on national solutions, while building an independent and secure digital environment that contributes to the development of local technology and the promotion of national innovation.',
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

    if (document.title) document.title = currentTranslations['site-title'];
    const logoImg = document.querySelector('.logo img');
    if (logoImg) logoImg.alt = currentTranslations['logo-alt'];
    const logoSpan = document.querySelector('.logo span');
    if (logoSpan) logoSpan.textContent = currentTranslations['site-title'];
    const homeTitle = document.querySelector('.hero h1');
    if (homeTitle) homeTitle.textContent = currentTranslations['home-title'];
    const homeDesc = document.querySelector('.hero p');
    if (homeDesc) homeDesc.textContent = currentTranslations['home-desc'];
    
    // Check if the button with class 'learn-more' exists before trying to update its text
    const learnMoreButton = document.querySelector('.learn-more .button-text');
    if (learnMoreButton) {
      learnMoreButton.textContent = currentTranslations['learn-more-text'];
    }

    const aboutTitle = document.querySelector('#about h1');
    if (aboutTitle) aboutTitle.textContent = currentTranslations['about-title'];
    const aboutDesc = document.querySelector('#about p');
    if (aboutDesc) aboutDesc.textContent = currentTranslations['about-desc'];
    const aboutBullet1 = document.querySelector('#about .bullets li:nth-child(1)');
    if (aboutBullet1) aboutBullet1.textContent = currentTranslations['about-bullet1'];
    const aboutBullet2 = document.querySelector('#about .bullets li:nth-child(2)');
    if (aboutBullet2) aboutBullet2.textContent = currentTranslations['about-bullet2'];
    const aboutBullet3 = document.querySelector('#about .bullets li:nth-child(3)');
    if (aboutBullet3) aboutBullet3.textContent = currentTranslations['about-bullet3'];
    
    const aboutButtonText = document.querySelector('#about a.button-text');
    if (aboutButtonText) {
      aboutButtonText.textContent = currentTranslations['team-button-text'];
    }

    const projectsTitle = document.querySelector('#projects h1');
    if (projectsTitle) projectsTitle.textContent = currentTranslations['projects-title'];
    const project1Title = document.querySelector('#projects .accordion:nth-of-type(1)');
    if (project1Title) project1Title.textContent = currentTranslations['project1-title'];
    const project1Desc = document.querySelector('#projects .panel:nth-of-type(1) p');
    if (project1Desc) project1Desc.textContent = currentTranslations['project1-desc'];
    const project2Title = document.querySelector('#projects .accordion:nth-of-type(2)');
    if (project2Title) project2Title.textContent = currentTranslations['project2-title'];
    const project2Desc = document.querySelector('#projects .panel:nth-of-type(2) p');
    if (project2Desc) project2Desc.textContent = currentTranslations['project2-desc'];
    const project3Title = document.querySelector('#projects .accordion:nth-of-type(3)');
    if (project3Title) project3Title.textContent = currentTranslations['project3-title'];
    const project3Desc = document.querySelector('#projects .panel:nth-of-type(3) p');
    if (project3Desc) project3Desc.textContent = currentTranslations['project3-desc'];
    const contactTitle = document.querySelector('#contact h1');
    if (contactTitle) contactTitle.textContent = currentTranslations['contact-title'];
    const instagramTitle = document.querySelector('.social-card.instagram .title');
    if (instagramTitle) instagramTitle.textContent = currentTranslations['instagram-title'];
    const instagramDesc = document.querySelector('.social-card.instagram .desc');
    if (instagramDesc) instagramDesc.textContent = currentTranslations['instagram-desc'];
    const tiktokTitle = document.querySelector('.social-card.tiktok .title');
    if (tiktokTitle) tiktokTitle.textContent = currentTranslations['tiktok-title'];
    const tiktokDesc = document.querySelector('.social-card.tiktok .desc');
    if (tiktokDesc) tiktokDesc.textContent = currentTranslations['tiktok-desc'];
    const xTitle = document.querySelector('.social-card.x .title');
    if (xTitle) xTitle.textContent = currentTranslations['x-title'];
    const xDesc = document.querySelector('.social-card.x .desc');
    if (xDesc) xDesc.textContent = currentTranslations['x-desc'];
    const discordTitle = document.querySelector('.social-card.discord .title');
    if (discordTitle) discordTitle.textContent = currentTranslations['discord-title'];
    const discordDesc = document.querySelector('.social-card.discord .desc');
    if (discordDesc) discordDesc.textContent = currentTranslations['discord-desc'];
    const emailTitle = document.querySelector('.social-card.email .title');
    if (emailTitle) emailTitle.textContent = currentTranslations['email-title'];
    const emailDesc = document.querySelector('.social-card.email .desc');
    if (emailDesc) emailDesc.textContent = currentTranslations['email-desc'];
    const copyright = document.querySelector('footer p');
    if (copyright) copyright.textContent = currentTranslations['copyright'];
    
    // Update nav links
    const navHome = document.querySelector('.nav-links li:nth-child(1) a');
    if (navHome) navHome.textContent = currentTranslations['nav-home'];
    const navAbout = document.querySelector('.nav-links li:nth-child(2) a');
    if (navAbout) navAbout.textContent = currentTranslations['nav-about'];
    const navProjects = document.querySelector('.nav-links li:nth-child(3) a');
    if (navProjects) navProjects.textContent = currentTranslations['nav-projects'];
    const navContact = document.querySelector('.nav-links li:nth-child(4) a');
    if (navContact) navContact.textContent = currentTranslations['nav-contact'];
}

// Add event listener to the language switcher button
const langSwitcherBtn = document.getElementById('lang-switcher');
if (langSwitcherBtn) {
    langSwitcherBtn.addEventListener('click', switchLanguage);
}


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
  if (mq.addEventListener) {
      mq.addEventListener('change', handleMQ);
  } else {
      mq.addListener(handleMQ);
  }
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
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
      } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
})();