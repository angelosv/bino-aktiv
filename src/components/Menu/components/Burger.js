import React from 'react';
import styled from 'styled-components';

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger
      open={open}
      onClick={ () => setOpen(!open) }
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger;


export const StyledBurger = styled.button`
  position: absolute;
  bottom: 75px;
  right: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: ${({ open }) => open ? '4rem' : '3rem'};
  height: ${({ open }) => open ? '4rem' : '3rem'};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 20;

  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 991px) {
    top: ${({ open }) => open ? '25px' : ''};
  }

  @media only screen and (max-width: 767px) {
    right: ${({ open }) => open ? '25px' : '50px'};
  }

  @media only screen and (max-width: 575px) {
    right: 25px;
    bottom: ${({ open }) => open ? '' : '25px'};

  }

  div {
    height: 0.4rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
      width: ${({ open }) => open ? '4rem' : '1.5rem'};
      margin-left: ${({ open }) => open ? '0rem' : '1.5rem'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      width: 3rem;
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      width: ${({ open }) => open ? '4rem' : '2rem'};
      margin-left: ${({ open }) => open ? '0rem' : '1rem'};
    }
  }
`;