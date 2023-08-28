import React from 'react'
import TableData from './TableData';

function Table() {
  return (
    <div className='w-full '>
       <div className="shadow-lg  sm:rounded-lg bg-gray-100 text-sm w-full">
              <table className="text-lg text-left w-full">
                <thead className="text-lg bg-white-500 text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3 font-normal">
                      Course Name
                    </th>
                    <th scope="col" className="px-6 py-3 font-normal">
                      Start
                    </th>
                    <th scope="col" className="px-6 py-3 font-normal">
                      Rate
                    </th>
                    <th scope="col" className="px-6 py-3 font-normal">
                      Level
                    </th>
                    
                  </tr>
                </thead>

                <tbody className="text-sm">
                  {TableData?.map((dat, index) => {
                    return (
                      <tr
                        key={index}
                        className="bg-white-500  dark:bg-gray-800 dark:border-gray-700 hover:bg-sky-100 dark:hover:bg-sky-100"
                      >
                        <th
                          scope="row"
                          className="px-6  py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {dat.courseName} 
                          <div className='text-xs'>
                          {dat.noLessons}
                          </div>
                        </th>
                        <td className="px-6 py-4">{dat.startDate}</td>
                        <td className="px-6 py-4 ">{dat.rate}</td>
                        <td className="px-6 py-4">{dat.level}</td>
                        
                       
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
    </div>
  )
}

export default Table
