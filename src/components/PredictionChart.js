import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import '../css/Prediction.css';

const PredictionChart = ({ sport }) => {
    const [chartData, setChartData] = useState({
        series: [{
            name: 'teamA',
            data: [50],
        }, {
            name: 'teamB',
            data: [30],
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                stackType: '100%',
                axisTicks: false,
                axisBorder: false,
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {},
                },
                dataLabels: {},
            },
            title: {
                text: ''
            },
            fill: {
                opacity: 1
            },
            legend: {
                show: false,
            },
            colors: ['#83E5FF', '#ED7486'],
            yaxis: {
                labels: { show: false },
                axisTicks: { show: false },
                axisBorder: { show: false },
            },
            xaxis: {
                labels: { show: false },
                axisTicks: { show: false },
                axisBorder: { show: false },
            },
            tooltip: {
                enabled: false,
            },
            toolbar: {
                enabled: false,
            },
            labels: {
                show: false,
            },
            stroke: {
                show: false,
            },
            grid: {
                show: false,
            }
        },
    });

    useEffect(() => {
        // 이펙트 로직 (예: API 호출)
    }, [sport]);

    return (
        <div id="chart" className='w-10/12 mx-auto'>
            <div className='mr-4'>
                <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={60} />
            </div>
        </div>
    );
}

export default PredictionChart;
