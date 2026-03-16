/* ============================================
   해마건축 Grasshopper Site - JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const hamburgerBtn = document.getElementById('hamburger-btn');

    // Search input - Enter 키 이벤트
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                console.log('검색어:', query);
                // 추후 검색 기능 구현 시 여기에 로직 추가
            }
        }
    });

    // 햄버거 메뉴 버튼 클릭
    hamburgerBtn.addEventListener('click', () => {
        console.log('메뉴 버튼 클릭');
        // 추후 메뉴 기능 구현 시 여기에 로직 추가
    });

    // 검색 입력 필드는 사용자가 직접 클릭할 때 포커스됨

    // 디졸브 슬라이드쇼
    const heroImages = document.querySelectorAll('.hero-image');
    if (heroImages.length > 1) {
        let currentIndex = 0;
        setInterval(() => {
            heroImages[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % heroImages.length;
            heroImages[currentIndex].classList.add('active');
        }, 4000);
    }
});
