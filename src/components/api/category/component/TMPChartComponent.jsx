import React from 'react';
import { filterDataByCategory } from '../DataUtils.js';
import LineChart from '../chart/LineChart.jsx'; // LineChart 컴포넌트 import

// 기온 차트 
function TMPChartComponent({ responseData }) {
    const tmpData = filterDataByCategory(responseData, 'TMP');
    const labels = tmpData.map(item => item.fcstTime); // 라벨로 사용할 시간 데이터
    const data = tmpData.map(item => parseFloat(item.fcstValue)); // 그래프에 표시할 온도 데이터

    return (
        <div>
            <h3>12시간 온도 변화</h3>
            <LineChart labels={labels} data={data} label="Temperature" /> {/* 라인 차트 생성 */}
        </div>
    );
}

export default TMPChartComponent;
