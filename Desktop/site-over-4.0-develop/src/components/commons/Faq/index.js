/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
import Text from '../../foundation/Text';

import { FaqWrapper } from './styles/FaqWrapper';

function Faq({ questions }) {
  const [questionsState, setQuestionsState] = useState();

  function handleVisible(id) {
    const newQuestions = questionsState.map((question, index) => (index === id
      ? { ...question, isVisible: !question.isVisible }
      : question));
    setQuestionsState(newQuestions);
  }

  useEffect(() => {
    setQuestionsState(questions);
  }, [questions]);

  return (
    <FaqWrapper.Box>
      <Text
        variant="title"
        tag="h2"
        color="primary.main.color"
        textAlign={{
          xs: 'left',
          md: 'left',
        }}
        marginBottom="20px"
      >
        Perguntas e respostas Mais frequentes
      </Text>
      <FaqWrapper.Description>Tire todas as suas dúvidas.</FaqWrapper.Description>
      {questionsState && questionsState.map((question, index) => (
        <FaqWrapper.QuestionContainer key={index}>
          <FaqWrapper.Question onClick={() => handleVisible(index)}>
            <h4>{`${index + 1}.`}</h4>
            <Text
              variant="paragraph3"
              tag="h3"
              color="primary.main.contrastText"
              textAlign={{
                xs: 'left',
                md: 'left',
              }}
            >
              {question.Question}
            </Text>
            <span>
              {question.isVisible
                ? <FaCaretUp size={30} />
                : <FaCaretDown size={30} />}
            </span>

          </FaqWrapper.Question>
          {question.isVisible === true
            && (
              <FaqWrapper.Answer>
                <Text
                  variant="paragraph3"
                  tag="p"
                  color="tertiary.light.color"
                  textAlign="left"
                >
                  {question.Answer}
                </Text>
              </FaqWrapper.Answer>
            )}
        </FaqWrapper.QuestionContainer>
      ))}
    </FaqWrapper.Box>
  );
}

export default Faq;

Faq.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object),
};
