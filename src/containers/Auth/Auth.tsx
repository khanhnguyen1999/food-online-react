import { useEffect } from 'react';

type IProps = {
  children: any
}

const Auth  = ({ children }: IProps) => {
  const token = localStorage.getItem('token');

  console.log('token: ', token);

  useEffect(() => {
    if(!token) return;
    

  }, [])

  return children
}

export default Auth;
