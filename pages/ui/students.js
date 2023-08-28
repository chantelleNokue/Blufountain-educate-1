import React from "react";
import { Select, Space } from "antd";
import { Attendence } from "./TableData";
import { PiDotsThreeBold } from "react-icons/pi";
import { CChart } from "@coreui/react-chartjs";
import { PureComponent } from "react";
import { Button, Avatar} from 'antd'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "@coreui/chartjs/dist/css/coreui-chartjs.css";
import { CCard, CCardBody, CCol, CCardHeader, CRow } from "@coreui/react";
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from "@coreui/react-chartjs";
import { StudentData } from "./TableData";

function Student() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  // const data = [
  //   {
  //     name: 'Jan',
  //     uv: 4000,
  //     pv: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: 'Feb',
  //     uv: 3000,
  //     pv: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name: 'Mar',
  //     uv: 2000,
  //     pv: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     name: 'Arp',
  //     uv: 2780,
  //     pv: 3908,
  //     amt: 2000,
  //   },
  //   {
  //     name: 'May',
  //     uv: 1890,
  //     pv: 4800,
  //     amt: 2181,
  //   },
  //   {
  //     name: 'June',
  //     uv: 2390,
  //     pv: 3800,
  //     amt: 2500,
  //   },
  //   {
  //     name: 'July',
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100,
  //   },
  //   {
  //     name: 'Aug',
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100,
  //   },
  //   {
  //     name: 'Sep',
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100,
  //   },
  //   {
  //     name: 'Oct',
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100,
  //   },
  //   {
  //     name: 'Nov',
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100,
  //   },
  //   {
  //     name: 'Dec',
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100,
  //   },
  // ];

  const data = [
    { name: "Jan", present: 20, absent: 20 },
    { name: "Feb", present: 30, absent: 32 },
    { name: "Mar", present: 31, absent: 42 },
    { name: "Apr", present: 22, absent: 28 },
    { name: "May", present: 40, absent: 25 },
    { name: "June", present: 50, absent: 38 },
    { name: "July", present: 40, absent: 42 },
    { name: "Aug", present: 40, absent: 42 },
    { name: "Sept", present: 78, absent: 35 },
    { name: "Oct", present: 90, absent: 25 },
    { name: "Nov", present: 80, absent: 34 },
    { name: "Dec", present: 65, absent: 20 },
  ];

  const Events = Attendence.map((event) => (
    <div>
      <div className="w-3/4 border rounded-md border-white-300 bg-white-300 flex p-2 my-4 shadow-md ">
        <div className="w-fit m-2 text-white-500 bg-blue-500 border p-2">
          {event.icon}
        </div>

        <div className="w-full p-2 flex justify-start flex-col">
          <div className="flex justify-between w-full">
            <p className="text-sm ">{event.title}</p>
            <button>
              {" "}
              <PiDotsThreeBold />
            </button>
          </div>
          <h class="text-gray-200 font-bold text-xl">{event.number}</h>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="flex justify-between mt-10 w-1/2 ml-20">
        <h1 className="text-sm">
          Student <span className="text-gray-400 text-sm">/Teachers</span>
        </h1>
        <div>
          <Select
            labelInValue
            defaultValue={{ value: "Choose Section", label: "Section" }}
            style={{ width: 120 }}
            className="mr-4"
            // onChange={handleChange}
            options={[
              {
                value: "Choose Section",
                label: "Section",
              },
              {
                value: "Section1",
                label: "Section1",
              },
              {
                value: "Section2",
                label: "Section2",
              },
            ]}
          />
          <Select
            labelInValue
            defaultValue={{ value: "Choose Section", label: "Section" }}
            style={{ width: 120 }}
            className="mr-4"
            // onChange={handleChange}
            options={[
              {
                value: "Choose Section",
                label: "Section",
              },
              {
                value: "Section1",
                label: "Section1",
              },
              {
                value: "Section2",
                label: "Section2",
              },
            ]}
          />
        </div>
      </div>

      <div className="w-full grid grid-cols-1 gap-8 md:grid-cols-3">
        {Events}
      </div>

      <div className=" flex w-full justify-between gap-4">
        <div className="mt-10 border bg-white-500 w-3/5">
          <h1 className="font-bold text-xl"> Total Attendence Report</h1>
          <LineChart width={680} height={400} data={data}>
            <XAxis dataKey="name" />
            <YAxis
              label={{ present: "%", angle: -90, position: "insideLeft" }}
            />
            <CartesianGrid stroke="#f5f5f5" />
            <Line
              type="monotone"
              dataKey="present"
              stroke="rgba(0,0,255,0.8)"
            />
            <Line type="monotone" dataKey="absent" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
          </LineChart>
        </div>

        <div className="w-2/5 mt-10">
          <div className="border w-full">
            <CCol xs={60}>
              <CCard className="mb-4">
                <CCardHeader className="font-bold text-xl">Student by Classes</CCardHeader>
                <CCardBody>
                  <CChartBar
                    data={{
                      labels: ["VI", "VII", "VIII", "IX", "X"],
                      datasets: [
                        {
                          label: "students",
                          backgroundColor: "#0ea5e9",
                          data: [270, 220, 216, 260, 240],
                        },
                      ],
                    }}
                    labels="students"
                  />
                </CCardBody>
              </CCard>
            </CCol>
          </div>
        </div>
      </div>

      <div className=" flex w-full justify-between gap-4 mt-10">
        <div className=" border bg-white-500 w-3/5">  
        <div className="shadow-lg  sm:rounded-lg bg-gray-100 text-sm w-full">
        <div className='flex justify-between bg-white-500'>
            <h className="text-lg text-black-500 mt-2 ml-2 font-bold">Visualize Your academic success</h>
            <div className='flex justify-end mt-2'>
            <Select
            labelInValue
            defaultValue={{ value: "Annual exam", label: "Anual exam" }}
            style={{ width: 120 }}
            className="mr-4 mb-2"
            // onChange={handleChange}
            options={[
              {
                value: "Anual exam",
                label: "Anual exam",
                
              },
              {
                value: "Section1",
                label: "Section1",
              },
              {
                value: "Section2",
                label: "Section2",
              },
            ]}
          />
          
            </div>
        </div>
              <table className="text-lg text-left w-full">
                <thead className="text-lg bg-white-500 text-gray-400">
                  <tr>
                  <th scope="col" className="px-6 py-3 font-normal">
                      Profile
                    </th>
                    <th scope="col" className="px-6 py-3 font-normal">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 font-normal">
                      Student ID
                    </th>
                    <th scope="col" className="px-6 py-3 font-normal">
                      Group
                    </th>
                    <th scope="col" className="px-6 py-3 font-normal">
                      Mark-sheet
                    </th>
                    
                  </tr>
                </thead>

                <tbody className="text-sm">
                  {StudentData?.map((dat, index) => {
                    return (
                      <tr
                        key={index}
                        className="bg-white-500  dark:bg-gray-800 dark:border-gray-700 hover:bg-sky-100 dark:hover:bg-sky-100 "
                      >
                        <th className="border-b border-gray-400">
                        <Space size="" className=" ml-4">
                          <Avatar size="medium" src={dat.profile} />
                        </Space>
                        </th>
                        <th
                          scope="row"
                          className="px-6  py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-b border-gray-400"
                        >
                            <div className='text-black-500 font-bold'>
                            {dat.name} 
                            </div>
                          
                          <div className='text-xs text-gray-400'>
                          {dat.class}
                          </div>
                        </th>
                        <td className="px-6 py-4 text-gray-400 border-b">{dat.studentId}</td>
                        <td className="px-6 py-4 text-gray-400 border-b">{dat.group}</td>
                        <td className="px-6 py-4 text-gray-400 border-b">
                           <span className='text-gray-400'>{dat.markSheet}</span> 
                            <span className='text-sky-500 bg-sky-100 p-2 ml-4 rounded-md'>Edit</span>
                            </td>
                        
                       
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
        </div>

        <div className="w-2/5">
          <div className="flex justify-center w-full bg-white-500">
          <CCol xs={6}>
            <CCard className="mb-4 bg-white-500">
              <CCardHeader>Total Students by Gender</CCardHeader>
              <CCardBody>
                <CChartPie
                  data={{
                    labels: ["Male", "Female"],
                    datasets: [
                      {
                        data: [55, 45],
                        
                        backgroundColor: ["#00B5E2", "#90EE90"],
                        hoverBackgroundColor: ["#00B5E2", "#90EE90",],
                      },
                    ],
                  }}
                />
              </CCardBody>
            </CCard>
          </CCol>
        </div>
   </div>

        </div>
        </div>
 
  );
}

export default Student;
