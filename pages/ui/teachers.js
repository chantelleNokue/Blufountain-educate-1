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
    <div class="h-full w-full relative">
      <img className='w-full h-full after:bg-black-500  after:absolute ' src={teacher.image}  alt=""/>
        <div className="absolute bottom-0 px-4 py-1 text-white-300 w-full">
         <h1 className="text-white font-semibold text-lg p-0 w-full m-0"> {teacher.name}</h1>
         <p className="text-gray-200">Grade {teacher.grade}</p>
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
                <p class="text-gray-200 text-sm">Grade {teacher.grade}</p>

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
             <div className='w-full border rounded-md border-white-300 bg-blue-200 flex p-2 my-4 shadow-md '>
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
              <Container>

              <>
    <div className='w-full border flex'>
    <div className='w-3/4 p-4'>
     <div className='flex w-full justify-between mb-4'>
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
     <div className="w-full grid grid-cols-1 gap-10 md:grid-cols-4"> 
        {teachersList}
     </div>

     <div className='my-10 flex flex-col w-full justify-start '>
      <h4 className='font-semibold my-2'>All Teachers</h4>
      <div className="w-full grid grid-cols-1 gap-8 md:grid-cols-3"> 
      {AllTeachers}
     </div>
     </div>
     </div>

     <div className='w-1/4 p-4'>
    <div className='flex w-full justify-between '>
      <div>
         <p className='text-xs text-black-500'>Today: {today}</p>
         <h5 className='font-bold'>{time}</h5>
       </div>

       <div>
         <p className='text-xs text-black-500'>First break in:</p>
         <h5 className='font-bold'>2:40:00</h5>
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
              </Container>
            </CardBody>
          </Card>
        </div>
      );
    };

export default Teachers