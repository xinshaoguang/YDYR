// // 负载均衡图表
// var loadBalance = echarts.init(document.getElementById('load-balance'));
// var loadBalanceOption = {

//     legend: {
//         data: ['图例1', '图例2', '图例3', '图例4'],
//         bottom: 20,
//         textStyle: {
//             color: '#ffffff',
//         }
//     },
//     graphic: {
//         elements: [
//             {
//                 type: 'text',
//                 left: 'center', // 相对父元素居中
//                 top: '150',  // 相对父元素上下的位置
//                 style: {
//                     fill: '#FFFF00',
//                     text: [''],
//                     font: '34px Arial Normal',
//                 }
//             }]
//     },
//     series: [
//         {
//             type: 'pie',
//             center: ['50%', '45%'],
//             tooltip: {
//                 trigger: 'item',
//                 formatter: "{a} <br/>{b}: {c} ({d}%)"
//             },
//             radius: ['82', '117'],
//             label: {
//                 verticalAlign: 'bottom',
//                 fontSize: 16,
//                 color: '#00FFFF',
//                 verticalAlign: 'top',

//                 // normal: {
//                 //     show: true,
//                 //     // position: 'center',
//                 //     formatter: '{b}',
//                 //     verticalAlign: 'middle',
//                 //     verticalAlign: 'middle',
//                 //     textStyle: {
//                 //         color: '#00FFFF',
//                 //         // fontSize: '16',
//                 //         backgroundColor: '#f00',
//                 //     },
//                 // },
//                 // emphasis: {
//                 //     show: true,
//                 //     textStyle: {
//                 //         fontSize: '16',
//                 //         fontWeight: 'bold',
//                 //         color: '#00FFFF',
//                 //     },

//                 // },
//             },
//             labelLine: {
//                 lineStyle: {
//                     color: '#00FFFF',
//                 },
//             },
//             // hoverAnimation: false,
//             itemStyle: {
//                 // borderColor: '#00FFFF'
//                 // shadowColor: '#00FFFF',
//                 // shadowBlur: 3
//             },
//             data: [
//                 {
//                     value: 335, name: '图例1',
//                 },
//                 { value: 310, name: '图例2' },
//                 { value: 234, name: '图例3' },
//                 { value: 135, name: '图例4' },
//             ]
//         },
//     ]
// }
// loadBalance.on('mouseover', function (params) {
//     loadBalanceOption.graphic.elements[0].style.text = [params.percent + '%']
//     loadBalance.setOption(loadBalanceOption);
// });
// loadBalance.on('mouseout', function (p) {
//     loadBalanceOption.graphic.elements[0].style.text = ['']
//     loadBalance.setOption(loadBalanceOption);
// })
// loadBalance.setOption(loadBalanceOption);

// // CPU使用率
// function setCPU(usage) {
    var gaugeCpu = echarts.init(document.getElementById('gauge-cpu'));
    var gaugeCpuOption = {
        series: [
            {
                type: 'gauge',
                radius: 90,
                detail: {
                    formatter: '{value}%',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    color: '#FFFF00',
                    fontSize: 34,
                    padding: [10, 5, 0, 5]
                },
                data: [
                    {
                        value: 0
                    }
                ],
                axisLine: {
                    lineStyle: {
                        color: [[0.2, '#6ED1A8'], [0.8, '#4273A3'], [1, '#E11300']],
                        shadowColor: 'rgba(0, 255, 255, 0.8)',
                        shadowBlur: 20
                    },
                },
                axisLabel: {
                    color: '#ffffff',
                    fontSize: 16,
                    formatter: '{value}%'
                },
                itemStyle: {
                    color: '#00FFFF',
                    shadowColor: 'rgba(0, 255, 255, 0.5)',
                    shadowBlur: 10
                }
            }
        ]
    }
    // gaugeCpuOption.series[0].data[0].value = usage;
    gaugeCpu.setOption(gaugeCpuOption);
// }

// // 内存使用率
// function setMemory(usage) {
    var gaugeMemory = echarts.init(document.getElementById('gauge-memory'));
    var gaugeMemoryOption = {
        series: [
            {
                type: 'gauge',
                radius: 90,
                detail: {
                    formatter: '{value}%',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    color: '#FFFF00',
                    fontSize: 34,
                    padding: [10, 5, 0, 5]
                },
                data: [
                    {
                        value: 46
                    }
                ],
                axisLine: {
                    lineStyle: {
                        color: [[0.2, '#6ED1A8'], [0.8, '#4273A3'], [1, '#E11300']],
                        shadowColor: 'rgba(0, 255, 255, 0.8)',
                        shadowBlur: 20
                    },
                },
                axisLabel: {
                    color: '#ffffff',
                    fontSize: 16,
                    formatter: '{value}%'
                },
                itemStyle: {
                    color: '#00FFFF',
                    shadowColor: 'rgba(0, 255, 255, 0.5)',
                    shadowBlur: 10
                }
            }
        ]
    }
    // gaugeMemoryOption.series[0].data[0].value = usage;
    gaugeMemory.setOption(gaugeMemoryOption);

// }

// // 磁盘使用率
// function setDisk(usage) {
    var gaugeDisk = echarts.init(document.getElementById('gauge-disk'));
    var gaugeDiskOption = {
        series: [
            {
                type: 'gauge',
                radius: 90,
                detail: {
                    formatter: '{value}%',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    color: '#FFFF00',
                    fontSize: 34,
                    padding: [10, 5, 0, 5]
                },
                data: [
                    {
                        value: 39
                    }
                ],
                axisLine: {
                    lineStyle: {
                        color: [[0.2, '#6ED1A8'], [0.8, '#4273A3'], [1, '#E11300']],
                        shadowColor: 'rgba(0, 255, 255, 0.8)',
                        shadowBlur: 20
                    },
                },
                axisLabel: {
                    color: '#ffffff',
                    fontSize: 16,
                    formatter: '{value}%'
                },
                itemStyle: {
                    color: '#00FFFF',
                    shadowColor: 'rgba(0, 255, 255, 0.5)',
                    shadowBlur: 10
                }
            }
        ]
    }
    // gaugeDiskOption.series[0].data[0].value = usage;
    gaugeDisk.setOption(gaugeDiskOption);
// }

// 可用探测点使用率
var gaugePoint = echarts.init(document.getElementById('gauge-point'));
var gaugePointOption = {
    series: [
        {
            type: 'gauge',
            radius: 90,
            detail: {
                formatter: '{value}%',
                backgroundColor: 'rgba(0,0,0,0.3)',
                color: '#FFFF00',
                fontSize: 17,
                padding: [10, 5, 0, 5]
            },
            data: [
                {
                    value: 83
                }
            ],
            axisLine: {
                lineStyle: {
                    color: [[0.2, '#6ED1A8'], [0.8, '#4273A3'], [1, '#E11300']],
                    shadowColor: 'rgba(0, 255, 255, 0.8)',
                    shadowBlur: 20
                },
            },
            axisLabel: {
                color: '#ffffff',
                fontSize: 16,
                formatter: '{value}%'
            },
            itemStyle: {
                color: '#00FFFF',
                shadowColor: 'rgba(0, 255, 255, 0.5)',
                shadowBlur: 10
            }
        }
    ]
}
gaugePoint.setOption(gaugePointOption);

// 政务云计算情况
(function () {
    var chart = echarts.init(document.getElementById('govChart'));
    var option = {
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390, 330, 220]
            }
        ]
    };
    chart.setOption(option);
})()