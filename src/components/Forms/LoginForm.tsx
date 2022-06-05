import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'styles/Button';
import {
  CheckboxInput,
  CheckboxWrapper,
  Form,
  Input,
  InputLabel,
  InputMessage,
  FromBody,
  FromFooter,
} from './FormsStyle';
import { LoginFormProps, LoginFormState } from './FormType';

const LoginForm: FC<LoginFormProps> = ({ setUserData, loading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormState>({ mode: 'onBlur' });

  const onSubmit = handleSubmit((data) => {
    setUserData(data);
  });

  const validation = {
    required: 'Обязательное поле',
    minLength: { value: 4, message: 'Минимум 4 символа' },
  };

  const inputErrorMessage = (inputName: 'name' | 'password') => {
    if (errors && errors[inputName]) {
      return (<InputMessage>{errors[inputName]?.message || 'Ошибка'}</InputMessage>);
    }
    return null;
  };

  return (
    <Form onSubmit={onSubmit}>      
      <FromBody>
        <InputLabel>
          Логин
          <Input
            defaultValue='admin'
            autoFocus
            type='text'
            disabled={loading}
            error={!!errors.name}
            {...register('name', validation)}
          />
          {inputErrorMessage('name')}
        </InputLabel>
        <InputLabel>
          Пароль
          <Input
            defaultValue='admin'
            type='password'
            disabled={loading}
            error={!!errors.password}
            {...register('password', validation)}
          />
          {inputErrorMessage('password')}
        </InputLabel>
        <CheckboxWrapper>
          <CheckboxInput disabled={loading} {...register('savePasword')} />
          Запомнить пароль
        </CheckboxWrapper>      
      </FromBody>
      <FromFooter>
        <Button color='primary' type='submit' disabled={loading}>
          Войти
        </Button>
      </FromFooter>
    </Form>
  );
};

export default LoginForm;
