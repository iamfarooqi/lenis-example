import React from 'react';
import styled from 'styled-components';
import { Hero } from '@/common/hero';
import Callout from './components/Callout';

const Root = styled.main``;

const videoPoster =
  'https://cdn2.unrealengine.com/ue5-bigger-worlds-placeholder-1920x1080-b8ddb42726e1.png';
const videoSource =
  'https://cdn2.unrealengine.com/unreal-engine-5-bigger-worlds-intro-1b3ac82d178e.mp4';

const Bar = styled.div`
  width: 100%;
  height: 60px;
  background: #202337;
`;
const Blank = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Home = () => {
  return (
    <Root>
      <Hero
        videoPoster={videoPoster}
        videoSource={videoSource}
        title="Unreal Engine 5"
        subtitle="Bigger worlds. Bigger stories. More Unreal."
      />
      <Callout
        text="Unreal Engine enables game developers and creators across industries to realize
            next-generation real-time 3D content and experiences with greater freedom, fidelity, and
            flexibility than ever before."
        button={{
          text: 'Download Now',
          href: 'https://www.unrealengine.com/en-US/download',
        }}
      />
      <Bar />
      <Blank>
        <h1>Intentionally left blank.</h1>
      </Blank>
    </Root>
  );
};

export default Home;
