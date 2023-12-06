import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    0% {
        height: 200px;
    }
    50% {
        height: 0px;
    }
    100% {
        height: 200px;
    }
`;

const Root = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateY(50%);
    z-index: 100;
    background-color: ${({ theme }) => theme.color.white};
    transition: opacity 0.5s ease-in-out;
`;

const Indicator = styled.div`
    width: 2px;
    height: 50px;
    animation: ${animation} 2s infinite cubic-bezier(0, 0.42, 0.2, 0.99);
`;

interface ScrollIndicatorProps {
    style: React.CSSProperties;
}

const ScrollIndicator = (props: ScrollIndicatorProps) => {
    const { style } = props;
    return (
      <Root style={style}>
        <Indicator />
      </Root>
    );
};

export default ScrollIndicator;
