var cht = document.getElementById("radar-chart");
var radar_chart = radar_chart
// var radar_chart_ = radar_chart.split(',')
// var radar_chart_ = Array.from(radar_chart_)
// console.log(radar_chart.split(",")[0])
var radar_chart_ = radar_chart.slice(1, -1)

var radar_chart_ = radar_chart_.split(",").map(function(item) {
  return parseInt(item, 10);
});

var myradarChart = new Chart(cht, {
    type: 'radar',
    data: {
      labels: ["Total_score", "Shoulder", "Arm", "Waist", "Leg"],
      datasets: [{
          label: "부위 별 점수",
          fill: true,
          backgroundColor: "rgba(43,63,107,0.2)",
          borderColor: "rgba(43,63,107,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(43,63,107,1)",
          pointBorderColor: "#fff",
          data : radar_chart_
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: '당신의 신체 부위별 점수를 바탕으로 HAIT가 분석한 결과입니다'
      },
      scale: {
          ticks: {
            beginAtZero: true,
            max: 100,
            min: 0,
            stepSize: 20
            },
            r: {
              angleLines: {
                  display: false
              },
              suggestedMin: 50,
              suggestedMax: 100
            },
        gridLines: {
            lineWidth: 1 
        }
      },
    }
});