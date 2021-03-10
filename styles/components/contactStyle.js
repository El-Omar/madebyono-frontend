import styled from 'styled-components';
import { Colors } from '../variables';

export const Container = styled.div`
  min-height: 100vh;

  .spacing {
    padding-top: 20vh;
    padding-right: 30px;
    padding-left: 10vw;
  }

  .contact {

    &__title {
      font-size: 50px;
      font-family: Lato;
      width: 50vw;
      margin-top: 16px;
      line-height: 68px;
      transition: all .68s ease-in-out;
      transition-delay: 200ms;
      opacity: 0;
      transform: translateY(50%);

      &.animated {
        opacity: 1;
        transform: none;
      }
    }
    
    &__btn {
      display: block;
      text-decoration: none;
      background: ${Colors.purple};
      color: white;
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 140px;
      height: 50px;
      margin: 52px 0;
      font-size: 20px;
      font-family: Montserrat;
      font-weight: 600;
      transition: all .68s ease-in-out;
      transition-delay: 800ms;
      opacity: 0;

      &.animated {
        opacity: 1;
      }
    }
  }

  .contact__subtitle {
    font-size: 20px;
    font-family: Lato;
    transition: all .68s ease-in-out;
    display: inline-block;
    opacity: 0;
    transform: translateY(50%);
    
    &.animated {
      opacity: 1;
      transform: none;
    }
  }

  .contact-footer {
    background: #111;
    color: white;
    padding-top: 4vh;
    margin-top: 14vh;
    padding-bottom: 10vh;

    &__head {
      font-size: 32px;
      line-height: 50px;
      font-family: Lato;
      width: 50vw;
      margin-top: 16px;
      color: white;
    }

    &__head.form-sent-message {
      font-size: 20px;
      color: #009bcf;
    }

    h2 {
      transition: all .68s ease-in-out;
      opacity: 0;
      transform: translateY(50%);

      &.animated {
        transform: none;
        opacity: 1;
      }
    }
  }

  .contact-form {
    margin-top: 5vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 580px;

    & input {
      background: none;
      border: none;
      outline: none;
      color: white;
      font-weight: bold;
      font-family: Montserrat;
      font-size: 14px;
      margin-left: 15px;
      width: 70%;
    }

    & label {
      font-family: Montserrat;
      color: #575757;
    }

    .form-group {
      border-bottom: 1px solid #898989;
      padding-bottom: 10px;
      transition: all .48s ease-in-out;
      opacity: 0;
      transform: translateY(50%);

      &:nth-child(1) {
        transition-delay: 200ms;
      }

      &:nth-child(2) {
        transition-delay: 400ms;
      }

      &:nth-child(3) {
        transition-delay: 600ms;
      }

      &:nth-child(4) {
        transition-delay: 1000ms;
        transform: none;
      }

      &.animated {
        opacity: 1;
        transform: none;
      }
    }

    .submit {
      background: white;
      color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px;
      margin: 0;
      width: 80px;
      cursor: pointer;
      font-family: Montserrat;
      font-weight: 600;

      &-wrap {
        border: none;
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
      }
    }

    & textarea {
      resize: none;
      background: none;
      border: none;
      outline: none;
      width: 100%;
      margin-bottom: -10px;
      color: white;
      font-weight: bold;
      font-family: Montserrat;
      font-size: 14px;
      line-height: 22px;

      &::-webkit-scrollbar {
        width: .6rem;
      }

      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.7);
      }

      &::-webkit-scrollbar-thumb {
        background: #b7b7b7;
        outline: 1px solid slategrey;
      }

      &::-moz-selection {
        color: #000;
        background: white;
      }

      &::selection {
        color: #000;
        background: white;
      }

    }
  }

  .w-5 {
    width: 50%;

    &:nth-child(1) {
      width: 45%;
      margin-right: 5%;
    }
  }

  .w-10 {
    width: 100%;
  }

  .mt-10 {
    margin-top: 10px;    
  }

  .mt-20 {
    margin-top: 20px;
  }

  .color--purple {
    color: ${Colors.purple};
  }

  @media all and (max-width: 778px) {

    .contact__title, .contact-footer__head {
      font-size: 26px;
      line-height: 38px;
      width: 100%;
    }

    .spacing {
      padding-left: 5vh;
    }

    .contact-form, .w-5 {
      width: 100%;
    }

    .w-5:nth-child(1) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 20px;
    }
  }

`;