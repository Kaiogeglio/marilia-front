import React from 'react';
// import PropTypes from 'prop-types';
import Text from '../../foundation/Text';
import { Button } from '../../commons/Button';
import { Grid } from '../../foundation/layout/Grid';
import { WebsitePageContext } from '../../wrappers/WebsitePage';
import { Box } from '../../foundation/layout/Box';
import { HeadlineWrapper } from '../../../../styles/HeadlineWrapper';
import Link from '../../commons/Link';
// import SelectiveProcessHome from '../../commons/SelectiveProcessHome';
import Media from '../../commons/Media';
import Advantage from '../../commons/Advantage';
import Job from '../../commons/Job';
import Desc from '../../commons/Desc';
import EventHomeResume from '../../commons/EventHomeResume';
// import VideoHome from '../../commons/VideoHome';

export { getContent } from './getContent';

export default function HomeScreen() {
  const websitePageContext = React.useContext(WebsitePageContext);
  const [rotatingText] = React.useState([
    'Alcance seus objetivos',
    'Seja foda',
    'Mergulhe de cabeça',
    'Tire suas ideias do papel',
    'Conquiste um trampo',
    'Saia da mediocridade',
  ]);
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setIdx(idx === rotatingText.length - 1 ? 0 : idx + 1);
    }, 2000);
  }, [idx]);
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="1"
      backgroundColor="dark.color"
      paddingBottom="100px"
    >
      <Grid.Container
        height="100%"
        background="url(/images/cover.jpg) center no-repeat"
      >
        <Grid.Row
          padding={{ xs: '5%', md: '5% 10%' }}
        >
          <Grid.Col
            value={{ xs: 12, md: 5 }}
            offset={{ xs: 0, md: 1 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            <Text
              variant="headlineException"
              tag="h1"
              color="primary.main.color"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
              maxWidth="400px"
            >
              {rotatingText[idx]}
            </Text>
            <Text
              variant="paragraph3"
              tag="p"
              color="tertiary.light.color"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
              maxWidth="400px"
            >
              Estude na Overstack e tenha direito ao estágio garantido.
              Torne-se um profissional completo e prepado para o mercado.
            </Text>

            <Button
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
              Inscreva-se
            </Button>
          </Grid.Col>
          <Grid.Col
            value={{
              xs: 12,
              md: 6,
            }}
          >
            <HeadlineWrapper>
              <Link
                href="https://programacao.overstack.com.br"
                target="_blank"
                width="100%"
              >
                <HeadlineWrapper.Box border="#c6ff00">
                  <Text
                    variant="paragraph3"
                    tag="p"
                    color="primary.main.contrastText"
                    textAlign={{
                      xs: 'center',
                      md: 'left',
                    }}
                  >
                    Nanodegree de Programação em 6 meses
                  </Text>
                </HeadlineWrapper.Box>
              </Link>

              <Link
                href="/bootcamp/bootcamp-de-programacao-full-stack"
                width="100%"
              >
                <HeadlineWrapper.Box border="#8257e6">
                  <Text
                    variant="paragraph3"
                    tag="p"
                    color="primary.main.contrastText"
                    textAlign={{
                      xs: 'center',
                      md: 'left',
                    }}
                  >
                    Firestack - Bootcamp de Programação em 12 semanas
                  </Text>
                </HeadlineWrapper.Box>

              </Link>
              <Link
                href="https://www.udemy.com/course/bootcamp-de-javascript-do-basico-ao-avancado-2021/?referralCode=B45C3222B4C01815F0A1"
                width="100%"
              >
                <HeadlineWrapper.Box border="#8257e6">
                  <Text
                    variant="paragraph3"
                    tag="p"
                    color="primary.main.contrastText"
                    textAlign={{
                      xs: 'center',
                      md: 'left',
                    }}
                  >
                    Formação Engenheiro Web em 2 meses
                  </Text>
                </HeadlineWrapper.Box>
              </Link>
              <Link
                href="https://app.overstack.com.br"
                target="_blank"
                width="100%"
              >
                <HeadlineWrapper.Box border="#8257e6">
                  <Text
                    variant="paragraph3"
                    tag="p"
                    color="primary.main.contrastText"
                    textAlign={{
                      xs: 'center',
                      md: 'left',
                    }}
                  >
                    Cursos Gratuitos
                  </Text>
                </HeadlineWrapper.Box>
              </Link>

            </HeadlineWrapper>

          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
      {/* <VideoHome src="https://www.youtube.com/embed/G0hOFyorpUA" /> */}
      {/* <SelectiveProcessHome /> */}
      <Advantage
        title="Por que estudar na Over?"
      />
      <Job
        title="Grandes chances de conseguir um emprego"
        description="Na Overstack, você não precisa se preocupar com a prática.
        Nossos cursos foram criados para serem verdadeiros planos de carreira.
        Ao longo do curso, as empresas parceiras fazem processos seletivos com nossos
        alunos e as chances de ser contratado são muito grandes."
        image="/images/voce-conquistou-uma-vaga-de-emprego.png"
      />
      <Desc />
      <EventHomeResume />
      <Media />
    </Box>
  );
}

// HomeScreen.propTypes = {
//   // eslint-disable-next-line react/forbid-prop-types
//   messages: PropTypes.object.isRequired,
// };
