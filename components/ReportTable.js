import { isRouteMatch } from 'next/dist/server/future/route-matches/route-match'
import { hours } from '../Data'
import { numbers } from '../Data'
// import { Totals } from '../Data'


export default function ReportTable({ result }) {


{/* <tr className=' bg-green-300' key ={i.id}>
                            <td className='border border-black '  key ={i.id}>{i.location}</td>
                            {numbers.map((e) => (
                                <td className='border border-black ' key ={e.id} >{e}</td> */}
    return (
        <div className="flex items-center justify-center m-5">
            <table className='text-center'>

                <thead >
                    <tr>
                        {hours.map((element,i)=>{
                            <th key = {Math.random()} className='p-4 bg-green-600' >{element}</th>
                        }) }
                    </tr>

                </thead>

                <tbody>
                        {/* {console.log(result)}; */}

                    {result.map((i) => (
                        <tr className=' bg-green-300' key ={Math.random()}>
                            <td className='border border-black '  >{i.location}</td>
                            {numbers.map((e) => (
                                <td className='border border-black ' key = {Math.random()} >{e}</td>
                            ))}

                        </tr>
                    ))}

                </tbody>

                <tfoot>

                    <tr className=' bg-green-400'  >
                        <td className='border border-black '>Totals</td>
                        {numbers.map((x) => (
                            <td className='border border-black ' key ={Math.random()} >{x * result.length}</td>
                        ))}
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}




