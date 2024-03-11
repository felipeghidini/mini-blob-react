import styles from './Register.module.css';

import { useState, useEfect } from 'react'

const Register = () => {
  const [displayName, setDisplayName] = useState('');
  const [displayEmail, setEmail] = useState('')
  const [displayPassword, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setError('');

    const user = {
      displayName,
      displayEmail,
      displayPassword
    }

    console.log(user);

    if (displayPassword !== confirmPassword) {
      setError('As senhas precisam ser iguais!')
      return;
    }
  }

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input 
            type='text'
            name='displayName'
            required
            placeholder='Nome do usuário'
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
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
        <label>
          <span>Confirmação de senha:</span>
          <input 
            type='password'
            name='confirmPassword'
            required
            placeholder='Confirme a sua senha'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <button className='btn'>Cadastrar</button> 
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  );
};

export default Register;