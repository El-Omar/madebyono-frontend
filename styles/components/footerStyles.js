import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: Avenir;

  .container {
    padding-top: 0;
    padding-bottom: 0;
  }

  .col-row {
    align-items: center;
  }

  .footer {

    &__logo {
      display: flex;
      align-items: center;
    }
    
    &__logoImg {
      width: 60px;
      height: auto;
      margin-right: 1rem;
    }
  }

  .socialMedia {
    display: flex;
    justify-content: center;

    &__link {
      margin: 0 10px;
      text-decoration: underline;
    }
  }

  .rights {
    text-align: right;
  }

  @media all and (max-width: 860px) {

    .rights {
      text-align: center;
    }

    .footer__logo {
      justify-content: center;
    }
  }

`;