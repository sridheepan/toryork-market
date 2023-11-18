'use client';
import { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/navigation'


const LoginForm = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('admin');
  const [password, setPassword] = useState('');
  const userCollectionRef = collection(db, 'users');

  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUser();
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (users[0].username === email) {
      // Password matches, you can consider the user authenticated.
      if (users[0].password === password) {
        // send to crud page
        router.push("/weeklymenu")
        localStorage.setItem('isLoggedIn', true);
      } else {
        alert('Invalid Password.');
      }
    } else {
      alert('Invalid Username.');
    }
  };

  return (
    <div className='bg-[#993399] h-screen flex items-center justify-center text-lg font-bold'>
      <form
        onSubmit={handleSubmit}
        className='bg-white w-2/3 max-w-[400px] flex flex-col rounded-2xl p-5 text-xl'>
        <div className='text-[2rem] w-full text-center py-8 mb-2 text-white bg-purple-500 rounded-2xl'>
          <h1>Toryork Market</h1>
        </div>
        <label htmlFor='username' className='ml-1'>Username</label>
        <div className='py-2'>
          <input
            className='p-2 rounded-xl border-2 border-purple-600 w-full'
            type='text'
            id='username'
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <label htmlFor='password' className='ml-1'>Password</label>
        <div className='py-2'>
          <input
            className='p-2 rounded-xl border-2 border-purple-600 w-full'
            type='password'
            id='password'
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className='flex justify-center items-center text-center p-2 mt-4 rounded-2xl bg-purple-500 hover:bg-purple-400'>
          <button type='submit' className='font-bold'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
