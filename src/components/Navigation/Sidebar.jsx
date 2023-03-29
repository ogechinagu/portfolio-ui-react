import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AppRoutes } from '../../utils/Routes'
import {
  FaHome,
  FaUser,
  FaRegLightbulb,
  FaEnvelope,
  FaSuitcase,
  FaBars,
  FaClose,
} from 'react-icons/fa'
import { BsGear } from 'react-icons/bs'
import myLogo from '../../assets/images/my-logo-oi.png'
import './Sidebar.scss'

const Sidebar = () => {
  const [showNav, setShowNav] = React.useState(false)

  const navItems = [
    {
      name: 'Home',
      className: '',
      icon: <FaHome />,
      path: AppRoutes.home,
    },
    {
      name: 'About',
      className: 'about-link',
      icon: <FaUser />,
      path: AppRoutes.about,
    },
    {
      name: 'Skills',
      className: 'skills-link',
      icon: <BsGear />,
      path: AppRoutes.skills,
    },
    {
      name: 'Tips',
      className: 'tips-link',
      icon: <FaRegLightbulb />,
      path: AppRoutes.tips,
    },
    {
      name: 'My Work',
      className: 'mywork-link',
      icon: <FaSuitcase />,
      path: AppRoutes.mywork,
    },
    {
      name: 'Contact',
      className: 'contact-link',
      icon: <FaEnvelope />,
      path: AppRoutes.contact,
    },
  ]

  const smItems = [{}]

  return (
    <div className="nav-bar">
      <Link className="logo" to={AppRoutes.home}>
        <img src={myLogo} alt="logo" />
        <h6 className="logo-name">Ogechi Ikwunagu</h6>
      </Link>
      <nav>
        {navItems.map((item, index) => (
          <NavLink
            // exact="true"
            activeclassname="active"
            className={item.className}
            to={item.path}
            onClick={() => setShowNav(false)}
          >
            <span style={{ color: '#4d4d4e !important' }}>{item.icon}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
