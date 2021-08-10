/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { AppointmentsWrapper } from './styles/AppointmentsWrapper';
import Text from '../../foundation/Text';

function Appointments({ modules }) {
  return (
    <AppointmentsWrapper>
      <AppointmentsWrapper.Underline />
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
        A trilha que você irá percorrer
      </Text>
      {
        modules && modules.map((element, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <AppointmentsWrapper.AppointmentsCard key={index}>
            <AppointmentsWrapper.NumberTitle>{index + 1}</AppointmentsWrapper.NumberTitle>
            <AppointmentsWrapper.TextModule>
              <Text
                variant="paragraph3"
                tag="h3"
                color="primary.main.color"
                textAlign={{
                  xs: 'left',
                  md: 'left',
                }}
                maxWidth="441px"
              >
                <strong>
                  Módulo
                  {' '}
                  {index + 1}
                  :
                </strong>
                <br />
                {element.Title}
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

                {element.Description}
              </Text>
            </AppointmentsWrapper.TextModule>
            <div>
              <h3><strong>Disciplinas</strong></h3>
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

                {element.Tools}
              </Text>

            </div>
          </AppointmentsWrapper.AppointmentsCard>
        ))
      }

    </AppointmentsWrapper>
  );
}
Appointments.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  modules: PropTypes.array,
};

export default Appointments;
