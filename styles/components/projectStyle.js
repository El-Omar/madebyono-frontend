import styled from 'styled-components';
import { Colors } from "../variables";

export const Container = styled.div`
  
  .categories__wrapper {

    .btn--category {
      all: unset;
      padding: 8px;
      margin: 0 .5rem;
      font-family: Lato;
      color: #6f6f6f;
      font-size: 14px;
      cursor: pointer;
      transition: all .1s ease-in-out;
  
      &:first-child {
        margin: 0;
      }

      &:hover {
        background: rgba(63, 144, 222, .5);
        color: white;
      }

      &.active {
        background: ${Colors.blue};
        color: white;
      }
    }

    @media all and (max-width: 768px) {
      display: flex;
      flex-flow: column;

      .btn--category {
        margin: .5rem 0;
      }
    }
  }

  .add-to-cart {
    padding: 4px 8px;
    background: white;
    border: 1px solid #999;
    font-size: 12px;
    color: #222;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: .2rem;

    .price {
      color: ${Colors.blue};
      margin-right: 1rem;
    }

    &:hover {
      background: ${Colors.blue};
      color: white;
      border-color: ${Colors.blue};

      .price {
        color: white;
      }
    }
  }
`;