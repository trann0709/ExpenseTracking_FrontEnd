import styled from 'styled-components'

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 1170px) {
    display: block;
    box-shadow: var(--shadow-2);
    .container {
      margin-top: -1rem;
      background: var(--primary-600);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      /* margin-left: -250px; */
      transition: var(--transition);
    }

    /* .content {
      position: sticky;
      top: 0;
    } */

    /* .show-sidebar {
      margin-left: 0;
    } */

    .nav-links {
      display: flex;
      flex-direction: column;
      padding-top: 2rem;
    }

    .nav-link {
      display: flex;
      align-items: center;
      padding: 1.2rem 0;
      padding-left: 1.5rem;
      text-transform: capitalize;
      color: var(--grey-500);
      transition: var(--transition);
      :hover {
        background: var(--grey-400);
        color: var(--primary-800);
        padding-left: 2.5rem;
      }
    }

    .icon {
      margin-right: 1rem;
      font-size: 1.5rem;
    }

    .active {
      color: var(--white);
      font-weight: 500;
      font-size: 1.55rem;
    }
  } ;
`

export default Wrapper
