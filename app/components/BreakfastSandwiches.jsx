import React from 'react';

const BreakfastSandwiches = () => {
  const normalItems = [
    {
      name: 'Breakfast Sandwich',
      description: 'Bacon, Sausage or Ham, Egg, Omlette, Cheese',
      price: '$5.00',
      specialprice: '',
      withCoffee:'$5.99',
      withCoffeeH:'$6.99'
    },
    {
      name: 'Toasted Western',
      description: 'Eggs, Onions, Green Peppers, Ham',
      price: '$5.00',
      specialprice: '',
      withCoffee:'$5.99',
      withCoffeeH:'$6.99'
    },
    {
      name: 'Veggie Western',
      description: 'Eggs, Onions, Green Peppers, Mushrooms',
      price: '$5.00',
      specialprice: '',
      withCoffee:'$5.49',
      withCoffeeH:'$6.99'
    },
    {
      name: 'Western Deluxe',
      description: 'Western with Bacon & Cheese',
      price: '$6.25',
      specialprice: '',
      withCoffee:'$6.99',
      withCoffeeH:'$7.49'
    },
    {
      name: 'B.L.T',
      description: 'Bacon, Lettuce, Tomato, Mayo',
      price: '$5.99',
      specialprice: '',
      withCoffee:'$6.49',
      withCoffeeH:'$7.49'
    },
    {
      name: 'Turkey B.L.T',
      description: 'Turkey Bacon, Lettuce, Tomato, Mayo',
      price: '$6.25',
      specialprice: '',
      withCoffee:'$6.49',
      withCoffeeH:'$7.49',
      add:'Egg - $1.00'
    },
    {
      name: 'B.E.L.T',
      description: 'Bacon, Sausage or Ham, Fried Egg, Lettuce',
      price: '$6.25',
      specialprice: '',
      withCoffee:'$5.99',
      withCoffeeH:'$7.99'
    },
    {
      name: 'Breakfast Bagel',
      description: 'Bacon, Sausage or Ham, Egg, Omlette, Cheese',
      price: '$5.25',
      specialprice: '',
      withCoffee:'$5.99',
      withCoffeeH:'$6.99'
    },
    {
      name: 'English Muffin',
      description: 'Bacon, Sausage or Ham, Fried Egg, Cheese',
      price: '$4.45',
      specialprice: '',
      withCoffee:'$5.49',
      withCoffeeH:'$5.99'
    },
    {
      name: 'Grilled Cheese',
      description: '',
      price: '$5.00',
      specialprice: '',
      withCoffee:'$5.49',
      withCoffeeH:'$5.99'
    },
    {
      name: 'Egg & Cheese',
      description: 'Egg Omlette with Cheese',
      price: '$4.45',
      specialprice: '',
      withCoffee:'$5.49',
      withCoffeeH:'$5.99'
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
              <th className='w-[70%]'></th>
              <th className='px-1 text-[red] text-[11px] w-[10%] text-center'></th>
              <th className='px-1 text-[red] text-[11px] w-[10%] text-center'>with Coffee</th>
              <th className='px-1 text-[red] text-[11px] w-[20%] text-center'>with Coffee & Hash Brown</th>
            </tr>
          </thead>
              <tbody>
                {normalItems.map((item, index) => (
                  <tr key={index} className='border-b border-white'>
                    <td>
                      <h1 className='text-[#993399] font-bold text-md w-[70%]'>
                        {item.name}
                      </h1>
                      <span className='italic font-bold text-xs'>
                        {item.description}
                        {item.add && (
                          <p className='py-2 text-[red]'>Add {item.add}</p>
                        )}
                      </span>
                    </td>
                    <td className='px-1 font-bold text-[#993399] text-md w-[10%] text-center'>
                      {item.specialprice != '' && (
                        <h1 className='line-through text-black text-sm'>
                          {item.price}
                        </h1>
                      )}
                      <span>{item.price}</span>
                    </td>
                    <td className='px-1 font-bold text-[#993399] text-md w-[10%] text-center'>
                      {item.specialprice != '' && (
                        <h1 className='line-through text-black text-sm'>
                          {item.withCoffee}
                        </h1>
                      )}
                      <span>{item.withCoffee}</span>
                    </td>
                    <td className='px-1 font-bold text-[#993399] text-md w-[20%] text-center'>
                      {item.specialprice != '' && (
                        <h1 className='line-through text-black text-sm'>
                          {item.withCoffeeH}
                        </h1>
                      )}
                      <span>{item.withCoffeeH}</span>
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

export default BreakfastSandwiches;
