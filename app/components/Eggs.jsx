import React from 'react';

const Eggs = () => {
  const normalItems = [
    {
      name: 'Old Fashion Breakfast',
      description:
        '2 Large eggs served with your choice of meat (Bacon, Sausage, Ham) Sub-Turkey Bacon',
      price: '$9.99',
      specialprice: '',
    },
    {
      name: 'Big Breakfast',
      description: '3 Large eggs served with 2 Bacon, 2 sausage and 2 Ham',
      price: '$11.99',
      specialprice: '',
    },
    {
      name: 'Big Turkey Breakfast',
      description:
        '3 Large eggs served with 3 Turkey bacon and 3 Turkey sausages',
      price: '$12.49',
      specialprice: '',
    },
    {
      name: 'Veggie Breakfast',
      description: '2 Large eggs sautéed mushrooms and pan-fried tomatoes',
      price: '$9.99',
      specialprice: '',
    },
    {
      name: 'Pancake Breakfast',
      description:
        'Pancake served with 2 large eggs and your choice of meat (Bacon | Sausage | Ham | Turkey Sausage | Turkey Bacon)',
      price: '$14.49',
      specialprice: '',
      add: 'Chocolate Chips - $1',
    },
    {
      name: 'French Toast Breakfast',
      description:
        'French Toast served with 2 large eggs and your choice of meat (Bacon | Sausage | Ham | Turkey Sausage | Turkey Bacon)',
      price: '$14.49',
      specialprice: '',
    },
    {
      name: 'Steak & Eggs',
      description: '6 oz AAA NY strip served with 2 large eggs',
      price: '$18.95',
      specialprice: '',
    },
    {
      name: 'Raspberry White Chocolate Pancake.',
      description:
        'Pancake served with 2 large eggs and your choice of meat (Bacon | Sausage | Ham | Turkey Sausage | Turkey Bacon)',
      price: '$14.95',
      specialprice: '',
    },
    {
      name: 'Side order French Toast or Pancake',
      description:
        '',
      price: '$5.00',
      specialprice: '',
    },
  ];

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
                          <p className='py-2 text-[#993399]'>Add {item.add}</p>
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

export default Eggs;
