import { Chart } from 'chart.js';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const BandCharts = () => {
  const state = useSelector((state) => state.socket);

  const { socket } = state;

  useEffect(() => {
    socket.on('list-bands', (bands) => {
      createGraph(bands);
    });
    return () => {
      socket.off('list-bands');
    };
  }, []);

  const createGraph = (bands = []) => {
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: bands.map((band) => band.name),
        datasets: [
          {
            label: '# of Votes',
            data: bands.map((band) => band.votes),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        animation: false,
        scales: {
          xAxes: [
            {
              ticks: {
                autoSkip: false,

                maxRotation: 0,
              },
            },
          ],
        },
      },
    });
  };

  return <canvas id="myChart"></canvas>;
};
