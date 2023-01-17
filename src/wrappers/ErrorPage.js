import styled from 'styled-components'

const Wrapper = styled.main`
  .error-nav {
    max-width: var(--max-width);
    width: var(--fluid-width);
  }
  .error-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .error-btn {
    width: 50vw;
    max-width: 400px;
    margin: 2rem auto;
    display: block;
  }
  h3 {
    text-align: center;
    margin: 0.5rem;
  }
  .error-img {
    width: 90vw;
    max-width: 600px;
    margin-bottom: 2rem;
    margin-top: 1.5rem;
  }
`

export default Wrapper
