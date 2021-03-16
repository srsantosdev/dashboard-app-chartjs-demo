import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 8rem;

  background: #802392;

  > div {
    max-width: 980px;
    margin: 0 auto;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > h1 {
      color: #fffcf9;
      font-weight: 500;
      font-size: 2.4rem;
    }

    > nav {
      display: flex;
      gap: 2.4rem;

      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
`;
