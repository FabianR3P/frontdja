import { Header } from "./";
export const LayoutApp = ({ children }) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  );
};
