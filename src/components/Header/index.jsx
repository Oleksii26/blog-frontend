import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAuth } from '../../redux/auth/auth';

export const Header = () => {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch()
  const onClickLogout = () => {
    if (window.confirm('Are you serious?'))
      dispatch(logout())
    window.localStorage.removeItem('token')
  };
  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <div>MY BLOG</div>
          </Link>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Link to="/add-post">
                  <Button variant="contained">Написать статью</Button>
                </Link>
                <Link to='/login'>
                  <Button onClick={onClickLogout} variant="contained" color="error">
                    Выйти
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outlined">Войти</Button>
                </Link>
                <Link to="/register">
                  <Button variant="contained">Создать аккаунт</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
