import styled from 'styled-components';

export const Styles = styled.div`
  font-family: Helvetica;

  .cart__heading {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    background: #222;
    color: white;

    button, a {
      all: unset;
      font-family: Helvetica;
      cursor: pointer;
    }
  }

  .cart__items {
    width: 100%;
    margin: 2rem 0;

    tr {
      background: #f1f1f1;
    }

    thead tr {
      background: none;
    }

    th, td {
      text-align: center;
      padding: 4px 12px;
      vertical-align: middle;
    }

    th {
      font-weight: bold;
    }
  }

  .item__info {
    display: flex;
    align-items: center;
    position: relative;
    min-width: 3rem;
  }

  .remove-item, .item-adjust-amount {
    all: unset;
    cursor: pointer;
    background: #222;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
  }
  
  .item-adjust-amount {
    background: white;
    color: #222;
    font-weight: bold;
  }

  .item-amount {
    display: inline-block;
    margin: 0 .5rem;
    font-weight: bold;
  }

  .item__amount__info {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .item-component {
    margin: 2rem 0;
    padding: 1rem;
    background: #f1f1f1;
    border-radius: 1rem;

    .item__info {
      width: 100%;
      justify-content:space-between;
    }
    
    .thumbnail {
      width: 50%;
      padding-top: 37.5%;
    }
  }

  .item__detail-row {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 0;

    .caption {
      font-weight: bold;
    }

    .item__amount__info {
      justify-content: flex-end;
    }
  }

  .coupon {
    margin-right: 1rem;
  }

  .coupon__wrapper {
    display: flex;
    justify-content: flex-end;

    @media all and (max-width: 600px) {
      flex-flow: column;

      .coupon {
        margin-right: 0;
        margin-bottom: 1rem;
      }
    }
  }

  .col-row.total__wrapper {
    justify-content: flex-end;
  }

  .total__wrapper {
    margin-top: 1rem;

    h2 {
      font-size: 26px;
      font-weight: bold;
    }

    .totals {
    }
    
    .total {
      background: #f1f1f1;
      padding: 1rem;

      &--vat {
        background: white;
      }
    }

    .caption {
      display: inline-block;
      width: 120px;
    }
  }
`;