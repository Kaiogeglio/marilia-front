/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';
import Lottie from 'react-lottie';

// import { WebsitePageContext } from '../../wrappers/WebsitePage';

import { Button } from '../Button';
import Text from '../../foundation/Text';
import { SubscriptionWrapper } from './styles/SubscriptionWrapper';

import unlockedAnimation from '../../../../public/animation/9943-protection-shield.json';
import fireAnimation from '../../../../public/animation/18842-fire-coin-shining.json';

function Subscription({
  course,
  // cta,
  description,
  advantage,
  disclaimer,
  buttons,
}) {
  // const websitePageContext = React.useContext(WebsitePageContext);
  const unlockedAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: unlockedAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const fireAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: fireAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <SubscriptionWrapper.Box>
      <SubscriptionWrapper.Call>
        <SubscriptionWrapper.FireAnimation>
          {course === 'ConnectHub'
            ? (
              <SubscriptionWrapper.AnimationContainer>
                <Image
                  src="/images/logo-connecthub.png"
                  alt="Logo do ConnectHub"
                  width={300}
                  height={300}
                />
              </SubscriptionWrapper.AnimationContainer>

            )
            : (
              <SubscriptionWrapper.AnimationContainer>
                <Lottie options={fireAnimationOptions} />
              </SubscriptionWrapper.AnimationContainer>
            )}
          <Text
            variant="title"
            tag="h2"
            color="primary.main.color"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
            maxWidth="441px"
            marginBottom="30px"
          >
            {course}
          </Text>
        </SubscriptionWrapper.FireAnimation>
        <Text
          variant="paragraph3"
          tag="p"
          color="tertiary.light.color"
          textAlign="center"
          maxWidth="250px"
        >
          {description}
        </Text>
      </SubscriptionWrapper.Call>
      <SubscriptionWrapper.Action>
        <SubscriptionWrapper.Price>
          <Text
            variant="paragraph3"
            tag="h3"
            color="primary.main.color"
            textAlign={{
              xs: 'center',
              md: 'center',
            }}
            maxWidth="300px"
          >
            {advantage}
          </Text>
        </SubscriptionWrapper.Price>
        {/* <Button
          margin={{
            xs: '30px auto',
            md: '30px 0',
          }}
          variant="primary.main"
          onClick={() => websitePageContext.toggleModalCadastro()}
          width="253px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="55px"
          target="_blank"
          fontSize="16px"
        >
          {cta}
        </Button> */}
        {
          buttons && buttons.map((element, index) => (
            <Button
              key={index}
              margin={{
                xs: '0 auto 10px',
                md: '30px 0',
              }}
              variant={element.Type === 'primary' ? 'primary.main' : 'background.light'}
              width="290px"
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              height="55px"
              target="_blank"
              href={element.Link}
              fontSize="16px"
              ghost={element.Type === 'secondary'}
              border={element.Type === 'primary' ? false : 'borders.green.color'}
            >
              {
                element.Type === 'secondary' && (
                  <Image
                    src="/images/whatsapp-icon.svg"
                    width={30}
                    height={30}
                  />
                )
              }
              {element.Text}
            </Button>
          ))
        }
        <p>{disclaimer}</p>
        <SubscriptionWrapper.ShieldAnimation>
          <Lottie options={unlockedAnimationOptions} />
        </SubscriptionWrapper.ShieldAnimation>
      </SubscriptionWrapper.Action>
    </SubscriptionWrapper.Box>
  );
}

export default Subscription;
