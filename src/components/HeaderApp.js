import { ButtonApp, InputApp } from "./index";
import { useContext } from "react";
import QuotesContext from "../context/QuotesContext";
export const Header = () => {
  const { option, setOption } = useContext(QuotesContext);
  return (
    <div className="flex justify-center flex-wrap">
      <div className="opacity-25 w-full ">
        <h1 className="text-center font-bold text-6xl font-body text-white bg-red-600" onClick={()=>setOption('main')}>
          Quotes
        </h1>
      </div>
      <ButtonApp label={"Random"} variant={"text"} className="text-white" />
      <ButtonApp label={"Archive"} variant={"text"} className="text-white" />
      <ButtonApp label={"Authors"} variant={"text"} className="text-white" />
      <ButtonApp label={"Add Quote"} variant={"text"} className="text-white"  onClick={()=>setOption('upload')}/>

      <InputApp label={"Search"} />
    </div>
  );
};
