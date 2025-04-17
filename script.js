// 페이지 로드 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 제목에 마우스를 올렸을 때 색상 변경
    const mainTitle = document.querySelector('h1');
  
    mainTitle.addEventListener('mouseover', function() {
      this.style.color = '#ffd700';
    });
  
    mainTitle.addEventListener('mouseout', function() {
      this.style.color = 'white';
    });
  
    // 현재 연도 자동 업데이트
    const currentYear = new Date().getFullYear();
    document.querySelector('footer p').textContent = `© ${currentYear} 나의 첫 웹페이지`;
  });