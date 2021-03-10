import styled from 'styled-components';

export const Container = styled.div`

  margin-top: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: Avenir;
  padding: 20px;

  .footer {

    &__logo {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    &__logoImg {
      width: 60px;
      height: auto;
      margin-right: 20px;
      margin-bottom: 11px;
    }
  }

  .socialMedia {
    display: flex;
    justify-content: center;

    &__link {
      margin: 10px;
      text-decoration: none;
    }
  }

  @media all and (max-width: 860px) {

    .rights {
      display: none;
    }
  }

`;