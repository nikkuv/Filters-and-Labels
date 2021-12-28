import React, { useState } from "react";
import { Input, AutoComplete } from "antd";

function AutoSearch() {

  function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              Found {query} on{" "}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
          </div>
        ),
      };
  });

  const [options, setOptions] = useState([]);

  const handleSearch = (value) => {
      setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value) => {
    console.log("onSelect", value);
  };

  return <div>
    <AutoComplete
      dropdownMatchSelectWidth={252}
      className="margin width"
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search size="large" placeholder="input here" enterButton />
    </AutoComplete>
  </div>;
}

export default AutoSearch;
