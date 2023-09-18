import React from 'react';
import ReactApexChart from 'react-apexcharts';
import '../css/Prediction.css';

class PredictionChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'teamA',
                data: [50],
            }, {
                name: 'teamB',
                data: [80],
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
                        dataLabels: {
                            // position: 'top', 양쪽정렬이 ,,,,,,안됨 ;;;;; ㅠㅠㅠ 후
                        },
                    },
                    dataLabels: {
                    }
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
                    enabled: false, // 툴팁 비활성화
                },
                toolbar: {
                    show: false,
                },
                labels: {
                    show: false,
                },
                stroke: {
                    show: false, // 차트 border
                },
                grid: {
                    show: false,
                }
            },
        };
    }

    render() {
        const { sport } = this.props;
        console.log(sport)

        return (
            <div id="chart" className='w-10/12 mx-auto'>
                <div className='mr-4'>
                    <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={60} />
                </div>
            </div>
        );
    }
}

export default PredictionChart;