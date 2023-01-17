import { BsBarChartSteps } from 'react-icons/bs'
import { MdOutlineLibraryAdd } from 'react-icons/md'
import { FiHome } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'

const links = [
  {
    id: 1,
    text: 'home',
    path: '/',
    icon: <FiHome />,
  },
  {
    id: 2,
    text: 'all expenses',
    path: 'all-expenses',
    icon: <BsBarChartSteps />,
  },
  {
    id: 3,
    text: 'add expense',
    path: 'add-expense',
    icon: <MdOutlineLibraryAdd />,
  },
  {
    id: 4,
    text: 'profile',
    path: 'profile',
    icon: <CgProfile />,
  },
]

export default links
