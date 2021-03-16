import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.section`
  width: 100%;
  max-width: 980px;
  margin: 2.4rem auto 0;

  > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    gap: 2.4rem;
  }
`;

export const Graphic = styled.div`
  width: 100%;
  background-color: #fff;

  padding: 1.6rem;
  border-radius: 1rem;
`;

export const GraphicCanvas = styled.canvas``;
