import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

// 온도 변화 차트 
const LineChart = ({ labels, data, label }) => {
    const chartRef = useRef(null);
    let chartInstance = null;

    useEffect(() => {
        const ctx = chartRef.current.getContext("2d");

        const slicedLabels = labels.slice(0, 12); // 처음 12개의 라벨만 유지
        const slicedData = data.slice(0, 12); // 처음 12개의 데이터만 유지


        chartInstance = new Chart(ctx, {
            type: "line",
            data: {
                labels: slicedLabels,
                datasets: [
                    {
                        label: "온도 변화 차트",
                        data: slicedData,
                        borderColor: "#7ed0ff",
                        backgroundColor: "rgba(126, 208, 255, 0.2)", // 채우는 색상 변경
                        fill: true,
                        pointRadius: 1 // 포인터 크기를 0으로 설정하여 포인터 제거
                    },
                ],
            },

            // 옵션 값 숨기기
            options: {
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: '시간' // x축 이름 설정
                        }
                    },
                    y: {
                        display: true, 
                        max: Math.max(...data) + 1, // 최대값 설정
                        min: Math.min(...data) - 1, // 최소값 설정
                        ticks: {
                            stepSize: 2, // y축 간격 조절
                        },
                        title: {
                            display: true,
                            text: '온도' // y축 이름 설정
                        }
                    },
                },
                plugins: {
                    legend: {
                        display: false, // 범례

                    },
                },
            },
        });

        return () => {
            if (chartInstance) {
                chartInstance.destroy();
                chartInstance = null;
            }
        };
    }, [labels, data, label]);

    return <canvas ref={chartRef} />;
};

export default LineChart;
