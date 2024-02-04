// timeUtils.js
// 현재 시각 얻기
// 단, 날씨는 05시에 최초 발표되며 3시간 기준으로 증가

export function getCurrentTime() {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');  // 현재 시간의 시 부분을 가져옴
    
    switch (true) {
        // 0시 2시 사이 => 어제 날짜의 23시 관측 결과 보여줘야 함 
        case (hours >= '00' && hours < '02'):
            return '2300';
        
        // 02시 05시 사이 => 오늘 날짜의 02시 관측 결과 보여줘야 함
        case (hours >= '02' && hours < '05'):
            return '0200';
        case (hours >= '05' && hours < '08'):
            return '0500';
        case (hours >= '08' && hours < '11'):
            return '0800';
        case (hours >= '11' && hours < '14'):
            return '1100';
        case (hours >= '14' && hours < '17'):
            return '1400';
        case (hours >= '17' && hours < '20'):
            return '1700';
        case (hours >= '20' && hours < '23'):
            return '2000';
        default:
            return '2300';
    }
}
