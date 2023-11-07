import React from 'react';

const Burgers = () => {
  const normalItems = [
    {
      name: 'Classic Burger',
      description: '',
      price: '$6.99',
      specialprice: '',
      combo: '$9.99',
      sub:'Poutine or Onion Rings - $3.00'
    },
    {
      name: 'Classic Cheese Burger',
      description: '',
      price: '$7.99',
      specialprice: '',
      combo: '$10.99',
      sub:'Poutine or Onion Rings - $3.00'
    },
    {
      name: 'Bacon Cheese Burger',
      description: '',
      price: '$8.99',
      specialprice: '',
      combo: '$11.99',
      sub:'Poutine or Onion Rings - $3.00'
    },
    {
      name: 'Bacon Mushrrom Swiss',
      description: '',
      price: '$9.99',
      specialprice: '',
      combo: '$12.99',
      sub:'Poutine or Onion Rings - $3.00'
    },
    {
      name: 'Veggie Burger',
      description: '',
      price: '$6.99',
      specialprice: '',
      combo: '$8.99',
      sub:'Poutine or Onion Rings - $3.00'
    },
    {
      name: 'Chicken Burger',
      description: 'Choice of Fried or Grilled',
      price: '$7.99',
      specialprice: '',
      combo: '$9.99',
      sub:'Poutine or Onion Rings - $3.00'
    },
    {
      name: 'Farmers Burger',
      description: 'Beef patty, BBQ grilled chicken, Pea Meal Bacon, Fried Egg and Cheddar Cheese',
      price: '$10.99',
      specialprice: '',
      combo: '$13.99',
      sub:'Poutine or Onion Rings - $3.00'
    }
  ];

  return (
    <div className='flex flex-col justify-center'>
      <div className='overflow-x-auto mx-6'>
        <div className='inline-block min-w-full rounded-lg'>
          <div className='overflow-hidden'>
            <table className='min-w-full text-left font-bold'>
            <thead>
            <tr>
              <th className='w-[80%]'></th>
              <th className='px-6 text-[red] text-[11px] w-[10%] text-center'>Combo</th>
              <th className='px-6 text-[red] text-[11px] w-[10%] text-center'>Sandwich Only</th>
            </tr>
          </thead>
              <tbody>
                {normalItems.map((item, index) => (
                  <tr key={index} className='border-b border-white'>
                    <td>
                      <h1 className='text-[#800000] font-bold text-md w-[70%]'>
                        {item.name}
                      </h1>
                      <span className='italic font-bold text-xs'>
                        {item.description}
                        {item.sub && (
                          <p className='py-2 text-[red]'>Substitue side to {item.sub}</p>
                        )}
                      </span>
                    </td>
                    <td className='px-6 py-4 font-bold text-[#800000] text-md w-[10%] text-center'>
                      {item.specialprice != '' && (
                        <h1 className='line-through text-black text-sm'>
                          {item.combo}
                        </h1>
                      )}
                      <span>{item.combo}</span>
                    </td>
                    <td className='px-6 py-4 font-bold text-[#800000] text-md w-[10%] text-center'>
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

export default Burgers;
