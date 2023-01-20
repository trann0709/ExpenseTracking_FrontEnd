import styled from 'styled-components'

const Wrapper = styled.article`
  .btn-container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .clear-btn {
    border: 2px solid var(--primary-300);
    background: none;
    color: var(--grey-900);
    :hover {
      background: var(--primary-200);
    }
  }

  .clear-btn,
  .add-btn {
    text-transform: uppercase;
  }

  @media (min-width: 992px) {
    .btn-container {
      flex-direction: row;
    }
  }
`

export default Wrapper
