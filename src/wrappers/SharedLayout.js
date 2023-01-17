import styled from 'styled-components'

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
  }

  @media (min-width: 1170px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
  }
`

export default Wrapper
