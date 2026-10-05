/**
 * Developer Portfolio Interactive Scripts
 * - Card Flip on Touch / Keyboard
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Card Flip Interaction (Hỗ trợ Touch & Keyboard)
  const profileCard = document.getElementById('profileFlipCard');
  if (profileCard) {
    profileCard.addEventListener('click', (e) => {
      // Cho phép click liên kết bình thường ở mặt sau
      if (e.target.closest('a')) return;
      profileCard.classList.toggle('is-flipped');
    });

    profileCard.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        profileCard.classList.toggle('is-flipped');
      }
    });
  }

  // 2. Mobile Hamburger Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const primaryNav = document.getElementById('primaryNav');

  if (menuToggle && primaryNav) {
    const toggleMenu = (isOpen) => {
      const active = isOpen !== undefined ? isOpen : !menuToggle.classList.contains('is-active');
      menuToggle.classList.toggle('is-active', active);
      primaryNav.classList.toggle('is-open', active);
      menuToggle.setAttribute('aria-expanded', String(active));
      menuToggle.setAttribute('aria-label', active ? 'Đóng menu điều hướng' : 'Mở menu điều hướng');
    };

    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Đóng menu khi nhấp vào liên kết điều hướng
    primaryNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        toggleMenu(false);
      });
    });

    // Đóng menu khi bấm phím Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuToggle.classList.contains('is-active')) {
        toggleMenu(false);
        menuToggle.focus();
      }
    });

    // Đóng menu khi nhấp chuột ra ngoài
    document.addEventListener('click', (e) => {
      if (menuToggle.classList.contains('is-active') && !primaryNav.contains(e.target) && !menuToggle.contains(e.target)) {
        toggleMenu(false);
      }
    });
  }

  // 3. Skill Progress Bar Observer (IntersectionObserver)
  const skillBarItems = document.querySelectorAll('.skill-bar-item');
  if ('IntersectionObserver' in window && skillBarItems.length > 0) {
    const skillObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    skillBarItems.forEach((item) => {
      skillObserver.observe(item);
    });
  } else {
    skillBarItems.forEach((item) => item.classList.add('is-visible'));
  }
});
