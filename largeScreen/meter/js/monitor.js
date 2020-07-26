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
                fontSize: 18,
                padding: [10, 5, 0, 5]
            },
            data: [
                {
                    value: 0
                }
            ],
            pointer: {
                width: 4,//指针的宽度
                length: "70%", //指针长度，按照半圆半径的百分比
                shadowColor: '#ccc', //默认透明
                shadowBlur: 5
            },
            splitLine: {//分割线
                length: 15,//分割线线长
            },
            axisLine: {
                lineStyle: {
                    color: [[0.2, '#6ED1A8'], [0.8, '#4273A3'], [1, '#E11300']],
                    shadowColor: 'rgba(0, 255, 255, 0.8)',
                    shadowBlur: 20,
                    width: 15 //仪表盘圆弧宽窄
                },
            },
            axisLabel: {
                color: '#ffffff',
                fontSize: 16,
                formatter: '{value}%',
                textStyle: {       // 属性lineStyle控制线条样式
                    color: '#fff',
                    fontSize: 9,   //改变仪表盘内刻度数字的大小
                    shadowColor: '#fff', //默认透明
                }
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
                fontSize: 18,
                padding: [10, 5, 0, 5]
            },
            data: [
                {
                    value: 46
                }
            ],
            pointer: {
                width: 4,//指针的宽度
                length: "70%", //指针长度，按照半圆半径的百分比
                shadowColor: '#ccc', //默认透明
                shadowBlur: 5
            },
            splitLine: {//分割线
                length: 15,//分割线线长
            },
            axisLine: {
                lineStyle: {
                    color: [[0.2, '#6ED1A8'], [0.8, '#4273A3'], [1, '#E11300']],
                    shadowColor: 'rgba(0, 255, 255, 0.8)',
                    shadowBlur: 20,
                    width: 15 //仪表盘圆弧宽窄
                },
            },
            axisLabel: {
                color: '#ffffff',
                fontSize: 16,
                formatter: '{value}%',
                textStyle: {       // 属性lineStyle控制线条样式
                    color: '#fff',
                    fontSize: 9,   //改变仪表盘内刻度数字的大小
                    shadowColor: '#fff', //默认透明
                }
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
                fontSize: 18,
                padding: [10, 5, 0, 5]
            },
            data: [
                {
                    value: 39
                }
            ],
            pointer: {
                width: 4,//指针的宽度
                length: "70%", //指针长度，按照半圆半径的百分比
                shadowColor: '#ccc', //默认透明
                shadowBlur: 5
            },
            splitLine: {//分割线
                length: 15,//分割线线长
            },
            axisLine: {
                lineStyle: {
                    color: [[0.2, '#6ED1A8'], [0.8, '#4273A3'], [1, '#E11300']],
                    shadowColor: 'rgba(0, 255, 255, 0.8)',
                    shadowBlur: 20,
                    width: 15 //仪表盘圆弧宽窄
                },
            },
            axisLabel: {
                color: '#ffffff',
                fontSize: 16,
                formatter: '{value}%',
                textStyle: {       // 属性lineStyle控制线条样式
                    color: '#fff',
                    fontSize: 9,   //改变仪表盘内刻度数字的大小
                    shadowColor: '#fff', //默认透明
                }
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

// 宽带使用率
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
                fontSize: 18,
                padding: [10, 5, 0, 5]
            },
            data: [
                {
                    value: 83
                }
            ],
            pointer: {
                width: 4,//指针的宽度
                length: "70%", //指针长度，按照半圆半径的百分比
                shadowColor: '#ccc', //默认透明
                shadowBlur: 5
            },
            splitLine: {//分割线
                length: 15,//分割线线长
            },
            axisLine: {
                lineStyle: {
                    color: [[0.2, '#6ED1A8'], [0.8, '#4273A3'], [1, '#E11300']],
                    shadowColor: 'rgba(0, 255, 255, 0.8)',
                    shadowBlur: 20,
                    width: 15 //仪表盘圆弧宽窄
                },

            },
            axisLabel: {
                color: '#ffffff',
                fontSize: 16,
                formatter: '{value}%',
                textStyle: {       // 属性lineStyle控制线条样式
                    color: '#fff',
                    fontSize: 9,   //改变仪表盘内刻度数字的大小
                    shadowColor: '#fff', //默认透明
                }
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
        title: {
            subtext: '单位:万元',
            subtextStyle: {
                color: '#839bb7',
                fontSize: '14px',
            },
            left: 20,
            top: -10
        },
        // color: ['#00ffff'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            // formatter:"{b0}<br />{c0}万元",  
            formatter: function (params) {
                var result = ''
                params.forEach(function (item) {
                    result += item.axisValue + "</br>" + item.marker + item.data + '万元'
                })
                return result
            },
            //     backgroundColor:"transparent",            //标题背景色
            borderColor: "#ccc",                        //边框颜色
            borderWidth: 1,                              //边框线宽

        },
        grid: {
            top: '17%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        legend: {
            right: 10,
            top: 0,
            data: [
                {
                    name: '按月',
                    textStyle: {
                        color: '#FF8C00',
                        fontSize: 16,
                    },
                },
                {
                    name: '按季度',
                    textStyle: {
                        color: '#00FFFF',
                        fontSize: 16,
                        fontWeight: 'bold',
                    },
                }
            ]
        },
        xAxis: [
            {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    lineStyle: {
                        color: '#00FFFF',
                    }
                },
                axisLabel: {
                    color: '#a8c2dc',
                    fontSize: 16
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitNumber: 5,
                axisLine: {
                    lineStyle: {
                        color: '#00FFFF',
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: '#a8c2dc',
                    }
                },
                axisLabel: {
                    color: '#B8D4EF',
                    fontSize: 16,
                }
            }
        ],
        series: [
            {
                itemStyle: {
                    normal: {
                        //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                        color: function (params) {
                            var colorList = ['#00ffff', '#ffff00'];
                            return colorList[params.dataIndex % 2];
                        }
                    },

                },
                name: '按月',
                type: 'bar',
                barWidth: '60%',
                data: [180, 210, 170, 145, 190, 160, 130, 90, 60, 30, 60, 30]
            },
            // {
            //     name: '按季度',
            //     type: 'bar',
            //     barWidth: '60%',
            //     data: [10, 52, 200, 34, 90,100, 220,180, 210, 170, 145, 190,]
            // }
        ]
    };
    chart.setOption(option);
})()

// cpu使用率
function setCPU(usage) {
    var resourceCPU = echarts.init(document.getElementById('resource-cpu'));
    var resourceCPUOption = {
        series: [{
            type: 'gauge',
            radius: 50,
            startAngel: 120,
            endAngel: 60,
            center: ['50%', '50%'],
            splitLine: {
                show: false
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [[1, '#015293']],
                    width: 10,
                }
            },
            axisLabel: {
                show: false,
            },
            pointer: {
                show: false,
            },
            detail: {
                show: true,
                offsetCenter: [0, 0],
                formatter: '{value}%',
                textStyle: {
                    fontSize: 28,
                    color: '#ffff00'
                },
            },
            data: [{
                value: 0,
                // name: '存储量'
            }]
        }]
    }
    resourceCPU.setOption(resourceCPUOption);
    resourceCPUOption.series[0].data[0].value = Math.round(usage * 100);
    resourceCPUOption.series[0].axisLine.lineStyle.color = [[usage, '#00ffff'], [1, '#015293']]
    resourceCPU.setOption(resourceCPUOption);
}
setCPU(0.8)
//硬盘使用率
function setHardDisk(usage) {
    var resourceHardDisk = echarts.init(document.getElementById('resource-hardDisk'));
    var resourceHardDiskOption = {
        series: [{
            type: 'gauge',
            radius: 50,
            startAngel: 120,
            endAngel: 60,
            center: ['50%', '50%'],
            splitLine: {
                show: false
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [[1, '#015293']],
                    width: 10,
                }
            },
            axisLabel: {
                show: false,
            },
            pointer: {
                show: false,
            },
            detail: {
                show: true,
                offsetCenter: [0, 0],
                formatter: '{value}%',
                textStyle: {
                    fontSize: 28,
                    color: '#ffff00'
                },
            },
            data: [{
                value: 0,
                // name: '存储量'
            }]
        }]
    }
    resourceHardDisk.setOption(resourceHardDiskOption);
    resourceHardDiskOption.series[0].data[0].value = Math.round(usage * 100);
    resourceHardDiskOption.series[0].axisLine.lineStyle.color = [[usage, '#00ffff'], [1, '#015293']]
    resourceHardDisk.setOption(resourceHardDiskOption);
}
setHardDisk(0.7)
//硬盘使用率
function setMemory(usage) {
    var resourceMemory = echarts.init(document.getElementById('resource-memory'));
    var resourceMemoryOption = {
        series: [{
            type: 'gauge',
            radius: 50,
            startAngel: 120,
            endAngel: 60,
            center: ['50%', '50%'],
            splitLine: {
                show: false
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [[1, '#015293']],
                    width: 10,
                }
            },
            axisLabel: {
                show: false,
            },
            pointer: {
                show: false,
            },
            detail: {
                show: true,
                offsetCenter: [0, 0],
                formatter: '{value}%',
                textStyle: {
                    fontSize: 28,
                    color: '#ffff00'
                },
            },
            data: [{
                value: 0,
                // name: '存储量'
            }]
        }]
    }
    resourceMemory.setOption(resourceMemoryOption);
    resourceMemoryOption.series[0].data[0].value = Math.round(usage * 100);
    resourceMemoryOption.series[0].axisLine.lineStyle.color = [[usage, '#00ffff'], [1, '#015293']]
    resourceMemory.setOption(resourceMemoryOption);
}
setMemory(0.6)
//带宽使用率
function setBandwidth(usage) {
    var resourceBandwidth = echarts.init(document.getElementById('resource-bandwidth'));
    var resourceBandwidthOption = {
        series: [{
            type: 'gauge',
            radius: 50,
            startAngel: 120,
            endAngel: 60,
            center: ['50%', '50%'],
            splitLine: {
                show: false
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [[1, '#015293']],
                    width: 10,
                }
            },
            axisLabel: {
                show: false,
            },
            pointer: {
                show: false,
            },
            detail: {
                show: true,
                offsetCenter: [0, 0],
                formatter: '{value}%',
                textStyle: {
                    fontSize: 28,
                    color: '#ffff00'
                },
            },
            data: [{
                value: 0,
                // name: '存储量'
            }]
        }]
    }
    resourceBandwidth.setOption(resourceBandwidthOption);
    resourceBandwidthOption.series[0].data[0].value = Math.round(usage * 100);
    resourceBandwidthOption.series[0].axisLine.lineStyle.color = [[usage, '#00ffff'], [1, '#015293']]
    resourceBandwidth.setOption(resourceBandwidthOption);
}
setBandwidth(0.5)


function setBar(data, barColor, barName) {
    var resourceBandwidth = echarts.init(document.getElementById(barName));
    var option = {
        grid: {
            left: '5%',
            right: '-5%',
            bottom: '5%',
            top: '25%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function (params) {
                return params[0].name + '<br/>' +
                    "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                    params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() + ' 万元<br/>'
            }
        },
        backgroundColor: 'rgba(20,28,52,0)',
        xAxis: {
            show: false,
            type: 'value'
        },
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                },
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            data: ['']
        }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: false,
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '12'
                },
                formatter: function (value) {
                    if (value >= 10000) {
                        return (value / 10000).toLocaleString() + '万';
                    } else {
                        return value.toLocaleString();
                    }
                },
            },
            data: [50000000]
        }],
        series: [{
            name: '金额',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: barColor,
                    // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    //     offset: 0,
                    //     color: 'rgb(57,89,255,1)'
                    // }, {
                    //     offset: 1,
                    //     color: 'rgb(46,200,207,1)'
                    // }]),
                },
            },
            barWidth: 10,
            data: [data]
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 10,
            barGap: '-100%',
            data: [120],
            itemStyle: {
                normal: {
                    color: '#015293',
                    barBorderRadius: 15,
                }
            },
        },
        ]
    };
    resourceBandwidth.setOption(option);
}
setBar(100, 'red', 'bar1')
setBar(100, '#00ffff', 'bar2')
setBar(100, '#00ffff', 'bar3')
setBar(100, '#00ffff', 'bar4')