import { Collapse } from 'antd';
import React, { useState } from 'react';
import { HiOutlinePlusSm, HiOutlineMinusSm } from 'react-icons/hi';
import Omelettes from './Omelettes';
import Eggs from './Eggs';
import Poutine from './Poutine';
import BreakfastSandwiches from './BreakfastSandwiches';
import Sandwiches from './Sandwiches';
import Burgers from './Burgers';
import RiceBowls from './RiceBowls';
import Salads from './Salads';
import Specials from './Specials';

const Accordion = () => {
  const { Panel } = Collapse;
  const getPlusIcon = () => {
    return <HiOutlinePlusSm color='#b400ff' size={27} />;
  };

  const [activeKey, setActiveKey] = useState([]);

  const togglePanel = (key) => {
    if (activeKey.includes(key)) {
      setActiveKey(activeKey.filter((k) => k !== key));
    } else {
      setActiveKey([key]);
    }
  };

  const header = (panelTitle, subheading) => (
    <>
      <p className='font-bold text-lg'>{panelTitle}</p>
      <span className='text-xs italic text-[#8e3a60]'>{subheading}</span>
    </>
  );

  const customExpandIcon = ({ isActive }) => (
    <span>
      {isActive ? (
        <HiOutlineMinusSm color='#8e3a60' className='mt-1' size={35} />
      ) : (
        <HiOutlinePlusSm color='#8e3a60' className='mt-1' size={35} />
      )}
    </span>
  );

  return (
    <Collapse
      accordion
      ghost
      activeKey={activeKey}
      expandIconPosition='start'
      expandIcon={customExpandIcon}
      onChange={(key) => togglePanel(key)}
      className='home-font'>
      <Panel
        header={header(
          'Omelettes',
          '3 Eggs served with H-fries, Toast & Salad Coffee included before 11am'
        )}
        key='1'
        className='px-2'>
        <Omelettes />
      </Panel>
      <div className='h-[1px] bg-[#8e3a60] mx-2'></div>
      <Panel
        header={header('Eggs', 'Served with H-fries, Toast & Salad')}
        key='2'
        className='p-2'>
        <Eggs />
      </Panel>
      <div className='h-[1px] bg-[#8e3a60] mx-2'></div>
      <Panel
        header={header(
          'Poutine',
          'Served with fresh cheese curds & vegetarian poutine gravy'
        )}
        key='3'
        className='p-2'>
        <Poutine />
      </Panel>
      <div className='h-[1px] bg-[#8e3a60] mx-2'></div>
      <Panel
        header={header(
          'Breakfast Sandwiches',
          'Served on white or whole wheat toast'
        )}
        key='4'
        className='p-2'>
        <BreakfastSandwiches />
      </Panel>
      <div className='h-[1px] bg-[#8e3a60] mx-2'></div>
      <Panel
        header={header(
          'Sandwiches',
          'All Sandwiches served with Fries or Salad'
        )}
        key='5'
        className='p-2'>
        <Sandwiches />
      </Panel>
      <div className='h-[1px] bg-[#8e3a60] mx-2'></div>
      <Panel header={header(
          'Burgers',
          '6 oz Fresh Beef on a toasted sesame bun, served with fries or house salad'
        )} key='6' className='p-2'>
          <Burgers />
        </Panel>
      <div className='h-[1px] bg-[#8e3a60] mx-2'></div>
      <Panel
        header={header(
          'Toryork Specials',
          ''
        )}
        key='7'
        className='p-2'>
          <Specials />
        </Panel>
      <div className='h-[1px] bg-[#8e3a60] mx-2'></div>
      <Panel header={header(
          'Salads',
          ''
        )} key='8' className='p-2'>
        <Salads />
      </Panel>
      <div className='h-[1px] bg-[#8e3a60] mx-2'></div>
      <Panel
        header={header(
          'Rice Bowls',
          'Fresh green salad, basmati rice, choice of meat covered in our homemade yogurt dressing, dressing. hot sauce and jalapeno'
        )}
        key='9'
        className='p-2'>
          <RiceBowls />
        </Panel>
    </Collapse>
  );
};

export default Accordion;
