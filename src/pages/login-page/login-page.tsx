import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { loginAction } from '../../store/modules/auth/api-action-auth';
import { useAppDispatch } from '../../store/store-hooks';
import { AuthData } from '../../types';
import { RoutePath } from '../../const';


export default function LoginPage(): JSX.Element {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: {errors} } = useForm<AuthData>();

  const onSubmit: SubmitHandler<AuthData> = (data) => {
    dispatch(loginAction({ email: data.email, password: data.password, agreement: data.agreement }))
      .then((response) => {
        if (response.meta.requestStatus === 'fulfilled') {
          navigate(RoutePath.Main);
        }
      });
  };

  return (
    <div className='wrapper'>
      <Header />
      <main className='decorated-page login'>
        <div className='decorated-page__decor' aria-hidden='true'>
          <picture>
            <source type='image/webp' srcSet='img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x' />
            <img src='img/content/maniac/maniac-size-m.jpg' srcSet='img/content/maniac/maniac-size-m@2x.jpg 2x' width='1366' height='768' alt='' />
          </picture>
        </div>
        <div className='container container--size-l'>
          <div className='login__form'>
            <form
              className='login-form'
              action='https://echo.htmlacademy.ru/'
              onSubmit={handleSubmit(onSubmit)}
            // method='post'
            >
              <div className='login-form__inner-wrapper'>
                <h1 className='title title--size-s login-form__title'>Вход</h1>
                <div className='login-form__inputs'>
                  <div className='custom-input login-form__input'>
                    <label
                      className='custom-input__label'
                      htmlFor='email'
                    >E&nbsp;&ndash;&nbsp;mail
                    </label>
                    <input
                      type='email'
                      id='email'
                      placeholder='Адрес электронной почты'
                      {...register('email', {
                        required: 'Это поле обязательно',
                      })}
                    />
                    {errors.email && (
                      <span className='error-message'>{errors.email.message}</span>
                    )}
                  </div>
                  <div className='custom-input login-form__input'>
                    <label
                      className='custom-input__label'
                      htmlFor='password'
                    >Пароль
                    </label>
                    <input
                      type='password'
                      id='password'
                      placeholder='Пароль'
                      {...register('password', {
                        required: 'Это поле обязательно',
                        minLength: {
                          value: 3,
                          message: 'Пароль должен быть не менее 3 символов',
                        },
                        maxLength: {
                          value: 15,
                          message: 'Пароль должен быть не более 15 символов',
                        },
                        pattern: {
                          value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,15}$/,
                          message: 'Пароль должен содержать хотя бы одну букву и одну цифру',
                        },
                      })}
                    />
                    {errors.password && (
                      <span className='error-message'>{errors.password.message}</span>
                    )}
                  </div>
                </div>
                <button
                  className='btn btn--accent btn--general login-form__submit'
                  type='submit'
                >Войти
                </button>
              </div>
              <label className='custom-checkbox login-form__checkbox'>
                <input
                  type='checkbox'
                  id='id-order-agreement'
                  {...register('agreement', {
                    required: 'Необходимо согласие с правилами',
                  })}
                />
                <span className='custom-checkbox__icon'>
                  <svg width='20' height='17' aria-hidden='true'>
                    <use xlinkHref='#icon-tick'></use>
                  </svg>
                </span>
                <span className='custom-checkbox__label'>Я&nbsp;согласен с
                  <Link
                    className='link link--active-silver link--underlined'
                    to='#'
                  >правилами обработки персональных данных
                  </Link>&nbsp;и пользовательским соглашением
                </span>
                {errors.agreement && (
                  <span className='error-message'>{errors.agreement.message}</span>
                )}
              </label>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
