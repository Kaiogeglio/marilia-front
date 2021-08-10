import React from 'react';
import Text from '../../foundation/Text';

import { VideoHomeWrapper } from './styles/VideoHomeWrapper';

// eslint-disable-next-line react/prop-types
export default function VideoHome({ src }) {
  return (
    <VideoHomeWrapper>
      <Text
        variant="title"
        tag="h2"
        color="primary.main.color"
        textAlign={{
          xs: 'center',
          md: 'center',
        }}
        marginBottom="80px"
      >
        Como Funciona o Bootcamp?
      </Text>
      <VideoHomeWrapper.VideoFrame>
        <VideoHomeWrapper.VideoContainer>
          <iframe
            width="560"
            height="400"
            src={src}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoHomeWrapper.VideoContainer>
      </VideoHomeWrapper.VideoFrame>
    </VideoHomeWrapper>
  );
}
