// Simulasi Data IoT (SHT31 & LDR)
const timeLabels = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00'];
const sht31Data = [25.5, 26.0, 27.2, 28.5, 29.1, 28.8, 28.0];
const ldrData = [300, 450, 600, 800, 950, 500, 150];

const ctx = document.getElementById('sensorChart').getContext('2d');
let sensorChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: timeLabels,
        datasets: [
            {
                label: 'Suhu SHT31 (°C)',
                data: sht31Data,
                borderColor: '#dc3545',
                backgroundColor: 'transparent',
                borderWidth: 2,
                tension: 0.1
            },
            {
                label: 'Cahaya LDR (Lux)',
                data: ldrData,
                borderColor: '#ffc107',
                backgroundColor: 'transparent',
                borderWidth: 2,
                tension: 0.1
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'top' },
            // Details on Demand diterapkan di tooltip interaktif
            tooltip: { 
                mode: 'index', 
                intersect: false 
            } 
        },
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Implementasi Zoom & Filter
document.getElementById('sensor-select').addEventListener('change', (e) => {
    const selected = e.target.value;
    
    if (selected === 'all') {
        sensorChart.data.datasets[0].hidden = false;
        sensorChart.data.datasets[1].hidden = false;
    } else if (selected === 'sht31') {
        sensorChart.data.datasets[0].hidden = false;
        sensorChart.data.datasets[1].hidden = true;
    } else if (selected === 'ldr') {
        sensorChart.data.datasets[0].hidden = true;
        sensorChart.data.datasets[1].hidden = false;
    }
    sensorChart.update();
});
