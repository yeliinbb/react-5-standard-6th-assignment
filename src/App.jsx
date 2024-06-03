import React, { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";

// TODO: useFetch 라는 커스텀훅을 사용해서 리팩터링 해보세요

const App = () => {
  // 매개변수를 사용해서 재사용성 높이기 -> url 부분
  const { loading, error, title } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div>
      <h1>Data Fetching Example</h1>
      <p>{title}</p>
    </div>
  );
};

export default App;
