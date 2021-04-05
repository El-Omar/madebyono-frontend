import styled from 'styled-components';
import { Colors } from "../variables";

export const Container = styled.div`
  background: white;

  .vision, .skills {
    display: flex;
    flex-flow: column;
    align-items: center;

    &__title {
      color: ${Colors.yellow};
      font-size: 18px;
      font-family: Montserrat;
      font-weight: 600;
    }

    &__header {
      width: 100%;
    }

    &__content {
      font-family: Montserrat;
      font-size: 16px;
      line-height: 26px;
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
    
    &.animated {
      opacity: 1;
      transform: none;
    }
  }

  .vision {

    &__header {
      transition: all .48s ease-in-out;
      transform: translateY(100%);
      opacity: 0;

      &.animated {
        opacity: 1;
        transform: none;
      }
    }

    &__content {
      transition: all .88s ease-in-out;
      transform: translateY(30%);
      opacity: 0;

      &.animated {
        opacity: 1;
        transform: none;
      }
    }
  }

  .skills {
    align-items: flex-start;

    &__title {
      color: ${Colors.blue};
    }

    &__header {
      transition: all .68s ease-in-out;
      transform: translateY(100%);
      opacity: 0;

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

      &.animated {
        opacity: 1;
        transform: none;
      }
    }

    &__content {
      font-family: Montserrat;
    }
  }

  @media all and (max-width: 870px) {

    .studio__container {
      flex-flow: row wrap;
    }

    .skills, .passion {
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
  }

  @media all and (max-width: 450px) {
    
    .skills, .passion {
      text-align: left;
      align-items: flex-start;

      &__content {
        text-align: left;
      }
    }
  }
`;