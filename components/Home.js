import Head from "next/head";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ReportTable from "./ReportTable"
import { useState } from "react";
// import { useAuth } from "@/contexts/auth";


export default function CookieStandAdmin() {
  const [result,setResult] = useState([])

    return (
  
      
    <>
    
  
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      
      <Header />
      <Main  result ={result} setResult ={setResult}/>
      {
  
        result.length == 0 ? (
          <h1 className="flex items-center justify-center text-5xl m-5"> No cookie stand available </h1>
          ) : (
            
            <ReportTable result ={result} />
            )
          }
      <Footer result ={result} />
  
    </>
    )
  
  }