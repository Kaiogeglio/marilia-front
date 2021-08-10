/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Text from '../../foundation/Text';
import { MediaWrapper } from './styles/MediaWrapper';

const medias = [
  {
    name: 'Facebook',
    link: 'https://web.facebook.com/overstack.tech',
    imagePath: 'facebook.png',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/overstack.oficial/',
    imagePath: 'instagram.png',
  },
  {
    name: 'Youtube',
    link: 'https://www.youtube.com/channel/UCr9L-arygsO1V4XU4AVnhWw',
    imagePath: 'youtube.png',
  },
];

export default function Media() {
  return (
    <MediaWrapper>
      <Text
        variant="title"
        tag="h3"
        color="primary.main.color"
        textAlign={{
          xs: 'center',
        }}
      >
        Nossas Redes Sociais
      </Text>
      <MediaWrapper.SocialContainer>
        {
          medias.map(({
            name, link, imagePath,
          }) => (
            <MediaWrapper.SocialMedia key={name}>
              <Link href={link}>
                <a target="_blank">
                  <Image width={60} height={60} src={`/images/${imagePath}`} />
                </a>
              </Link>
            </MediaWrapper.SocialMedia>
          ))
        }
      </MediaWrapper.SocialContainer>
    </MediaWrapper>
  );
}
