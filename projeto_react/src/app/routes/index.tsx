import { BrowserRouter, Route } from "react-router-dom";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" Component={() => <h1>Olá</h1>}></Route>
    </BrowserRouter>
  );
};
