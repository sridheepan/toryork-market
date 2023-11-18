'use client';

import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import MenuTable from '../components/MenuTable';

const WeeklyMenu = () => {
  const specialsCollectionRef = collection(db, 'specials');
  const [specials, setSpecials] = useState([]);

  useEffect(() => {
    getSpecials();
  }, []);

  const getSpecials = async () => {
    const data = await getDocs(specialsCollectionRef);
    setSpecials(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const updateSpecial = async (data) => {
    let count = 0;
    data.forEach(async (special) => {
      const { id, name, description, price } = special;

      const document = doc(db, 'specials', id);
      const updatedFields = { name: name, description: description, price: price };
      await updateDoc(document, updatedFields);

      count += 1;
      if (count === 6) {
        router.push('/');
        localStorage.setItem('isLoggedIn', false);
        alert('Menu Saved. Logging out user...');
      }
    });
  };

  return <div className='h-screen bg-white'>{specials && <div>{specials.length > 0 && <MenuTable menuData={specials} update={updateSpecial} />}</div>}</div>;
};

export default WeeklyMenu;
