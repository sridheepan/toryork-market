import React from 'react';

const Omelettes = () => {
  const normalItems = [
    {
      name: 'Classic Omelette',
      description: 'Choice of Bacon,Sausage or Ham, Onion & Peppers',
      price: '$12.99',
      specialprice: '',
    },
    {
      name: 'Mushroom Swiss Omelette',
      description: 'Sautéed mushroom, Swiss cheese, Onion& Peppers',
      price: '$12.99',
      specialprice: '',
    },
    {
      name: 'Smoke Salmon Avocado Omelette',
      description: '',
      price: '$14.99',
      specialprice: '',
    },
    {
      name: 'Mediterranean Omelette',
      description:
        'Tomato, Green peppers,Onions, Mushroom, Olives & Feta cheese',
      price: '$12.99',
      specialprice: '',
    },
    {
      name: 'Egg White Omelette',
      description: 'Spinach & Feta cheese',
      price: '$11.99',
      specialprice: '',
    },
  ];

  const additionalItems = [
    {
      name: 'Cheese',
      description: '',
      price: '$1.00',
      specialprice: '',
    },
    {
      name: 'Egg',
      description: '',
      price: '$1.50',
      specialprice: '',
    },
    {
      name: 'Any Extra Meat',
      description: 'Bacon, Sausage, Ham',
      price: '$4.00',
      specialprice: '',
    },
    {
      name: 'Pea Meal Bacon',
      description: '',
      price: '$4.00',
      specialprice: '',
    },
    {
      name: 'Turkey Meat',
      description: '',
      price: '$4.00',
      specialprice: '',
    },
    {
      name: 'Smoked Salmon',
      description: '',
      price: '$6.00',
      specialprice: '',
    },
    {
      name: 'Home Fries',
      description: '',
      price: '$4.00',
      specialprice: '',
    },
    {
      name: 'Coleslaw',
      description: '',
      price: '$4.00',
      specialprice: '',
    },
    {
      name: 'French Fries',
      description: '',
      price: '$4.00',
      specialprice: '',
    },
    {
      name: 'Gravy',
      description: '',
      price: '$3.00',
      specialprice: '',
    },
    {
      name: 'Onion Rings',
      description: '',
      price: '$6.00',
      specialprice: '',
    },
  ];

  return (
    <div className='flex flex-col justify-center'>
      <div className='overflow-x-auto mx-6'>
        <div className='inline-block min-w-full rounded-lg'>
          <div className='overflow-hidden'>
            <table className='min-w-full text-left font-bold'>
              <tbody>
                {normalItems.map((item, index) => (
                  <tr key={index} className='border-b border-white'>
                    <td>
                      <h1 className='text-[#800000] font-bold text-md '>
                        {item.name}
                      </h1>
                      <span className='italic font-bold text-xs'>
                        {item.description}
                      </span>
                    </td>
                    <td className='px-6 py-4 font-bold text-[#800000] text-md w-[10%]'>
                      {item.specialprice != '' && (
                        <h1 className='line-through text-black text-sm'>
                          {item.price}
                        </h1>
                      )}
                      <span>{item.price}</span>
                    </td>
                  </tr>
                ))}
                <div className='text-[red] font-bold text-md pt-2 underline'>
                  Additional Items
                </div>
                <tr key={100} className='border-b border-white'>
                  <td>
                    <h1 className='text-[#800000] font-bold text-md '>
                      Avacado Toast
                    </h1>
                    <span className='italic font-bold text-xs'>
                      Served on Multigrain bread
                    </span>
                  </td>
                  <td className='px-6 py-4 font-bold text-[#800000] text-md w-[10%]'>
                    <span>$ 5.99</span>
                  </td>
                </tr>
                <div className='text-[red] font-bold text-md pt-2 underline'>
                  Add Extras
                </div>
                {additionalItems.map((item, index) => (
                  <tr key={index} className='border-b border-white'>
                    <td>
                      <h1 className='text-[#800000] font-bold text-md '>
                        {item.name}
                      </h1>
                      <span className='italic font-bold text-xs'>
                        {item.description}
                      </span>
                    </td>
                    <td className='px-6 py-1 font-bold text-[#800000] text-md w-[10%]'>
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

export default Omelettes;
