//import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineRestaurant, MdDeliveryDining, MdReviews } from 'react-icons/md'
import { GoCommentDiscussion } from 'react-icons/go'
import { BsClockHistory } from 'react-icons/bs'
import { RiBillFill } from 'react-icons/ri'
import { AiFillSetting } from 'react-icons/ai'
import { Container } from './styles'

import logo from '../../assets/Logo.png'

export function Sidebar() {
  return (
    <Container>
      <div>
        <img src={logo} alt='menu' />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>
              <span>
                <MdOutlineRestaurant size={20} />
              </span>
              <p>Dashboard</p>
            </NavLink>
          </li>
          <li>
            <NavLink to='order'>
              <span>
                <MdDeliveryDining size={20} />
              </span>
              <p>Food Order</p>
            </NavLink>
          </li>
          <li>
            <NavLink to='favorite'>
              <span>
                <MdReviews size={20} />
              </span>
              <p>Favorite</p>
            </NavLink>
          </li>
          <li>
            <NavLink to='message'>
              <span>
                <GoCommentDiscussion size={20} />
              </span>
              <p>Message</p>
            </NavLink>
          </li>
          <li>
            <NavLink to='order-history'>
              <span>
                <BsClockHistory size={20} />
              </span>
              <p>Order History</p>
            </NavLink>
          </li>
          <li>
            <NavLink to='bills'>
              <span>
                <RiBillFill size={20} />
              </span>
              <p>Bills</p>
            </NavLink>
          </li>
          <li>
            <NavLink to='setting'>
              <span>
                <AiFillSetting size={20} />
              </span>
              <p>Setting</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
