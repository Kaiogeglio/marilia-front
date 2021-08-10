import React from 'react';
import Image from 'next/image';

import Text from '../../foundation/Text';

import { DominateImagesWrapper } from './styles/DominateImagesWrapper';

export default function DominateImages() {
  return (
    <DominateImagesWrapper>
      <Text
        variant="title"
        tag="h2"
        color="primary.main.color"
        textAlign={{
          xs: 'center',
          md: 'left',
        }}
        maxWidth="441px"
        marginBottom="80px"
      >
        Descubra o que há de mais moderno em:
      </Text>
      <DominateImagesWrapper.Images>
        <Image
          src="/images/html.svg"
          alt=""
          width={200}
          height={200}
        />
        <Image
          src="/images/css3.svg"
          alt=""
          width={200}
          height={200}
        />
        <Image
          src="/images/javascript.svg"
          alt=""
          width={200}
          height={200}
        />
        <Image
          src="/images/nextjs.svg"
          alt=""
          width={200}
          height={200}
        />
        <Image
          src="/images/react.svg"
          alt=""
          width={200}
          height={200}
        />
        <Image
          src="/images/node.svg"
          alt=""
          width={200}
          height={200}
        />
        <Image
          src="/images/jwt.svg"
          alt=""
          width={200}
          height={200}
        />
        <Image
          src="/images/vercel.svg"
          alt=""
          width={200}
          height={200}
        />
        <Image
          src="/images/insomnia.svg"
          alt=""
          width={200}
          height={200}
        />
        <Image
          src="/images/mongodb.svg"
          alt=""
          width={200}
          height={200}
        />
        <Image
          src="/images/aws.svg"
          alt=""
          width={200}
          height={200}
        />
        <Image
          src="/images/cloud-google.svg"
          alt=""
          width={200}
          height={200}
        />
      </DominateImagesWrapper.Images>
    </DominateImagesWrapper>
  );
}
