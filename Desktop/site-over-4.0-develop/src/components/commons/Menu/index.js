import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../../../theme/Logo';
import Text from '../../foundation/Text';
import { Button } from '../Button';
import { MenuWrapper } from './styles/MenuWrapper';

const links = [
  {
    texto: 'Nanodegree',
    url: 'https://programacao.eniac.edu.br',
  },
  {
    texto: 'FireStack',
    url: '/bootcamp/bootcamp-de-programacao-full-stack',
  },
  {
    texto: 'Engenheiro Web',
    url: 'https://www.udemy.com/course/bootcamp-de-javascript-do-basico-ao-avancado-2021/?referralCode=B45C3222B4C01815F0A1',
  },
];

export default function Menu({ onCadastrarClick }) {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link) => (
          <li key={link.url}>
            <Text
              variant="smallestException"
              tag="a"
              href={link.url}
            >
              {link.texto}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button
          ghost
          variant="secondary.main"
          href="https://app.overstack.com.br/app/login"
          target="_blank"
        >
          Entrar
        </Button>
        <Button
          variant="primary.main"
          href="https://pay.provi.com.br/courses/overstack"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          textAlign="center"
          target="_blank"
        >
          Fazer Matrícula
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired,
};
