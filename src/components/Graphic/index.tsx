import React, { useEffect, useMemo, useRef } from 'react';
import Chart from 'chart.js';

import { Container } from './styles';
import randomRGBColor from '../../util/randomRGBColors';

type Data = {
  label: string;
  value: number;
};

type GraphicProps = {
  type: 'line' | 'pie' | 'polarArea' | 'bar';
  title?: string | Chart.ChartTitleOptions;
  labels?: string[];
  datasets?: Chart.ChartDataSets[];
  datasetLabel?: string;
  data?: Data[];
  options?: Chart.ChartOptions;
};

const Graphic: React.FC<GraphicProps> = ({
  type,
  options,
  labels,
  data,
  datasetLabel,
  title,
  datasets,
}) => {
  const graphicCanvasRef = useRef<HTMLCanvasElement>(null);

  const chartData: Chart.ChartData = useMemo(() => {
    if (datasets) {
      return {
        labels,
        datasets,
      };
    }

    if (data) {
      const datalabels = data.map(({ label }) => label);
      const dataValue = data.map(({ value }) => value);

      const colors = Array.from({
        length: dataValue.length,
      }).map(() => randomRGBColor());

      const backgroundColors = colors.map(({ background }) => background);
      const borderColors = colors.map(({ border }) => border);
      const hoverBackgroundColors = colors.map(
        ({ hoverBackground }) => hoverBackground,
      );
      const hoverBorderColors = colors.map(({ hoverBorder }) => hoverBorder);

      return {
        labels: datalabels,
        datasets: [
          {
            label: datasetLabel,
            data: dataValue,
            borderWidth: 2,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            hoverBackgroundColor: hoverBackgroundColors,
            hoverBorderColor: hoverBorderColors,
          },
        ],
      };
    }

    return {};
  }, [data, datasetLabel, datasets, labels]);

  const chartOptions: Chart.ChartOptions = useMemo(() => {
    const isString = typeof title === 'string';

    return {
      title: isString
        ? { display: !!title, text: isString ? String(title) : undefined }
        : (title as Chart.ChartTitleOptions),
      responsive: true,
      ...options,
    };
  }, [options, title]);

  useEffect(() => {
    if (graphicCanvasRef.current) {
      new Chart(graphicCanvasRef.current, {
        type,
        data: chartData,
        options: chartOptions,
      });
    }
  }, [type, chartData, chartOptions]);

  return (
    <Container>
      <canvas ref={graphicCanvasRef} />
    </Container>
  );
};

export default Graphic;
