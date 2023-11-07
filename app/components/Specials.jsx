import React from 'react';

const Specials = () => {
  const normalItems = [
    {
      name: 'Cajun Shrimp',
      description:
        'Saute Shrimp, Mixed Peppers, Onions, Tomato in cajun cream sauce served with Rice and Mix Vegetables',
      med: '$13.99',
      specialprice: '',
      large: '$10.99',
    },
    {
      name: 'Maple Galzed Salmon',
      description: '6 oz Pan sear salmon served with Rice and Mixed Vegetables',
      med: '$17.99',
      specialprice: '',
      large: '',
    },
    {
      name: 'Buttermilk Fried Chicken',
      description:
        '2 Piece of boneless chicken served with coleslaw, fries and honey mustard sauce',
      med: '$11.99',
      specialprice: '',
      large: '',
    },
    {
      name: 'Steak Lunch',
      description:
        'AAA NewYork Steak Strip served with mash potato & Mixed Vegetables',
      med: '',
      specialprice: '',
      large: '',
      sizes: ['6 oz - $18.99', '8 oz - $22.99', '10 oz - $27.99', '12 oz - $32.99'],
      add: 'Pepper Corn Sauce - $3.00',
    },
    {
      name: 'Cheetos Crusted Chicken Fingers (3 Pieces)',
      description: 'Served with French Fried and BBQ sauce',
      med: '$10.99',
      specialprice: '',
      large: '',
    },
    {
      name: 'Bourbon BBQ Girlled Chicken',
      description: 'Served with Rice and Mixed Vegetables',
      med: '$13.99',
      specialprice: '',
      large: '',
    },
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
                  <th className='px-6 text-[red] text-[11px] w-[10%] text-center'>
                    Combo Salad/Fries
                  </th>
                  <th className='px-6 text-[red] text-[11px] w-[10%] text-center'>
                    Dish Only
                  </th>
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
                        <div className='grid grid-rows-2 grid-cols-2 w-[100%]'>
                        {item.sizes &&
                          item.sizes.map((size, idx) => {
                            return (
                              <p key={idx} className='py-2 text-[#800000]'>
                                {size}
                              </p>
                            );
                          })}
                        </div>
                        {item.add && (
                          <p className='py-2 text-[red]'>Add {item.add}</p>
                        )}
                      </span>
                    </td>
                    <td className='px-6 py-4 font-bold text-[#800000] text-md w-[10%] text-center'>
                      {item.specialprice != '' && (
                        <h1 className='line-through text-black text-sm'>
                          {item.med}
                        </h1>
                      )}
                      <span>{item.med}</span>
                    </td>
                    <td className='px-6 py-4 font-bold text-[#800000] text-md w-[10%] text-center'>
                      {item.specialprice != '' && (
                        <h1 className='line-through text-black text-sm'>
                          {item.large}
                        </h1>
                      )}
                      <span>{item.large}</span>
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

export default Specials;
