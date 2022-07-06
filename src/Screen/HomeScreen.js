import React, { useCallback, useEffect, useState } from "react";
import CRUDRequest from "../API/Api";
import SearchAppBar from "../Components/Header/Header";
import { FlexDiv } from "./HomeScreen.style";

const HomeScreen = () => {
  const [gif, setGif] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const fetchData = useCallback(async () => {
    const response = await CRUDRequest.get(
      `gifs/search?api_key=TQJVY7Gdxx3LNNzd3hp0VxPs0ABku5nq&q=${
        search || "random"
      }`
    );
    setGif([...response.data.data]);
    // setLoading(false);
  });
  useEffect(() => {
    fetchData();
  }, [search]);
  const onChangHandler = (e) => {
    // console.log(e);
    setSearch(e);
  };
//   console.log(search);
  return (
    <div>
      <SearchAppBar
        onChang={onChangHandler}
        value={search}
        setValue={setSearch}
      />
      {gif.length > 0 ? (
        <FlexDiv>
            {gif.map((ele)=>{
                return (
                <img style={{margin:'1rem 0' ,maxHeight:'10rem' }} src={ele.images.downsized.url} />
)
            })}
        </FlexDiv>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomeScreen;
