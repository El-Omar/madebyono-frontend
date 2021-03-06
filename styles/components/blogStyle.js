import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  background: white;
  padding-bottom: 50px;

  .title {
    font-family: Lato;
    font-size: 55px;
    line-height: 68px;
  }

  .project__wrap {
    height: 55vh;
    width: calc(50% + 1px);
    position: relative;
    display: flex;
    flex-flow: column;

    &.animated {
      opacity: 1;
      transform: translateY(0);
    }

    .project {
      width: 100%;
      height: 100%;
      display: flex;
      flex-flow: column;
    }

    & .project__thumbnail {
      position: relative;
      width: 90%;
      height: 100%;
      background: #ccc;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      transition: all .78s cubic-bezier(.59, .01, .28, 1) 260ms;
      &.animated {
        opacity: 1;
        transform: none !important;
      }

      & img {
        /* width: 100%;
        height: 120%;
        max-height: none; */
        object-fit: cover;
      }
    }

    & .project__header {
      position: absolute;
      top: 45%;
      z-index: 5;

      &::before {
        content: '';
        position: absolute;
        width: 15px;
        height: 130%;
        background: white;
        z-index: -1;
        top: -10px;
      }
    }

    & .project__title {
      font-family: Lato;
      font-size: 34px;
      line-height: 42px;
      transition: all .58s cubic-bezier(.59, .01, .28, 1);
      background: rgba(255, 255, 255, .6);
      opacity: 0;
      transform: translateY(50px);
    }
    
    & .project__year {
      display: inline-block;
      background: rgba(255, 255, 255, .6);
      transition: all .58s cubic-bezier(.59, .01, .28, 1);
      font-family: Lato;
      font-size: 34px;
      opacity: 0;
      transform: translateY(50px);
    }

    /*  right project */
    &:nth-child(even) {
      align-self: flex-end;
      border-left: 2px solid #7a7a7a;

      & .project__thumbnail {
        align-self: flex-end;
      }

      & .project__header {
        left: 0;
        text-align: left;
        margin-left: -10px;

        &::before {
          left: 0;
        }
      }
    }

    /* left project */
    &:nth-child(odd) {
      align-self: flex-start;
      border-right: 2px solid #7a7a7a;
      z-index: 2;

      &::before {
        /* content: ''; */
        position: absolute;
        width: 95%;
        height: 1px;
        background: #7a7a7a;
        opacity: .6;
        right: -100%;
        top: 50%;
        z-index: -1;
      }

      & .project__thumbnail {
        align-self: flex-start;
        /* transform: translateX(-50%); */
      }

      & .project__header {
        right: 0;
        text-align: right;
        margin-right: -10px;

        &::before {
          right: 0;
        }
      }
    }
  }

  @media all and (max-width: 630px) {

    & .title {
      margin-bottom: 0;
    }

    .project__wrap {
      width: 100%;
      height: 75vh;
      border: none !important;

      &:not(:first-child) {
        margin-top: 20vh;
      }

      &:last-child .project__header::after {
        content: none;
      }

      & .project__header {
        position: initial !important;
        order: 1;
        text-align: center !important;
        margin-top: 50px;
        margin-bottom: 50px;
        margin-right: 0 !important;
        margin-left: 0 !important;

        &::before {
          content: none;
        }

        &::after {
          content: '';
          position: absolute;
          width: 1px;
          left: 50%;
          height: 70px;
          background: black;
          bottom: -50px;
        }
      }

      & .project__thumbnail {
        width: 100%;

        & img {
          width: 110%; /* change */
        }
      }

      & .project__title {
        font-size: 30px;
        line-height: 36px;
        text-decoration: underline;
        text-decoration-color: white;
      }
      
      & .project__year {
        font-size: 18px;
        text-decoration: underline;
        text-decoration-color: white;
      }
    }
    
  }
`;