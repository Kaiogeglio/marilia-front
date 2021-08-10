import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import * as yup from 'yup';
import { ToastContainer } from 'react-toastify';
import Lottie from 'react-lottie';
import { Button } from '../../commons/Button';
import TextField from '../../forms/TextField';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import { signupService } from '../../../services/signup/signupService';
import { WebsitePageContext } from '../../wrappers/WebsitePage/context';
import { useForm } from '../../../infra/hooks/forms/useForm';
import Message from '../../commons/Message';
import animationData from '../../../../public/animation/9953-loading-round.json';

const signupSchema = yup.object().shape({
  name: yup
    .string()
    .required('"Nome" é obrigatório')
    .min(3, 'Preencha ao menos 3 caracteres'),
  email: yup
    .string()
    .required('"Usuario" é obrigatório')
    .email('Preencha um email válido')
    .min(3, 'Preencha ao menos 3 caracteres'),
  mobilephone: yup
    .string()
    .required('"Celular" é obrigatório')
    .min(9, 'Digite um número de celular válido (com DDD)'),
  password: yup
    .string()
    .required('"Senha" é obrigatória')
    .min(6, 'Sua senha precisa ter ao menos 6 caracteres'),
});

function FormContent({ onSubmit }) {
  const [loading, setLoading] = React.useState(false);
  const websitePageContext = React.useContext(WebsitePageContext);

  const animation = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const initialValues = {
    name: '',
    email: '',
    mobilephone: '',
    senha: '',
  };

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      form.setIsFormDisabled(true);
      setLoading(true);
      signupService.signup({
        name: values.name,
        email: values.email,
        mobilephone: values.mobilephone,
        password: values.password,
      })
        .then(async () => {
          Message('Cadastro concluído! Agora é só fazer login!', 'success');
          await axios.post('https://api-overstack.herokuapp.com/user', {
            name: values.name,
            email: values.email,
            phone: values.mobilephone,
            font: 'apply',
            course: null,
          }, {
            headers: {
              Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYjA0Nzk0MTgyZmRjMmZlNGVhYzY2ZCIsImlhdCI6MTU5MzYwOTMxNywiZXhwIjoxNTkzNjMwOTE3fQ.vfbndxDo4leoZTaiFSO6qmKbw5J1kgA7wmE9j0IaeGg',
            },
          });

          setTimeout(() => {
            websitePageContext.toggleModalCadastro();
            setLoading(false);
          }, 3000);
        })
        .catch((err) => {
          if (err.response) {
            if (err.response.errors[0].message === 'Cannot return null for non-nullable field UsersPermissionsUser.email.') {
              Message('Esse email já existe. Tente com outro email, por favor!', 'error');
              setLoading(false);
            } else {
              Message('Erro ao tentar cadastrar. Tente novamente, mais tarde!', 'error');
              setLoading(false);
            }
          } else {
            Message('Erro ao tentar cadastrar. Tente novamente, mais tarde!', 'error');
            setLoading(false);
          }
        })
        .finally(() => {
          form.setIsFormDisabled(false);
          setLoading(false);
        });
    },
    async validateSchema(values) {
      return signupSchema.validate(values, {
        abortEarly: false,
      });
    },
  });

  return (
    <form onSubmit={onSubmit || form.handleSubmit}>
      <Text
        variant="title"
        tag="h1"
        color="primary.main.color"
      >
        Pronto para mergulhar?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light.color"
        marginBottom="32px"
      >
        Você está a um passo de saber tudoo que está
        rolando sobre tecnologia, design e programação,
        complete seu cadastro agora!
      </Text>
      <TextField
        placeholder="Nome"
        name="name"
        value={form.values.name}
        error={form.errors.name}
        isTouched={form.touched.name}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      <TextField
        placeholder="Email"
        name="email"
        value={form.values.email}
        error={form.errors.email}
        isTouched={form.touched.email}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      <TextField
        placeholder="Celular"
        name="mobilephone"
        value={form.values.mobilephone}
        error={form.errors.mobilephone}
        isTouched={form.touched.mobilephone}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      <TextField
        placeholder="Senha"
        name="password"
        type="password"
        value={form.values.password}
        error={form.errors.password}
        isTouched={form.touched.password}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
        disabled={form.isFormDisabled}
      >
        {
          loading
            ? (
              <div style={{
                width: '91px',
                height: '30px',
                margin: 'auto',
              }}
              >
                <Lottie options={animation} />
              </div>
            )
            : 'Cadastrar'
        }
      </Button>
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ propsDoModal }) {
  const websitePageContext = React.useContext(WebsitePageContext);

  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"
      background="rgba(0, 0, 0, 0.565)"
    >
      <ToastContainer />
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0', xs: '0' }}
        paddingLeft={{ xs: '20%', md: '0', lg: '0' }}
        flex={1}
        value={{ xs: 12, md: 6, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="dark.color"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <Box
            position="relative"
            right="0"
          >
            <button
              type="button"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#fff',
                position: 'absolute',
                right: '20px',
                top: '-60px',
                cursor: 'pointer',
              }}
              onClick={() => websitePageContext.toggleModalCadastro()}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 24 24"
                size="30"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                />
              </svg>
            </button>
          </Box>
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}

FormContent.defaultProps = {
  onSubmit: undefined,
};

FormContent.propTypes = {
  onSubmit: PropTypes.func,
};
