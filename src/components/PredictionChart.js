import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import '../css/Prediction.css';
import { authenticate } from '../utils/Auth';
import { getToken } from '../utils/Auth';

const PredictionChart = ({ sport, result }) => {
    const [chartData, setChartData] = useState({
        series: [{
            name: 'teamA',
            data: [],
        }, {
            name: 'teamB',
            data: [],
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

    const convertCategoryToEnglish = (category) => {
        switch (category) {
            case '축구':
                return 'soccer';
            case '농구':
                return 'basketball';
            case '손족구':
                return 'handball';
            case '발야구':
                return 'kickbaseball';
            case '족구':
                return 'football';
            case '피구':
                return 'dodgeball';
            default:
                return category;
        }
    };

    useEffect(() => {
        const ratio_state = async () => {
            try {
                const englishCategory = convertCategoryToEnglish(sport);
                const response = await authenticate(getToken()).get(`/game/ratio/${englishCategory}`);
                const data = response.data;

                setChartData((prevChartData) => ({
                    ...prevChartData,
                    series: [
                        {
                            ...prevChartData.series[0],
                            data: [data["A"]],
                        },
                        {
                            ...prevChartData.series[1],
                            data: [data["B"]],
                        },
                    ],
                }));
            } catch (error) {
                console.error(error);
            }
        };

        ratio_state();
    }, [sport, result]);

    return (
        <div id="chart" className='w-10/12 mx-auto'>
            <div className='mr-4'>
                <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={60} />
            </div>
        </div>
    );
}

export default PredictionChart;
