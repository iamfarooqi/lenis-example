import React from 'react';
import styled from 'styled-components';
import { vw } from '@/styles';

const Root = styled.section`
  position: relative;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${vw([
    ['padding-top', 0, 0, 36],
    ['padding-bottom', 60, 36, 36],
    ['padding-left', 60, 24, 12],
    ['padding-right', 60, 24, 12],
    ['margin-top', '-20vh', '-20vh', 0],
  ])}
  h3 {
    ${vw([
      ['width', 900, 600, '100%'],
    ])};
  }
`;

const Button = styled.a`
  ${vw([['margin-top', 36, 24, 12]])}
`;

interface CalloutProps {
    text: string;
    button?: {
        text: string;
        href?: string;
        onClick?: () => void;
    }
}
const Callout = (props: CalloutProps) => {
    const { text, button } = props;
    return (
      <Root>
        <h3>{text}</h3>
        {button && (
          <Button
            as={button.href ? 'a' : 'button'}
            href={button.href}
            onClick={button.onClick}
          >
            {button.text}
          </Button>
        )}
      </Root>
    );
};

export default Callout;
