import React from 'react';

const MainMenu = () => {
  const normalItems = [
    {
      name: 'Item 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt arcu sed urna venenatis, euismod feugiat dui imperdiet. Maecenas eget vestibulum orci. Donec ullamcorper sodales erat eget fermentum. ',
      price: '$10.99',
      specialprice: '$9.99',
    },
    {
      name: 'Item 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt arcu sed urna venenatis, euismod feugiat dui imperdiet. Maecenas eget vestibulum orci. Donec ullamcorper sodales erat eget fermentum. ',
      price: '$8.99',
      specialprice: '$7.99',
    },
    {
      name: 'Item 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt arcu sed urna venenatis, euismod feugiat dui imperdiet. Maecenas eget vestibulum orci. Donec ullamcorper sodales erat eget fermentum. ',
      price: '$12.99',
      specialprice: '11.99',
    },
  ];

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='overflow-x-auto'>
        <div className='inline-block min-w-full py-2 rounded-lg'>
          <div className='overflow-hidden'>
            <table className='min-w-full text-left font-bold'>
              <tbody>
                {normalItems.map((item, index) => (
                  <tr key={index} className='border-b border-white '>
                    <td className='px-1 font-medium '>
                      <h1 className='text-[#800000] font-bold text-xl w-[90%]'>
                        {item.name}
                      </h1>
                      <span className='italic font-bold text-sm'>
                        {item.description}
                      </span>
                    </td>
                    <td className='px-1 font-bold text-lg w-[10%]'>
                      {/* <h1 className='line-through text-black text-sm'>
                        {item.price}
                      </h1> */}
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

export default MainMenu;
