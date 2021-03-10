import styled from 'styled-components';
import { Colors } from "../variables";

const transitionDelay = (beginDelay = 0) => {
  let css = ``;

  for (let i = 0; i < 16; i++) {
    css += `&:nth-child(${i}) {
      transition-delay: ${beginDelay + (160 * i)}ms;
    }`;
  }

  return css;
}

export const Container = styled.div`
  background: white;

  .studio {

    &__container {
      margin-bottom: 150px;
      display: flex;
      position: relative;
      justify-content: center;
      padding-top: 60px;
    }

    &__video {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      min-height: 100%;
      width: 100%;
      height: auto;

      &__container {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      &__wrap {
        width: calc(100% - 40px);
        height: 80vh;
        background: #dbdbdb;
        margin-top: 70px;
        margin-left: 20px;
        margin-right: 20px;
        position: relative;
        overflow: hidden;
        transition: all .66s ease-in-out 200ms;
        opacity: 0;

        &.animated {
          opacity: 1;
        }
      }

      @media all and (max-width: 787px) {

        .studio__video {
          display: none;

          &__container {
            /* background: url(${require("../../assets/img/poster.jpg")}); */
            background-position: center;
            background-size: cover;
          }
        }
      }
    }

    &__details {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
    }

    /* &__hand {
      width: 380px;
      height: 400px;
      position: absolute;
      left: 0;
      top: 20px;
      background: url(${handImg}) no-repeat;
      background-size: 100% auto;
      z-index: -1;
    } */
  }

  .vision, .skills {
    /* width: 50%; */
    display: flex;
    flex-flow: column;
    align-items: center;

    &__title {
      color: ${Colors.yellow};
      font-size: 18px;
      font-family: Montserrat;
      font-weight: 600;
    }

    &__content {
      font-family: Montserrat;
      font-size: 16px;
      line-height: 26px;
      width: 100%;
      max-width: 500px;
      font-weight: normal;
      margin-top: 6px;

      & strong {
        font-weight: 600;
      }
    }
  }

  .skills__content__item {
    margin-bottom: 10px;
    transition: all .38s cubic-bezier(.59, .01, .28, 1);
    transform: translateY(60%);
    opacity: 0;
    ${transitionDelay(1600)};
    
    @media all and (max-width: 767px) {
      ${transitionDelay(600)};
    }

    &.animated {
      opacity: 1;
      transform: none;
    }
  }

  .vision {
    padding: 20px;

    &__header {
      width: 500px;
      transition: all .48s ease-in-out;
      transform: translateY(100%);
      opacity: 0;

      &.animated {
        opacity: 1;
        transform: none;
      }
    }

    &__content {
      transition: all .88s ease-in-out 400ms;
      transform: translateY(30%);
      opacity: 0;

      &.animated {
        opacity: 1;
        transform: none;
      }
    }
  }

  .skills {
    padding: 20px;
    align-items: flex-start;
    /* margin-left: 20px; */

    &__title {
      color: ${Colors.blue};
    }

    &__header {
      transition: all .68s ease-in-out 1400ms;
      transform: translateY(100%);
      opacity: 0;

      @media all and (max-width: 767px) {
        transition-delay: 400ms;
      }

      &.animated {
        opacity: 1;
        transform: none;
      }
    }

    &__content {
      text-align: left;
      width: auto;
      font-size: 20px;
    }
  }

  .passion {
    padding: 20px;

    &__title {
      color: ${Colors.purple};
      font-size: 18px;
      font-family: Montserrat;
      font-weight: 600;
    }

    &__header {
      transition: all .68s ease-in-out;
      transform: translateY(100%);
      opacity: 0;
      transition-delay: 3000ms;
      
      @media all and (max-width: 767px) {
        transition-delay: 2000ms;
      }

      &.animated {
        opacity: 1;
        transform: none;
      }
    }

    &__content {
      width: 390px;
      font-family: Montserrat;
    }

    .skills__content__item {
      ${transitionDelay(3000)}
      
      @media all and (max-width: 767px) {
        ${transitionDelay(2000)}
      }
    }
  }

  @media all and (max-width: 870px) {

    .studio__container {
      flex-flow: row wrap;
    }

    .vision {
      width: 100%;

      &__content {
        max-width: 600px;
      }

      &__header {
        max-width: 600px;
        width: 100%;
      }
    }

    .skills, .passion {
      width: 45%;
      box-sizing: border-box;
      text-align: center;
      display: flex;
      flex-flow: column;
      align-items: center;
      padding-top: 0;

      &__content {
        text-align: center;
      }
    }

    /* .skills {
      padding-top: 0;
    } */
  }

  @media all and (max-width: 450px) {
    
    .skills, .passion {
      width: 100%;
      text-align: left;
      align-items: flex-start;

      &__content {
        text-align: left;
      }
    }
  }
`;