import React from 'react';

const RiceBowls = () => {
  const normalItems = [
    {
      name: 'Veggie Patty',
      description: '',
      price: '$9.99',
      specialprice: ''
    },
    {
      name: 'Grilled Chicken',
      description: '',
      price: '$11.99',
      specialprice: ''
    },
    {
      name: 'Fried Chicken',
      description: '',
      price: '$11.99',
      specialprice: ''
    },
    {
      name: 'Korean Style Beef',
      description: '',
      price: '$13.99',
      specialprice: ''
    },
    {
      name: 'Pan Sear Salmon',
      description: '',
      price: '$15.99',
      specialprice: ''
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

export default RiceBowls;
