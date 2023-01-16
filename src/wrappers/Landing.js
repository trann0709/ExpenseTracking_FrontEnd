import styled from 'styled-components'

const Wrapper = styled.main`
  p {
    margin: 2rem auto;
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
