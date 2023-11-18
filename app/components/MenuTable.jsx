import React, { useState } from 'react';

const MenuTable = (props) => {
  const [menuData, setMenuData] = useState(props.menuData);

  const sortedMenu = menuData.sort((a, b) => {
    const daysOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return daysOrder.indexOf(a.id) - daysOrder.indexOf(b.id);
  });

  // Group menu items by day
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
          <h2 className='font-bold text-xl text-[#993399] w-full text-center border-2 border-black rounded-t-lg'>{day.charAt(0).toUpperCase() + day.slice(1)}</h2>
          <table className='w-full'>
            {/* <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead> */}
            <tbody>
              {groupedMenu[day].map((item, index) => (
                <tr key={index} className='border-2 border-black text-center p-2 col-span-3'>
                  <td className='p-2 w-1/3 text-[#993399] font-bold'>
                    <input className='p-2 rounded-lg border-2 w-full' value={item.name} onChange={(event) => handleInputChange(day, index, 'name', event.target.value)} />
                  </td>
                  <td className='p-2 w-1/3'>
                    <textarea rows='3' className='p-2 rounded-lg border-2 w-full' value={item.description} onChange={(event) => handleInputChange(day, index, 'description', event.target.value)} />
                  </td>
                  <td className='p-2 w-1/3'>
                    <input className='p-2 rounded-lg border-2 w-full' value={item.price} onChange={(event) => handleInputChange(day, index, 'price', event.target.value)} />
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
