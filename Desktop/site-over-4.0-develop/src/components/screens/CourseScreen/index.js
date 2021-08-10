/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../../foundation/layout/Box';
// import SelectiveProcess from '../../commons/SelectiveProcess';
import Advantage from '../../commons/Advantage';
import Job from '../../commons/Job';
import Faq from '../../commons/Faq';
import Subscription from '../../commons/Subscription';
import Depositions from '../../commons/Depositions';
import Headline from '../../commons/Headline';
// import VideoHome from '../../commons/VideoHome';
import Appointments from '../../commons/Appointments';
import Career from '../../commons/Career';
import Audience from '../../commons/Audience';
import Dominate from '../../commons/Dominate';
import DominateImages from '../../commons/DominateImages';
import Routine from '../../commons/Routine';
import Supporters from '../../commons/Supporters';
import Comunity from '../../commons/Comunity';
import Certificate from '../../commons/Certificate';

export { getContent } from './getContent';

export default function CourseScreen({ messages }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="1"
      backgroundColor="dark.color"
      paddingBottom="100px"
    >
      <Headline
        info={messages ? messages.courses[0].Info_course : null}
        name={messages ? messages.courses[0].Name : null}
        title={messages ? messages.courses[0].Title : null}
        buttons={messages ? messages.courses[0].Button : null}
      />
      <Career src={messages ? messages.courses[0].Video : null} />
      <Advantage
        title="O que esperar desse Bootcamp de Programação?"
      />
      <Audience />
      <Dominate />
      <DominateImages />
      <Appointments modules={messages ? messages.courses[0].modules : null} />
      <Routine />
      <Supporters />
      <Comunity />
      <Certificate />
      <Depositions />
      <Job
        title="Grandes chances de conseguir um emprego"
        description="Na Overstack, você não precisa se preocupar com a prática.
            Nossos cursos foram criados para serem verdadeiros planos de carreira.
            Ao longo do curso, as empresas parceiras fazem processos seletivos com nossos
            alunos e as chances de ser contratado são muito grandes."
        image="/images/voce-conquistou-uma-vaga-de-emprego.png"
      />
      <Subscription
        course={messages ? messages.courses[0].Name : null}
        cta="Inscrever-se"
        description={messages ? messages.courses[0].Description : null}
        advantage="Torne-se um especialista na sua área."
        disclaimer="Restam 55% das vagas."
        buttons={messages ? messages.courses[0].Button : null}
      />
      <Faq questions={messages ? messages.courses[0].Faq_course : null} />
    </Box>
  );
}

CourseScreen.propTypes = {
  messages: PropTypes.object,
};
