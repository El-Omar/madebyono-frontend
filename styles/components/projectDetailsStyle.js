import styled from 'styled-components';
import { Colors } from '../variables';

export const Styles = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;

  .project__content {
    position: relative;
    width: 40%;
    padding: 40px 20px;
    background: white;
    display: flex;
    flex-flow: column;
    justify-content: center;

    &-title {
      margin-top: 30px;
      font-size: 40px;
      font-family: Lato;
      margin-bottom: 10px;
    }

    &-type {
      font-size: 20px;
      font-family: Lato;
    }

    &-desc {
      font-family: Montserrat;
      font-size: 16px;
      margin: 20px 0;
      line-height: 26px;
    }

    &-link {
      display: block;
      width: 120px;
      height: 40px;
      text-decoration: none;
      background: ${ Colors.blue };
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      font-size: 18px;
      font-family: Montserrat;
      margin: 30px 0;
      font-weight: 600;
      cursor: pointer;
      
      &:hover {
        cursor: pointer;
        background: black;
      }
    }
  }

  .back-arrow {
    position: absolute;
    top: 35px;
    text-decoration: none;
    font-family: Lato;
    background: white;
    border-bottom: 2px solid black;
  }

  .project__images {
    width: 60%;
    min-height: 60vh;
    background: #ccc;
    display: flex;
    flex-flow: column;
    align-items: center;

    .slider__controllers {
      z-index: 5;
      position: absolute;
      width: 100%;
      top: 50%;
      display: flex;
      justify-content: space-between;
      padding: 10px;
      
      &__next, &__previous {
        /* font-size: 24px; */
        display: block;
        width: 20px;
        height: 30px;
        border: 16px solid transparent;
        user-select: none;
        cursor: pointer;
      }

      &__previous {
        border-left-color: black;
      }

      &__next {
        border-right-color: black;
      }
    }

    .slider__wrap {
      width: 100%;
      height: 100%;
      min-height: 60vh;
      position: relative;
      overflow: hidden;
    }

    .slide {
      width: 100%;
      height: 100%;
      min-height: 60vh;
      position: absolute;
      transition: opacity .4s ease;
      opacity: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      
      &-active {
        opacity: 1;
      }
    }

    .slide__img {
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    .slider__dots {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 3%;
      display: none;
    }

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin: 0 6px;
      user-select: none;
      cursor: pointer;
      background: black;

      &-active {
        width: 8px;
        height: 8px;
        background: ${Colors.blue};
      }
    }

  }

  @media all and (max-width: 900px) {
    flex-flow: column;

    .slider__dots {
      bottom: -6% !important;
      display: flex !important;
    }

    .project__images {
      width: 100%;
      height: 100%;
      position: relative;
    }

    .project__content {
      width: 100%;
      padding: 20px;
      height: 60%;
      max-height: none;

      &-title {
        font-size: 35px;
      }

      &-desc {
        margin: 12px 0;
        font-size: 14px;
      }

      &-link {
        margin: 15px 0;
      }
    }

    .back-arrow {
      top: 20px;
      padding: 5px 20px;
      left: 0;
      border: none;
    }
  }

  @media all and (max-width: 600px) {

    .project__images .slide__img {
      /* min-height: auto; */
      /* width: 80%; */
      /* height: auto; */
    }

    .project__content {
      /* max-height: none; */
      /* height: 80%; */
    }
  }
`;