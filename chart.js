google.load('visualization', '1', {
    packages: ['corechart']
});
google.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'P1');

    data.addRows([
        [0, 0], [1, totalPoints[0]], [2, totalPoints[1]],
        [3, totalPoints[2]], [4, totalPoints[3]], [5,totalPoints[4]],
        [6,totalPoints[5]], [7,totalPoints[6]], [8,totalPoints[7]]

      ]);

    var options = {
        width: 600,
        height: 600,
        hAxis: {
            title: 'Round',
            logScale: false
        },
        vAxis: {
            title: 'Score',
            logScale: false
        },
        colors: ['#ff4444']
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart'));

    chart.draw(data, options);
}