import React from 'react';

const Salads = () => {
  const normalItems = [
    {
      name: 'House Salad',
      description: 'Romain, Mixed greens, Carrots, Cucumber, Tomato, Onion & White Wine Vinaigrette',
      med: '$5.99',
      specialprice: '',
      large: '$6.99'
    },
    {
      name: 'Caesar Salad',
      description: 'Romain, Mixed greens, Housemate Croutons, Bacon bits & Parmesan Cheese',
      med: '$5.99',
      specialprice: '',
      large: '$7.99'
    },
    {
      name: 'Greek Salad',
      description: 'Romain, Mixed greens, Tomato, Onions, Cucumber, Green Peppers, Olives & Feta Cheese',
      med: '$6.49',
      specialprice: '',
      large: '$8.49'
    },
    {
      name: 'Twisted Cob Salad',
      description: 'Romain, Mixed greens, Carrots, Cucumber, Tomato, Onions, Avacado, Bacon, Mixed cheese, Fried Egg, Grilled Chicken & White Wine Vinaigrette',
      med: '',
      specialprice: '',
      large: '$13.49'
    }
  ];

  const additionalItems = [
    {
      name: 'Grilled Chicken',
      description: '',
      price: '$4.99',
      specialprice: '',
    },
    {
      name: 'Fried Chicken',
      description: '',
      price: '$4.49',
      specialprice: '',
    },
    {
      name: 'Avacado',
      description: '',
      price: '$1.99',
      specialprice: '',
    },
    {
      name: 'Salmon',
      description: '',
      price: '$9.99',
      specialprice: '',
    },
    {
      name: 'Steak',
      description: '',
      price: '$9.99',
      specialprice: '',
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
              <th className='px-1 text-[red] text-[11px] w-[10%] text-center'>Medium</th>
              <th className='px-1 text-[red] text-[11px] w-[10%] text-center'>Large</th>
            </tr>
          </thead>
              <tbody>
                {normalItems.map((item, index) => (
                  <tr key={index} className='border-b border-white'>
                    <td>
                      <h1 className='text-[#8e3a60] font-bold text-md w-[70%]'>
                        {item.name}
                      </h1>
                      <span className='italic font-bold text-xs'>
                        {item.description}
                        {item.sub && (
                          <p className='py-2 text-[red]'>Substitue side to {item.sub}</p>
                        )}
                      </span>
                    </td>
                    <td className='px-1 font-bold text-[#8e3a60] text-md w-[10%] text-center'>
                      {item.specialprice != '' && (
                        <h1 className='line-through text-black text-sm'>
                          {item.med}
                        </h1>
                      )}
                      <span>{item.med}</span>
                    </td>
                    <td className='px-1 font-bold text-[#8e3a60] text-md w-[10%] text-center'>
                      {item.specialprice != '' && (
                        <h1 className='line-through text-black text-sm'>
                          {item.large}
                        </h1>
                      )}
                      <span>{item.large}</span>
                    </td>
                  </tr>
                ))}
                <div className='text-[red] font-bold text-md pt-2 underline'>
                  Add Extras
                </div>
                {additionalItems.map((item, index) => (
                  <tr key={index} className='border-b border-white'>
                    <td>
                      <h1 className='text-[#8e3a60] font-bold text-md '>
                        {item.name}
                      </h1>
                      <span className='italic font-bold text-xs'>
                        {item.description}
                      </span>
                    </td>
                    <td className='px-1 py-1 font-bold text-[#8e3a60] text-md w-[10%]'>
                      <span></span>
                    </td>
                    <td className='px-1 py-1 font-bold text-[#8e3a60] text-md w-[10%]'>
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

export default Salads;
