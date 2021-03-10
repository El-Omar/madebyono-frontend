import styled from 'styled-components';
import { Svgs } from '../variables';

export const Container = styled.section`
  position: relative;

  &.no-scroll {
    height: 100vh;
    overflow: hidden;
  }

  .page__header {
    width: 100%;
    height: 80px;
    position: relative;
    padding-top: 25px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 201;
  }

  .page__nav {
    display: flex;
    justify-content: space-around;
    width: 100%;
    background: white;
    z-index: 200;
    position: absolute;
    top: 0;
    left: 0;
    padding: 80px 20px 40px;
    transition: all .65s cubic-bezier(.59,.01,.28,1);
    transform: translateY(-100%);
    transform-origin: top center;
    opacity: 0;

    &.active {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .nav__btns {
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .cart__btn {
    width: 24px;
    height: 21px;
    margin-top: 12px;
    ${Svgs.cart(`#222222`)}
    border: none;
    outline: none;
    background-color: transparent; 
    cursor: pointer;
  }

  .user {
    font-weight: bold;
  }

  .body__overlay {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: black;
    opacity: 0;
    visibility: hidden;
    z-index: 100;
    transition: all 650ms ease 100ms;

    &.active {
      opacity: .65;
      visibility: visible;
    }
  }

  .scrollable__padding {
    width: 100%;
    height: 0;
    transition: all 750ms ease 200ms;
    
    &.active {
      height: 30vh;
    }
  }

`;