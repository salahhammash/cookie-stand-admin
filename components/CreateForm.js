export default function Form({cookie}) {
    return (
        <>
            <main className="flex flex-col items-center justify-center h-screen">
          <form className="flex flex-col items-center justify-center w-auto h-auto p-10 bg-green-300"  onSubmit={cookie} >
            <h1 className="p-5 text-4xl font-bold">Create Cookie Stand</h1>
            <div>
              <div className="flex justify-around">
                <label className="text-3xl " >Location </label>
                <input className="w-11/12 mx-auto" type="text" name="location"  ></input>
              </div>
              <div className="flex p-5">
                <div className="flex flex-col p-5">
                  <label className="text-2xl" >Minimum Customers per Hour</label>
                  <input type="number" name="min"></input>
                </div>
                <div className="flex flex-col p-5">
                  <label className="text-3xl ">Maximum Customers per Hour</label>
                  <input type="number" name="max"></input>
                </div>
                <div className="flex flex-col p-5">
                  <label className="text-3xl ">Average Cookies per Sale</label>
                  <input type="number" name="ava"></input>
                </div>
                <button className="flex items-center justify-center p-5 text-3xl  bg-green-600" type="submit">Create</button>
              </div>
            </div>
          </form>
          
  
         
      
  
  
        </main>
        </>
    )
}