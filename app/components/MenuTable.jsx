import React, { useState } from 'react';

const MenuTable = (props) => {
  const [menuData, setMenuData] = useState(props.menuData);

  const sortedMenu = menuData.sort((a, b) => {
    const daysOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return daysOrder.indexOf(a.id) - daysOrder.indexOf(b.id);
  });

  const groupedMenu = sortedMenu.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = [];
    }
    acc[item.id].push(item);
    return acc;
  }, {});

  const handleInputChange = (day, index, field, value) => {
    const updatedMenuData = menuData.map((item) => {
      if (item.id === day) {
        return {
          ...item,
          [field]: value,
        };
      }
      return item;
    });

    setMenuData(updatedMenuData);
  };

  return (
    <div>
      {Object.keys(groupedMenu).map((day) => (
        <div key={day} className='p-2'>
          <h2 className='font-bold text-xl text-[#993399] w-full text-center border-4 border-black rounded-t-lg py-2'>{day.charAt(0).toUpperCase() + day.slice(1)}</h2>
          <table className='w-full'>
            <tbody>
              {groupedMenu[day].map((item, index) => (
                <tr key={index} className='border-4 border-t-0 border-black text-center p-2 flex flex-col lg:flex-row rounded-b-lg'>
                  <td className='p-2 w-full lg:w-1/3'>
                    <h1 className='float-left ml-1 text-[#993399] font-bold'> Dish Name</h1>
                    <input className='p-2 rounded-lg border-2 w-full h-[4rem]' value={item.name} onChange={(event) => handleInputChange(day, index, 'name', event.target.value)} />
                  </td>
                  <td className='p-2 w-full lg:w-1/3'>
                  <h1 className='float-left ml-1 text-[#993399] font-bold'> Description</h1>
                    <textarea rows='2' className='p-2 rounded-lg border-2 w-full' value={item.description} onChange={(event) => handleInputChange(day, index, 'description', event.target.value)} />
                  </td>
                  <td className='p-2 w-full lg:w-1/3'>
                  <h1 className='float-left ml-1 text-[#993399] font-bold'> Price</h1>
                    <input className='p-2 rounded-lg border-2 w-full h-[4rem]' value={item.price} onChange={(event) => handleInputChange(day, index, 'price', event.target.value)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      <div className='p-4 pb-10 text-white'>
        <button className='w-full text-center font-bold bg-[#993399] p-2 rounded-lg hover:bg-[#c653c6]' onClick={() => props.update(menuData)}>
          SAVE
        </button>
      </div>
    </div>
  );
};

export default MenuTable;
