import React from 'react';

const Sandwiches = () => {
  const normalItems = [
    {
      name: 'Chicken Clubhouse Sandwich',
      description: 'Grilled Chicken, Backbacon, Lettuce, Tomato, Mayo, and Honey Mustard',
      price: '$10.99',
      specialprice: '',
      combo: '$12.99',
      sub:'Poutine or Onion Rings - $3.00'
    },
    {
      name: 'California Chicken Club',
      description: 'Grilled Chicken, Turkey Bacon, Lettuce, Tomato, Cheddar Cheese, Avocado, Cajun, Mayo on a rye bread',
      price: '$11.99',
      specialprice: '',
      combo: '$13.99',
      sub:'Poutine or Onion Rings - $3.00'
    },
    {
      name: 'Steak Sandwich',
      description: '6 oz New York strip, Arugula, Sautéed Mushroom, Caramelized Onions, Mustard, Mayo and Swiss cheese on a crusty Italian bread',
      price: '$12.99',
      specialprice: '',
      combo: '$15.99',
      sub:'Poutine or Onion Rings - $3.00'
    },
    {
      name: 'Buffalo Chicken Wrap',
      description: 'Fried Chicken, Lettuce, Tomato, Caramelized Onions, Mixed Cheese, Mayo and Buffalo Butter sauce',
      price: '$9.99',
      specialprice: '',
      combo: '$12.99',
      sub:'Poutine or Onion Rings - $3.00'
    },
    {
      name: 'Pesto Chicken Sandwiches',
      description: 'Grilled Chicken, Basil Pesto, Arugula, Tomato, Mozzarella Cheese and Balsamic glaze',
      price: '$9.99',
      specialprice: '',
      combo: '$12.99'
    },
    {
      name: 'Chipotle Beef Wrap',
      description: 'Spinach, Mixed Peppers, Red Onion, Monterey Jack cheese',
      price: '$12.99',
      specialprice: '',
      combo: '$15.99'
    }
  ];

  return (
    <div className='flex flex-col justify-center'>
      <div className='overflow-x-auto'>
        <div className='inline-block min-w-full rounded-lg'>
          <div className='overflow-hidden'>
            <table className='min-w-full text-left font-bold'>
            <thead>
            <tr>
              <th className='w-[80%]'></th>
              <th className='px-1 text-[red] text-[11px] w-[10%] text-center'>Combo</th>
              <th className='px-1 text-[red] text-[11px] w-[10%] text-center'>Sandwich Only</th>
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
                    <td className='px-1 font-bold text-[#800000] text-md w-[10%] text-center'>
                      {item.specialprice != '' && (
                        <h1 className='line-through text-black text-sm'>
                          {item.combo}
                        </h1>
                      )}
                      <span>{item.combo}</span>
                    </td>
                    <td className='px-1 font-bold text-[#800000] text-md w-[10%] text-center'>
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

export default Sandwiches;
