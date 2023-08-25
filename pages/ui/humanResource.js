import React from 'react'
import { OpenPosts } from './data'
import {CalenderEvents, Candidates} from './data'
import { Progress, Space  } from 'antd'
import {AiOutlineCalendar, AiFillHeart} from 'react-icons/ai'
import {BiMessageDetail} from 'react-icons/bi'
import {PiDotsThreeVerticalBold}from 'react-icons/pi'
import {Input, Avatar} from 'antd'
import {SearchOutlined, UserOutlined, SettingOutlined  } from '@ant-design/icons'
import { Container, Col, Row, Card, CardBody, CardTitle } from "reactstrap";

const HumanResource = () => {
    const Posts= OpenPosts.map((post) =>(
        <div>
             <div className='w-3/4 border rounded-md border-white-300  bg-white-300 flex  justify-around p-2  my-4  shadow-md hover:shadow-xl '>
               <div className='text-3xl font-bold  '>
                {post.number} 
               </div>
    
               <div className=''>
                <h1 className='font-semibold text-sm '>{post.title}</h1>
                <p class="text-gray-200 text-sm">{post.candidates} candidates</p>
               </div>
    
               <div className='ml-6'>
               <Progress type="circle" percent={post.percantage} size={40} strokeColor={post.color}/>
               </div>
    
           </div>
        </div>
      ))
    
      const events= CalenderEvents.map((event) =>(
        <div>
             <div className='w-full border rounded-md border-white-300 bg-white-300 flex flex-col py-2  my-4  shadow-md'>
               <div className='w-full text-sm flex justify-between items-center'>
                {event.date} 
                <button><PiDotsThreeVerticalBold size={20}/></button>
               </div>
    
               <div className='w-full mt-1 items-center grid grid-cols-2 divide-x-4 divide-orange-500'>
                <h1 className='font-semibold text-base ml-4'>{event.time1}</h1>
                <div className='flex flex-col items-center'>
                <p class="text-gray-200 text-sm">{event.task1}</p>
                <p class="text-gray-200 text-sm ">{event.title1}</p>
                </div>
               </div>
    
               <div className='w-full mt-1 items-center grid grid-cols-2 divide-x-4 divide-blue-500'>
                <h1 className='font-semibold text-base ml-4'>{event.time2}</h1>
                <div className='border-l-4 border-gray-500  flex flex-col items-center'>
                <p class="text-gray-200 text-sm">{event.task2}</p>
                <p class="text-gray-200 text-sm">{event.title2}</p>
                </div>
               </div>
       
               {event.task3 && (
                    <div className='w-full mt-1 items-center grid grid-cols-2 divide-x-4 divide-gray-500'>
                       <h1 className='font-semibold text-base ml-4'>{event.time3}</h1>
                        <div className='border-l-4 border-orange-500  flex flex-col items-center'>
                         <p class="text-gray-200 text-sm">{event.task3}</p>
                         <p class="text-gray-200 text-sm ">{event.title3}</p>
                      </div>
                    </div>
               )}
 
    
           </div>
        </div>
      ))
    
      const AllCandidates = Candidates.map((candidate)=> {
        return(
         <div className='w-full border rounded-md border-white-300 bg-white-500 flex flex-col items-center p-2 shadow-md hover:shadow-xl'>
           <div className='mt-4'>
           <Space size="middle">
                <Avatar size={70} src={candidate.image} alt='image' /> 
            </Space>
           </div>
              <h1 className='font-semibold text-sm mt-2'>{candidate.name}</h1>
              <p class="text-gray-200 text-sm">{candidate.title}</p>
    
               <div className='w-full my-4 text-gray-400 flex justify-evenly'>
               <button><AiFillHeart size={24}/></button>
               <button><AiOutlineCalendar size={24}/></button>
               <button> <BiMessageDetail size={24}/></button>
               
               </div>
         </div>
        )
    })

  return (
    <div>
    <Card>
      <CardTitle tag="h6" className="border-bottom p-3 mb-0 content-center font-bold">
      HUMAN RESOURCE
      </CardTitle>
      <CardBody className="">
        <Container>
        <div className=' flex w-full'>
    <div className='w-3/4 flex flex-col items-center'>
      <div className='w-4/5  items-center mb-6'>
      <h1 className='font-bold text-lg mt-2 ml-10'>You need to hire</h1>
        <div className="w-full ml-8 grid grid-cols-1 gap-8 md:grid-cols-2"> 
        {Posts}
   </div>
      </div>


      <div className='w-4/5  items-center'>
        <div className='flex justify-between mt-2'>
           <h1 className='font-semibold text-xl'>83 Candidates</h1>
          <button className='border border-gray-400 bg-gray-500 rounded'>Clear Results</button>
        </div>
  

      <div className='w-full my-2 flex justify-between'>
        <div className='w-2/5'>
        <Input  prefix={<SearchOutlined  />} placeholder="Search" />
        </div>

        <div className='w-1/5'>
        <Input   placeholder="Position" suffix={<UserOutlined />}/>
        </div>
          <div className='w-1/5'>
          <Input placeholder="More" suffix={<SettingOutlined />} />
          </div>
      </div>

          <div className=' my-6'>
          <div className="w-full grid grid-cols-1 gap-10 md:grid-cols-3"> 
        {AllCandidates}
          </div>
          </div>
      </div>
   </div>

   <div className='w-1/4' >
    <div className='flex w-full justify-between py-2'>
     <h1 className='font-bold text-base'>Calendar</h1>
     <button><AiOutlineCalendar size={24}/></button>
    </div>

    <div className="w-full grid grid-cols-1 gap-2 "> 
    {events}
          </div>
      
   </div>
   </div>

        </Container>
      </CardBody>
    </Card>
    </div>

  )
}

export default HumanResource

