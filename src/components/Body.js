import Card from "./Card";
import soupsArr from "./utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [itemsData, setItemsData] = useState([...soupsArr]);

  //   useEffect(() => {
  //     setSortOrder(soupsArr);
  //   }, []);

  //   const fil = soupsArr.filter(({ item }) => item.ratings > 4);
  //   console.log(fil);

  return (
    <div className="body_container">
      <div className="search_container">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = soupsArr.filter(
              ({ item }) => item.ratings > 4
            );
            setItemsData(filteredList);
            console.log(filteredList);
          }}
        >
          Top Ratings
        </button>
      </div>
      <div className="cards_container">
        {itemsData.map((soup, index) => (
          <Card key={index} soupObj={soup} />
        ))}
      </div>
    </div>
  );
};

export default Body;
