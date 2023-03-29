import React from 'react'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../../utils/Routes'

const Sidebar = () =>  (
    <div className='nav-bar'><Link className='logo' to={AppRoutes.home}>
    </Link></div>
  )


export default Sidebar