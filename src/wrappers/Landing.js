import styled from 'styled-components'

const Wrapper = styled.main`
  nav {
    height: var(--nav-height);
    max-width: var(--max-width);
    margin: 0 auto;
    width: var(--fluid-width);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
    p {
      margin: 2rem auto;
    }
  }
  .image-container {
    display: none;
  }
  .info {
    text-align: center;
  }

  @media (min-width: 1170px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 1.5rem;
    }
    .image-container {
      display: block;
      position: relative;
      .main {
        height: 400px;
        transform: scaleX(-1);
        position: relative;
        margin-top: 15rem;
      }
      .accent {
        height: 220px;
        object-fit: contain;
        position: absolute;
        right: -45%;
        top: 15%;
      }
    }
  }
`
export default Wrapper
