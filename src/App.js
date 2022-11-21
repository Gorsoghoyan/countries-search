import { MainRoutes } from "./Routes/MainRoutes";
import { useEffect } from "react";
import useApp from "./CustomHook/useApp";
import Header from "./Components/Header";

function App () {
  const { dispatch, getCountries } = useApp();
  
  useEffect(() => {
    dispatch(getCountries());
  }, [ getCountries, dispatch ]);

  return (
    <>
      <Header />
      <MainRoutes />
    </>
  );
}

export default App;
