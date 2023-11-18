import React from 'react';

const Poutine = () => {
  const normalItems = [
    {
      name: 'Original Poutine',
      description: '',
      price: '$8.49',
      specialprice: '',
      add: 'Grilled Chicken - $4.99'
    },
    {
      name: 'Fried Chicken',
      description: '',
      price: '$4.49',
      specialprice: '',
    },
    {
      name: 'Korean Beef',
      description: '',
      price: '$6.99',
      specialprice: '',
    },
  ]

  return (
    <div className='flex flex-col justify-center'>
      <div className='overflow-x-auto'>
        <div className='inline-block min-w-full rounded-lg'>
          <div className='overflow-hidden'>
            <table className='min-w-full text-left font-bold'>
              <tbody>
                {normalItems.map((item, index) => (
                  <tr key={index} className='border-b border-white'>
                    <td>
                      <h1 className='text-[#993399] font-bold text-md '>
                        {item.name}
                      </h1>
                      <span className='italic font-bold text-xs'>
                        {item.description}
                        {item.add && (
                          <p className='py-2'>Add {item.add}</p>
                        )}
                      </span>
                    </td>
                    <td className='px-1 font-bold text-[#993399] text-md w-[10%]'>
                      {item.specialprice != '' && (
                        <h1 className='line-through text-black text-sm'>
                          {item.price}
                        </h1>
                      )}
                      <span>{item.price}</span>
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

export default Poutine;
