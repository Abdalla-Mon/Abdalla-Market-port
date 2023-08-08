import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { sliceData } from "../../../store/fetchData/fetchData";

export default function CreatTabs() {
  const data = useSelector((state) => state.data);

  const dispatch = useDispatch();

  let tabsCount = Math.ceil(data.filterArr.length / 9) || 1;
  let tabsData = data.filterArr;
  tabsData = tabsData.slice(0, tabsCount);

  function handleClick(e) {
    let index = +e.target.dataset.index;
    let d = index * 9;

    dispatch(sliceData(d));
  }
  return (
    <>
      {tabsData.map((tab, index) => {
        return (
          <NavLink
            className={index === 0 && "click-me"}
            to={index === 0 ? "page1" : "page" + (index + 1)}
            key={"page" + (index + 1)}
            data-index={index}
            onClick={(e) => handleClick(e)}
          >
            {index + 1}
          </NavLink>
        );
      })}
    </>
  );
}
