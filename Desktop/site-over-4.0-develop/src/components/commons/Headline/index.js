/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';
import { HeadlineWrapper } from './styles/HeadlineWrapper';
import { Button } from '../Button';
// import { WebsitePageContext } from '../../wrappers/WebsitePage';
import Text from '../../foundation/Text';

function Headline({
  info, name, title, buttons,
}) {
  // const websitePageContext = React.useContext(WebsitePageContext);
  return (
    <HeadlineWrapper>
      <Text
        variant="headlineException"
        tag="h1"
        color="primary.main.color"
        textAlign={{
          xs: 'center',
          md: 'center',
        }}
        maxWidth="400px"
        fontSize="70px"
      >
        {name}
      </Text>
      <Text
        variant="paragraph3"
        tag="p"
        color="tertiary.light.contrastText"
        textAlign={{
          xs: 'center',
          md: 'center',
        }}
        maxWidth="400px"
      >
        {title}
      </Text>
      <HeadlineWrapper.Icons>
        {

          info && info.map((element, index) => (
            <HeadlineWrapper.BannerDate key={index}>
              <Image
                loader={() => element.Icon_image.url}
                src="/me.svg"
                alt="Icone de calendário"
                width={50}
                height={50}
              />
              <HeadlineWrapper.BannerInfo>
                <Text
                  variant="paragraph3"
                  tag="p"
                  color="tertiary.light.color"
                  textAlign={{
                    xs: 'center',
                    md: 'left',
                  }}
                  maxWidth="166px"
                >
                  {element.Icon_name}
                </Text>
              </HeadlineWrapper.BannerInfo>
            </HeadlineWrapper.BannerDate>
          ))
        }
      </HeadlineWrapper.Icons>
      <HeadlineWrapper.Buttons>
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
      </HeadlineWrapper.Buttons>
    </HeadlineWrapper>
  );
}

export default Headline;
