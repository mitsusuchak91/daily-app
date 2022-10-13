import { useState } from "react";
import dayjs from "dayjs";

const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

function App() {
  const [allData, setData] = useState(data);

const handleFilterDate = (date, field) => {
  const filteredData = data.filter((item) => {
    if (field === "from" && dayjs(item.date).isSameOrAfter(dayjs(date))) {
      return item;
    }
  });

  setData(filteredData);
};

return (
  <div className="container">
    <div className="row">
      <div className="col-sm-3">
        <FilterBar
          onDateFilter={handleFilterDate}
        />
      </div>
      <div className="col-sm-9">
        <div className="row mt-5">
          {allData.map((item) => (
            <PersonItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  </div>
);
}

export default App;