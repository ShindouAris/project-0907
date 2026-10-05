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
});
