import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import LogoBA from '../../../assets/img/Logo_BinoAktiv.svg';
import { logOutUser } from "../../../redux/actions";

const MenuItems = [
  {
    label: 'Statistikk',
    to: 'statistikk'
  },
  {
    label: 'Registrer aktivitet',
    to: 'aktivitet'
  },
  {
    label: 'Teams',
    to: 'teams'
  },
  {
    label: 'Tips til aktiviteter',
    to: 'tips'
  },
  {
    label: 'Profil',
    to: 'profile'
  },

];

const Menu = ({ open }) => {
  const dispatch = useDispatch();
  const loggedUser = localStorage.getItem('user_id');

  return (
    <Style open={open}>
      <Link to={'/'}>
        <div className="logo-mobil">
          <img src={LogoBA} alt="Logo Bino Aktiv" />
        </div>
      </Link>
      <ul>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.to} className="menu-item">
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          {loggedUser ? <Link className="menu-item" onClick={() => { dispatch(logOutUser()) }}>Logg out</Link>
            : <Link className="menu-item" to={'/'}>Logg inn</Link>}
        </li>

      </ul>
    </Style >
  );
}

export default Menu;

const Style = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  background: ${({ theme }) => theme.primaryColor};
  text-align: center;
  position: absolute;
  top: 250px;
  right: 0px;
  height: 75vh;
  padding-top: 50px;
  padding-bottom: 50px;
  transition: transform 0.3s ease-in-out,opacity 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%) translateY(0)'};
  opacity: ${({ open }) => open ? '1' : '0'};
  display: ${({ open }) => open ? 'flex' : 'none'};
  z-index: 10;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    padding-top: 50px;
  }

  li {
    margin-bottom: 35px;
  }

  a {
    font-size: 20px !important;
    font-weight: bold;
    color: white;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.primaryLight};
    }
  }

  .logo-mobil {
    display: none;
  }

  @media only screen and (max-width: 991px) {
    width: 100%;
    top: 0px;
    height: auto;
    padding-top: 25px;
    li {
      margin-bottom: 50px;
    }
    .logo-mobil {
      display: block;
      text-align: left;
      padding-left: 25px;
      img {
        max-width: 250px;
      }
    }
  }

  @media only screen and (max-width: 575px) {
    .logo-mobil {
      img {
        max-width: 50%;
      }
    }
  }

`
