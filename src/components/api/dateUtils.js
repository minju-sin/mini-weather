// dateUtils.js
// 현재 날짜를 'YYYYMMDD' 형식으로 얻기
export function getCurrentDate() {

  const currentDate = new Date();

    // 현재 시간이 0시부터 2시 사이면 어제 날짜로 변경
    if (currentDate.getHours() >= 0 && currentDate.getHours() < 2) {
        currentDate.setDate(currentDate.getDate() - 1);
    }

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더하고 두 자리로 패딩
    const day = String(currentDate.getDate()).padStart(2, '0'); // 일을 두 자리로 패딩
  return `${year}${month}${day}`;
}