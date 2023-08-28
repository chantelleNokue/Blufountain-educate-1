import {React, useState} from 'react'
import TeachersData from './data'
import { UpcomingEvents } from './data'
import {Space, Tag, Select, Button, Avatar} from 'antd'
import {FilterFilled, PlusOutlined } from '@ant-design/icons'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Container, Col, Row, Card, CardBody, CardTitle } from "reactstrap";

const Teachers = () => {

    const [value, onValueChange] = useState(new Date());

    const teachersList = TeachersData.map( teacher=>{
        return (
    <div class="h-full w-full relative mb-10 pb-10">
      {/* <div class="absolute inset-0 bg-black-500 opacity-50 w-full h-full"> */}
      <img className='w-full h-full' src={teacher.image}  alt=""/>
      {/* </div> */}
        <div className="absolute bottom-0 px-2 py-1 text-white-300 w-full">
         <h className="text-white font-semibold w-full"> {teacher.name}</h>
         <h1 className="text-gray-200 font-bold text-xl">Grade {teacher.grade}</h1>
     </div>
     {teacher.subjects.map((subject)=>{
                  let color = subject.length > 7 ? 'geekblue' : 'green';
                  if (subject === 'Mathematics' || subject === 'Economics'  ) {
                    color = 'volcano';
                  }

                  if (subject === 'Geography'){
                    color = 'magenta';
                  }

                  return (
                    <Tag color={color} key={subject}>
                      {subject.toUpperCase()}
                    </Tag>
                  );
            })}
        </div>
        )
      })

      const AllTeachers = TeachersData.map((teacher)=> {
          return(
           <div className='w-full border rounded-md border-white-300 bg-white-500 flex p-2 shadow-md hover:shadow-xl'>
               <div className='w-fit m-2'>
               <Space size="middle">
                  <Avatar size="large" src={teacher.image} alt='image' /> 
              </Space>
               </div>

               <div>
                <h className='font-semibold'>{teacher.name}</h>
                <h class="text-gray-200 text-sm">Grade {teacher.grade}</h>

                {teacher.subjects.map((subject)=>{
                  return (
                    <Tag color='' key={subject}>
                      {subject.toUpperCase()}
                    </Tag>
                  );
            })}
               </div>

           </div>
          )
      })

      const Events = UpcomingEvents.map((event) =>(
        <div>
             <div className='w-full border rounded-md border-white-300 bg-blue-200 flex p-2 mb-2 shadow-md '>
               <div className='w-fit m-2 text-blue-500'>
                {event.img} 
               </div>

               <div>
                <h className='font-semibold'>{event.title}</h>
                <p class="text-gray-200 text-sm">{event.date}</p>
               </div>

           </div>
        </div>
      ))

      const onChange = (value) => {
        console.log(`selected ${value}`);
      };

      const onSearch = (value) => {
        console.log('search:', value);
      };

      const today = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"})
      let time = new Date().toLocaleTimeString();
    

    return (
        <div>
          <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0 content-center font-bold">
            Teachers
            </CardTitle>
            <CardBody className="">
              {/* <Container> */}

              <>
    <div className='w-full border flex'>
    <div className='w-3/4 p-1'>
     <div className='flex w-full justify-between mb-4 pr-4'>
      <h1 className='font-bold text-xl'>Teachers</h1>
      <div>
    <FilterFilled/>

    <Select
    showSearch
    placeholder="Subject"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    style={{
      width: 130,
    }}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'Economics',
        label: 'Economics',
      },
      {
        value: 'Accounting',
        label: 'Accounting',
      },
      {
        value: 'Mathematics',
        label: 'Mathematics',
      },
      {
        value: 'IT',
        label: 'IT',
      },

      {
        value: 'Physics',
        label: 'Physics',
      },
    ]}
  />

<Select
    showSearch
    placeholder="Grade"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    style={{
      width: 120,
      margin: 2,
    }}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'Grade 8',
        label: 'Grade 8',
      },
      {
        value: 'Grade 9',
        label: 'Grade 9',
      },
      {
        value: 'Grade 10',
        label: 'Grade 10',
      },
      {
        value: 'Grade 11',
        label: 'Grade 11',
      },

      {
        value: 'Grade 12',
        label: 'Grade 12',
      },
    ]}
  />

       <Button type="primary" className="bg-blue-500 w-1/7 ml-2">
            <PlusOutlined /> Add Teacher
          </Button>
      </div>
     </div>
     <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-4 pr-4"> 
        {teachersList}
     </div>

     <div className='my-10 flex flex-col w-full justify-start '>
      <h4 className='font-semibold my-2'>All Teachers</h4>
      <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-3 pr-4"> 
      {AllTeachers}
     </div>
     </div>
     </div>

     <div className='w-1/4 p-2 '>
    <div className='flex w-full justify-between '>
      <div className='flex flex-col'>
         <h className='text-xs text-black-500'>Today: {today}</h>
         <h className='font-bold'>{time}</h>
       </div>

       <div className='flex flex-col'>
         <h className='text-xs text-black-500'>First break in:</h>
         <h className='font-bold'>2:40:00</h>
       </div>
    </div>


    <div className='mt-6'>
      <Calendar
              className="outline-none bg-sky-500"
              onChange={onChange}
              value={value}
            />
    </div>

    <div>
             <div className='w-full border rounded-md border-white-300 bg-gray-100 flex p-2 my-4 shadow-md '>
               <div>
                <h4 className='font-bold'>09:00</h4>
                <h6 className='font-semibold text-blue-600'>Teams meeting</h6>
                <p class="text-gray-200 text-sm">Standard morning standup team meeting. <br/> Please come prepared and to keep it short
                </p>
               </div>

           </div>
        </div>
     
     <div className='mt-10'>
      <h4 className='font-semibold'>Upcoming Events</h4>
       {Events}
     </div>

     </div>
     </div>
    </>
              {/* </Container> */}
            </CardBody>
          </Card>
        </div>
      );
    };

export default Teachers