import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { collection, getDocs} from 'firebase/firestore';

const SpecialMenu = () => {
  const specialsCollectionRef = collection(db, 'specials');
  const [specials, setSpecials] = useState([]);

  useEffect(() => {
    getSpecials();
  }, []);

  const getSpecials = async () => {
    const data = await getDocs(specialsCollectionRef);
    const specials = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  
    const orderedSpecials = specials.sort((a, b) => {
      const daysOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
      return daysOrder.indexOf(a.id) - daysOrder.indexOf(b.id);
    });
  
    setSpecials(orderedSpecials);
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='overflow-x-auto'>
        <div className='inline-block min-w-full py-2 rounded-lg'>
          <div className='overflow-hidden'>
            <table className='min-w-full text-left font-bold'>
              <tbody>
                {specials.map((item, index) => (
                  <tr key={index} className='border-b border-white '>
                    <td className='px-1 font-medium '>
                      <div className='text-[red] font-bold pt-2 underline uppercase text-lg pb-1'>{item.id}</div>
                      <h1 className='text-[#993399] font-bold text-md w-[90%]'>{item.name}</h1>
                      <span className='italic font-bold text-xs'>{item.description}</span>
                    </td>
                    <td className='px-1 font-bold text-[#993399] text-sm w-[10%] pt-[18px]'>
                      {/* <h1 className='line-through text-black text-sm'>{item.price}</h1> */}
                      <span className='relative'>{item.price}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
