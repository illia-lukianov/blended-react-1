import style from "./StatisticsItem.module.css"
import { iconsMap } from "../Statistics/Statistics";
import { IconContext } from "react-icons";

const StatisticsItem = ({title, total, id}) => {
  return <>
    <IconContext.Provider
      value={{color: 'var(--color-accent)', size: '30'}}>
      {iconsMap[id]} 
    </IconContext.Provider>
  <span className={style.counter}>{total}</span>
  <p className={style.text}>{title}</p>
</>;
};

export default StatisticsItem;
