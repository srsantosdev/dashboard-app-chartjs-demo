import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';
import Header from '../../components/Header';
import GraphicComponent from '../../components/Graphic';

import { Container, Content, GraphicCanvas, Graphic } from './styles';

const Dashboard: React.FC = () => {
  const lineGraphicRef = useRef<HTMLCanvasElement>(null);
  const pieGraphicRef = useRef<HTMLCanvasElement>(null);
  const polarGraphicRef = useRef<HTMLCanvasElement>(null);
  const barGraphicRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (lineGraphicRef.current) {
      new Chart(lineGraphicRef.current, {
        type: 'line',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: 'índice',
              data: [0, 0, 0, 0, 0, 0],
              borderWidth: 2,
            },
            {
              label: 'índice',
              data: [1, 2, 4, 4, 8, 1],
              borderWidth: 2,
            },
          ],
        },
        options: {
          title: { display: true, text: 'Indice Geral' },
          legend: { display: false },
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  suggestedMax: 100,
                  beginAtZero: true,
                  stepSize: 20,
                },
              },
            ],
          },
        },
      });
    }
  }, []);

  useEffect(() => {
    if (pieGraphicRef.current) {
      new Chart(pieGraphicRef.current, {
        type: 'pie',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: 'Votos',
              data: [12, 19, 3, 5, 2, 3],
            },
          ],
        },
        options: {
          title: { display: true, text: 'Indice Geral' },
          legend: { display: false },
          responsive: true,
        },
      });
    }
  }, []);

  useEffect(() => {
    if (polarGraphicRef.current) {
      new Chart(polarGraphicRef.current, {
        type: 'polarArea',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: 'Votos',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 2,
            },
          ],
        },
        options: {
          title: { display: true, text: 'Indice Geral' },
          legend: { display: false },
          responsive: true,
          scale: {
            display: false,
          },
        },
      });
    }
  }, []);

  useEffect(() => {
    if (barGraphicRef.current) {
      new Chart(barGraphicRef.current, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: 'Votos',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 2,
            },
          ],
        },
        options: {
          title: { display: true, text: 'Indice Geral' },
          legend: { display: false },
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  suggestedMax: 100,
                  beginAtZero: true,
                  stepSize: 20,
                },
              },
            ],
          },
        },
      });
    }
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <div>
          <Graphic>
            <GraphicCanvas ref={lineGraphicRef} id="line" />
          </Graphic>

          <Graphic>
            <GraphicCanvas ref={pieGraphicRef} id="pie" />
          </Graphic>

          <Graphic>
            <GraphicCanvas ref={polarGraphicRef} id="polar" />
          </Graphic>

          <Graphic>
            <GraphicCanvas ref={barGraphicRef} id="bar" />
          </Graphic>

          <Graphic>
            <GraphicComponent
              type="line"
              data={[
                { label: 'Sei la 1', value: 10 },
                { label: 'Sei la 2', value: 30 },
                { label: 'Sei la 3', value: 30 },
                { label: 'Sei la 4', value: 84 },
                { label: 'Sei la 5', value: 19 },
              ]}
              options={{
                legend: { display: false },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        suggestedMax: 100,
                        beginAtZero: true,
                        stepSize: 20,
                      },
                    },
                  ],
                },
              }}
            />
          </Graphic>
        </div>
      </Content>
    </Container>
  );
};

export default Dashboard;
