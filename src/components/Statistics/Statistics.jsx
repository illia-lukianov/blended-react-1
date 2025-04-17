import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

export const iconsMap =  { 
  1: <FaRegThumbsUp/>,
  2: <MdPeople />, 
  3: <MdOutlineProductionQuantityLimits/>, 
  4: <GiTreeDoor/>,
}

const Statistics = ({ title, stats }) => {
  return (
    <>
      {title !== undefined && <h3 className={style.title}>Main Statistics</h3>}
      <ul className={style.list}>
        {stats.map(({ id, title, total }) => {
          return (
            <li key={id} className={style.item}>
            <StatisticsItem title={title} total={total} id={id} />
          </li>
        )})}
      </ul>
    </>
  );
};

export default Statistics;
