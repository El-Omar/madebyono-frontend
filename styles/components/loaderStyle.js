import styled from 'styled-components';
import { Colors } from '../variables';

export const Styles = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  top: 0;
  bottom: 0;
  z-index: 500;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;

  .loader {
    position: relative;
    margin: 0 auto;
    width: 200px;
    
    &:before {
      content: '';
      display: block;
      padding-top: 100%;
    }
  }

  .circular {
    animation: rotate 2s linear infinite;
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  .path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    stroke-linecap: round;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  }

  @keyframes color {
    100%, 0% {
      stroke: ${Colors.rose};
    }
    40% {
      stroke: ${Colors.blue};
    }
    66% {
      stroke: ${Colors.purple};
    }
    80%, 90% {
      stroke: ${Colors.yellow};
    }
  }

`;