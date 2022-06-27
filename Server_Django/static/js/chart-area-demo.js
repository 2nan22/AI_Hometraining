// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var line_chart = line_chart
var line_chart_ = line_chart.slice(1, -1)
var line_chart_ = line_chart_.split(',').map(function(item) {
  return parseInt(item, 10);
});
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["5%", "10%",  "15%", "20%", "25%", "30%", "35%", "40%",  "45%", "50%",  "55%", "60%",  "65%", "70%",  "75%", "80%",  "85%", "90%",  "95%", "100%"],
    datasets: [{
      label: "Progress(%)",
      lineTension: 0.3,
      backgroundColor: "rgba(43,63,107,0.2)",
      borderColor: "rgba(43,63,107,1)",
      pointRadius: 4,
      pointBackgroundColor: "rgba(43,63,107,1)",
      pointBorderColor: "rgba(43,63,107,0.2)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(43,63,107,1)",
      pointHitRadius: 50,
      pointBorderWidth: 1,
      data : line_chart_
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'minute'
        },
        gridLines: {
          display: true
        },
        ticks: {
          maxTicksLimit: 20
        }
      }],
      yAxes: [{
        ticks: {
          min : 0,
          max: 100,
          maxTicksLimit: 10
        },
        gridLines: {
          color: "rgba(43,63,107,1)",
        }
      }],
    },
    legend: {
      display: true
    }
  }
});
