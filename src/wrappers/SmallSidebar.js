import styled from 'styled-components'

const Wrapper = styled.aside`
  .container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
  }
  /* .show-sidebar {
    opacity: 1;
    z-index: 99;
  } */
  .content {
    background: var(--grey-200);
    height: 70vh;
    width: 80vw;
    max-width: 400px;
    border-radius: var(--radius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .close-btn {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0.75rem;
    border-color: transparent;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    color: var(--primary-800);
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    margin-top: 1.25rem;
  }

  .nav-link {
    display: flex;
    align-items: center;
    color: var(--primary-600);
    text-transform: capitalize;
    padding: 1.5rem 0;
    transition: var(--transition);
    :hover {
      transform: scale(1.2);
      padding-left: 0.75rem;
    }
  }

  .icon {
    font-size: 1.5rem;
    margin-right: 1.25rem;
    display: flex;
  }

  .active {
    color: var(--grey-900);
    font-weight: 500;
    font-size: 1.45rem;
  }

  @media (min-width: 1170px) {
    display: none;
  }
`
export default Wrapper
