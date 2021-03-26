import styled from 'styled-components';
import { Svgs, Colors } from '../variables';

export const Styles = styled.div`
  font-family: Helvetica;
  
  .back-to-overview {
    margin-bottom: 12px;
    font-weight: bold;
    font-family: Helvetica;
    display: flex;
    align-items: center;
  }
  
  .icon--back {
    display: inline-block;
    margin-right: 12px;
    width: 36px;
    height: 36px;
    ${Svgs.arrow("#222222")};
  }

  .page__subtitle {
    font-size: 18px;
    margin: 0 auto;
    display: block;
    margin-bottom: 1rem;
    text-align: center;
    color: ${Colors.gray};
  }

  .product__heading {
    display: flex;
    width: 100%;
    justify-content: center;

    @media all and (max-width: 600px) {
      flex-flow: column;
    }
  }

  .price__heading {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 3rem;
    
    @media all and (max-width: 600px) {
      margin: 1rem;
    }
  }

  .caption {
    font-weight: bold;
    display: block;
    margin-bottom: 12px;
  }
  
  .price {
    font-size: 32px;
    font-weight: bold;

    &--old {
      position: relative;

      &::after {
        content: "";
        width: 110%;
        height: 3px;
        background: #222;
        left: -5%;
        top: 50%;
        position: absolute;
        transform: translateY(-50%);
        z-index: 6;
      }
    }
  }
  
  .btn--purchase {
    background: #222;
    color: white;
    text-transform: uppercase;
    border-radius: 1.4rem;
    padding: .75rem 1rem;
  }

  .icon--arrow--down {
    display: block;
    margin: 0 auto;
    width: 46px;
    height: 74px;
    ${Svgs.arrow("#222222")};
    transform: rotate(-90deg);
  }
`;