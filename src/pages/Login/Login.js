import styles from './Login.module.css';

import { useState, useEffect } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';


const Login = () => {
  const [displayEmail, setEmail] = useState('')
  const [displayPassword, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    const user = {
      displayEmail,
      displayPassword
    }
    
    const res = await login(user);

    console.log(res);    
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);
  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
      <p>Faça seu login para postar e compartilhar suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>E-mail:</span>
          <input 
            type='email'
            name='displayEmail'
            required
            placeholder='E-mail do usuário'
            value={displayEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input 
            type='password'
            name='displayPassword'
            required
            placeholder='Insira sua senha'
            value={displayPassword}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {!loading && <button className='btn'>Entrar</button>} 
        {loading && <button className='btn' disabled>Aguarde...</button>} 
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  );
};

export default Login;