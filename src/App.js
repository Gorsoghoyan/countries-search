import { MainRoutes } from "./Routes/MainRoutes";
import { useEffect } from "react";
import useApp from "./CustomHook/useApp";
import Header from "./Components/Header";
import { createBrowserHistory } from "@remix-run/router";

function App () {
  const { dispatch, getCountries } = useApp();
  const history = createBrowserHistory()
  
  useEffect(() => {
    dispatch(getCountries());
  }, [ getCountries, dispatch ]);

  useEffect(() => {
    history.push('gor')
  }, [])

  return (
    <>
      <Header />
      <MainRoutes />
    </>
  );
}

export default App;
