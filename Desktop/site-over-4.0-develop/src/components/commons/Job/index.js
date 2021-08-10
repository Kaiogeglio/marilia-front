/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';
import { JobWrapper } from './styles/JobWrapper';
import Text from '../../foundation/Text';

function Job({ title, description, image }) {
  return (
    <JobWrapper>
      <JobWrapper.Description>
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
          {title}
        </Text>
        <Text
          variant="paragraph3"
          tag="p"
          color="tertiary.light.color"
          textAlign={{
            xs: 'left',
            md: 'left',
          }}
          maxWidth="441px"
        >
          {description}
        </Text>
      </JobWrapper.Description>
      <JobWrapper.Image>
        <Image
          src={image}
          width={300}
          height={400}
        />
      </JobWrapper.Image>

    </JobWrapper>
  );
}

export default Job;
