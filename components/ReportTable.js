import { hours } from '../Data'
import { numbers } from '../Data'
// import { Totals } from '../Data'


export default function ReportTable({ result }) {


    return (
        <div className="flex items-center justify-center m-5">
            <table className='text-center'>

                <thead>
                    <tr>
                        {hours.map(element => (
                            <th className='p-4 bg-green-600'>{element}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {result.map((i) => (
                        <tr className=' bg-green-300'>
                            <td className='border border-black '>{i.location}</td>
                            {numbers.map((e) => (
                                <td className='border border-black '>{e}</td>
                            ))}

                        </tr>
                    ))}

                </tbody>

                <tfoot>

                    <tr className=' bg-green-400' >
                        <td className='border border-black '>Totals</td>
                        {numbers.map((x) => (
                            <td className='border border-black '>{x * result.length}</td>
                        ))}
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}




