import styled from 'styled-components'

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 1170px) {
    display: block;
    .container {
      margin-top: -1rem;
      /* background: var(--white); */
      background: var(--primary-600);
      min-height: calc(100vh - 1rem);
      height: 100%;
      width: 250px;
      box-shadow: var(--shadow-2);
    }
    .nav-links {
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
    }

    .nav-link {
      display: flex;
      align-items: center;
      padding: 1.25rem 0;
      padding-left: 1.75rem;
      text-transform: capitalize;
      /* color: var(--primary-500); */
      color: var(--grey-500);
      transition: var(--transition);
      :hover {
        background: var(--grey-300);
        color: var(--primary-700);
        padding-left: 3rem;
      }
    }

    .icon {
      margin-right: 0.95rem;
      font-size: 1.5rem;
    }

    .active {
      color: var(--white);
      font-weight: 500;
      font-size: 1.57rem;
    }
  } ;
`

export default Wrapper