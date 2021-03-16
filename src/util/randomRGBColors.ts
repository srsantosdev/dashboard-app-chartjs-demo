type RandomColor = {
  background: string;
  border: string;
  hoverBackground: string;
  hoverBorder: string;
};

export default function randomRGBColor(): RandomColor {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return {
    background: `rgba(${r},${g},${b}, ${0.3})`,
    border: `rgba(${r},${g},${b}, ${1})`,
    hoverBorder: `rgba(${r},${g},${b}, ${0.8})`,
    hoverBackground: `rgba(${r},${g},${b}, ${0.6})`,
  };
}
