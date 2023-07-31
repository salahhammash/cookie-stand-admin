import { useState } from "react";
import Form from "./CreateForm";

export default function Main({result,setResult}){

  
    function cookie(event) {
      event.preventDefault();
      let obj = {
        location:event.target.location.value,
        max: event.target.max.value,
        min :event.target.min.value,
        ava : event.target.ava.value
  
      }
      setResult([...result,obj])
      {console.log(result)};

      /** */
      
      // event.target.location.value
  
      // # the "location" is the name that i passed in the input to print for me the value that i enterd insied location form
  } 
  
      return (
        <>
        <Form cookie={cookie}/>
        </>
      )
  
   
  }
  