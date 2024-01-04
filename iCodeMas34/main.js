const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Blue", "Red", "Green", "Pink", "Purple", "Orange"],
    datasets: [
      {
        label: ["Visitors per day"],
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    resonsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
