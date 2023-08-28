import React from "react";
import { Button, Input, Avatar, Space } from "antd";
import { SearchOutlined, PlusOutlined, DashOutlined, SmallDashOutlined } from "@ant-design/icons";
import {StudentGroupData}  from "./data";


function Educate() {
  return (
    <div>
      <div className="mr-8">
        <h1 className="text-4xl flex justify-start mt-8 ml-10">
          Student Groups
        </h1>
        <div className="flex justify-end space-x-2">
          <div className="relative w-full  justify-end flex ">
            <Input
              placeholder="Search"
              className="w-1/6 mb-4 mr-2 border-gray-400"
            />
            <button className="absolute right-2 top-2 translate-y-1/6 flex justify-start mr-4">
              <SearchOutlined className="ml-8" />
            </button>
          </div>
          <Button type="primary" className="bg-blue-500 w-1/7">
            <PlusOutlined className="pb-4" /> Add Group
          </Button>
          <Button
            type="primary"
            className="bg-white-500 w-1/7 text-gray-400 border-gray-400"
          >
            Export
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 ml-20">
{StudentGroupData .map((item)=>{
    return(
       
        <div className="bg-white-500 w-full h-full p-6 flex justify-between space-x-2 shadow-md border-transparent rounded-md">
          <div className="text-gray-400 ml-2 mt-2">
            <h1 className="text-sm mb-2">Group One</h1>
            <span className="text-xs">{item.numberOfTeachers} Teachers, {item.numberOfStudents} students</span>
          </div>
          <div className="border-r-2 border-gray-400 pr-2">
            <h1 className="text-xs text-gray-400 mb-2">Teachers</h1>
            <Space size="middle">
              <Avatar
                size="large"
                src={item.img1}
              />
            </Space>
            <Space size="middle">
              <Avatar
                size="large"
                src={item.img2}
              />
            </Space>
            <Space size="middle">
              <Avatar
                size="large"
                src={item.img3}
              />
            </Space>
          </div>
<div className="mt-1">
    <h1 className="text-xs text-gray-400 mb-2">Top Students</h1>
<Space size="middle">
              <Avatar
                size="large"
                className="bg-sky-500 font-bold"
              >
                {item.student1}
              </Avatar>
              </Space>
              <Space size="middle">
              <Avatar
                size="large"
                className="bg-green-500 font-bold"
              >
                {item.student2}
              </Avatar>
              </Space>
              <Space size="middle">
              <Avatar
                size="large"
                className="bg-orange-500 font-bold"
              >
                {item.student3}
              </Avatar>
              </Space>
              <button>
              <DashOutlined className="text-3xl ml-2 font-bold"/>
              {/* <SmallDashOutlined /> */}
              </button>
              
</div>
        </div>
        
    
    )
})}
</div>   
    </div>
  );
}

export default Educate;
