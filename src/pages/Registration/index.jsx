import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import styles from './Login.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { selectIsAuth } from '../../redux/auth/auth';
import { fetchRegister } from "../../redux/auth/operationsAuth";
import { Navigate } from 'react-router-dom';


export const Registration = () => {

  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: ''
    },
    mode: 'onChange'
  })

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values))
    if (!data.payload) {
      alert('Fail of registration')
    }
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token)
    }
  }

  if (isAuth) {
    return <Navigate to='/' />
  }

  return (
    <Paper elevation={0} classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Создание аккаунта
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type='text'
          error={Boolean(errors.fullName?.message)}
          helperText={errors.fullName?.message}
          {...register('fullName', { required: 'Enter your name' })}
          className={styles.field} label="Name" fullWidth />
        <TextField
          type='email'
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register('email', { required: 'Enter your email' })}
          className={styles.field} label="e-mail" fullWidth />
        <TextField
          type='password'
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register('password', { required: 'Enter your password' })}
          className={styles.field} label="Password" fullWidth />
        <Button disabled={!isValid} type='submit' size="large" variant="contained" fullWidth>
          Зарегистрироваться
        </Button>
      </form>
    </Paper>
  );
};
