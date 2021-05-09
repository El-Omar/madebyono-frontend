import styled from 'styled-components';
import { Svgs, Colors } from '../variables';

export const Container = styled.section`
  position: relative;

  &.no-scroll {
    height: 100vh;
    overflow: hidden;
  }

  .logo {
    font-family: Lato;
    font-weight: bold;
    font-size: 32px;
    text-transform: lowercase;

    &--footer {
      font-size: 14px;
      text-transform: none;
      /* display: inline-block; */
      /* margin-right: 10px; */
    }
  }

  .page__header {
    width: 100%;
    height: 80px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 201;
  }

  .page__nav {
    width: 100%;
    padding-top: 80px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 200;
    overflow: hidden;
    background: white;
    transition: all .65s cubic-bezier(.59,.01,.28,1);
    transform: translateY(-100%);
    transform-origin: top center;

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

  .page__nav__list {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
  }


  .navigation__link {
    font-size: 26px;
    font-family: Montserrat;
    margin: 10px 0;
    overflow: hidden;
    
    a {
      text-decoration: none;
    }

    span {
      transition: all 480ms ease-in-out;    
    }
    
    .link-title {
      display: inline-block;
      margin-right: 2px;
      text-align: right;
    }
    
    &.page__link-projects {
  
      .link-title, .page-name {
        transform: translateX(-123px);
        width: 123px;
      }
    }

    &.page__link-we-are {

      .link-title, .page-name {
        transform: translateX(-109px);
        width: 109px;
      }
    }
    
    &.page__link-shop {

      .link-title, .page-name {
        transform: translateX(-87px);
        width: 87px;
      }
    }
    
    &.page__link-blog {

      .link-title, .page-name {
        transform: translateX(-94px);
        width: 94px;
      }
    }
    
    &.page__link-blog {

      .link-title, .page-name {
        transform: translateX(-108px);
        width: 108px;
      }
    }
    
    &.page__link-contact {

      .link-title, .page-name {
        transform: translateX(-108px);
        width: 108px;
      }
    }

    .page-name {
      display: inline-block;
    }

    .link-wrap {
      display: inline-block;
      width: 100%;
      
      &:hover {

        @media all and (min-width: 768px) {

          .page-name, .link-title {
            transform: translateX(0);
          }
        }

        .page-name {
          color: #222;
        }
      }
    }
  }

  .info-label {
    font-size: 20px;
    font-family: Montserrat;
    margin: 10px;
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

  // -- COLORS
  .color {
    &--rose { color: ${Colors.rose}; }
    &--blue { color: ${Colors.blue}; }
    &--purple { color: ${Colors.purple}; }
    &--yellow { color: ${Colors.yellow}; }
    &--gray { color: ${Colors.gray}; }
  }
`;