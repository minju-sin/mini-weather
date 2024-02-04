// dateUtils.js
// 현재 날짜를 'YYYYMMDD' 형식으로 얻기
export function getCurrentDate() {
  const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더하고 두 자리로 패딩
    const day = String(currentDate.getDate()).padStart(2, '0'); // 일을 두 자리로 패딩
  return `${year}${month}${day}`;
}