import styled from 'styled-components'

const Wrapper = styled.nav`
  background: var(--primary-600);
  height: var(--nav-height);
  box-shadow: var(--shadow-2);
  color: var(--grey-500);
  display: flex;
  justify-content: center;

  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90vw;
  }

  .toggle-btn,
  .setting {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--grey-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .btn-container {
    position: relative;
  }

  .setting {
    position: relative;
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: -40px;
    background: var(--primary-200);
    visibility: hidden;
    text-align: center;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-2);
  }

  .show-dropdown {
    visibility: visible;
  }

  .dropdown-btn {
    border-color: transparent;
    background: transparent;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--primary-900);
    cursor: pointer;
  }

  @media (min-width: 1170px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
  } ;
`

export default Wrapper
