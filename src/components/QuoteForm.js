import { useContext, useState, useEffect } from "react";
import { useFormik } from "formik";
import { SelectApp } from "./SelectApp";
import { Textarea ,Select, Option} from "@material-tailwind/react";
import { ButtonApp } from "./index";
const createQuote= async (data) =>{
    const response = await fetch('http://localhost:8000/quotes/list/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });  
    console.log(response)
}

export const QuoteForm = ({ authors, books }) => {
  let nBooks= books.map((e)=>({...e,name: e.title}))
  const formik = useFormik({
    initialValues: { author: "", book: "", quote: "" },
    onSubmit: (values) => {
      const formData= {
        book: parseInt(books.filter(e => e.title===values.book)[0].id),
        text: values.quote
      }
      console.log(JSON.stringify(formData));
      createQuote(formData)
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>

      <label >Book</label>
      <SelectApp
        label="Select Book"
        options={nBooks}
        id="book"
        onChange={formik.handleChange}
      />
    
      <label >Quote</label>
      <Textarea label="Quote" variant="static" onChange={formik.handleChange} id="quote"/>
      <ButtonApp type="submit" label="submit" />
    </form>
  );
};
