import { Controller, useForm } from 'react-hook-form';
import { ILoginForm } from 'modules/Login/interfaces/ILoginForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from 'modules/Login/schemas/loginSchema';
import LoginTextField from 'modules/Login/components/Form/TextField';
import ButtonGroup from 'modules/Login/components/Form/ButtonGroup';
import { AuthService } from 'modules/Shared/services';

export default function Form() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
      onSubmit={handleSubmit(
        async (data, e) => {
          try {
            const { status, data: responseData } = await AuthService.login(
              data,
            );
          } catch (e) {
            console.log('combination of email and password are wrong.');
          }
        },
        (data, e) => {
          e?.preventDefault();
          console.log(data);
        },
      )}
    >
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <LoginTextField
            value={value}
            onChange={onChange}
            error={!!errors.email}
            label="E-mail"
            placeholder="Email"
            type="email"
            helperText={!!errors.email ? errors.email.message : ''}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <LoginTextField
            value={value}
            onChange={onChange}
            type="password"
            error={!!errors.password}
            label="Password"
            placeholder="Password"
            helperText={!!errors.password ? errors.password.message : ''}
          />
        )}
      />
      <ButtonGroup />
    </form>
  );
}
