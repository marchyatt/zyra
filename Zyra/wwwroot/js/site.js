// Marc's champion chart
var ctx = document.getElementById("marcChart");
var marcChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Jynx", "Miss Fortune", "Ashe"],
        datasets: [{
            data: [10, 20, 15],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255, 159, 64, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    }
});

// Monica's champion chart
var ctx = document.getElementById("monChart");
var monChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Zyra", "Sona", "Udyr"],
        datasets: [{
            data: [20, 15, 10],
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    }
});