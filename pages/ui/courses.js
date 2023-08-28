"use client";

import React from "react";
import { Button, Input, Avatar, Space } from "antd";
import { RightOutlined } from "@ant-design/icons";
import Image from "next/image";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Table from "./Table";
import { Progress } from "antd";
import HomeworkData from "./HomeworkData";
import CourseData from "./CourseData";
import { Container, Col, Row, Card, CardBody, CardTitle } from "reactstrap";

import {SearchOutlined, UserOutlined, SettingOutlined  } from '@ant-design/icons'

function Dash() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="w-full">
      <Card>
        <CardBody>
            <div className="flex justify-between space-x-4">
        <Input  prefix={<SearchOutlined  />} placeholder="Search" /> 
 <Input   placeholder="Position" suffix={<UserOutlined />}/> 
<Input placeholder="More" suffix={<SettingOutlined />} />
</div>
          <p className=" ml-4 mt-10 font-bold">New Courses</p>
          <div className="w-full flex justify-between mt-6">
            <div className="w-full">
              {/* cardss */}
              <div className="flex justify-between w-full bg-white-500">
                {CourseData?.map((data) => {
                  return (
                    <div className=" h-1/2 ml-4 bg-sky-100 mb-6 rounded-lg pb-2">
                      <div className="p-2 rounded-md h-1/2">
                        <img
                          src="https://d3n8a8pro7vhmx.cloudfront.net/righttoresearch/pages/1214/attachments/original/1492110877/satellite_hackathon.png?1492110877"
                          className="bg-sky-500 rounded-md h-1/3"
                          //   width={12}
                          //   height={68}
                        />
                      </div>

                      <p1 className="text-sm font-bold ml-2">{data.course}</p1>
                      <span className="text-xs flex justify-start ml-2">
                        {data.lessons} Lessons
                      </span>
                      <div className="">
                        <Space size="middle" className="mt-10 ml-2">
                          <Avatar size="small" src={data.img1} />
                        </Space>
                        <Space size="middle" className="mt-10">
                          <Avatar size="small" src={data.img2} />
                        </Space>
                        <Space size="middle" className="mt-10">
                          <Avatar size="small" src={data.img3} />
                        </Space>
                        <Button className=" bg-sky-500 text-white-500 w-1/5 hover:bg-white-500 ml-4">
                          <RightOutlined />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Table />
            </div>
            <div className=" ml-20 mb-10">
              <div className="flex justify-center mr-20">
                <Space size="middle" className="">
                  <Avatar
                    size={68}
                    src="https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  />
                </Space>
              </div>
              <h className="flex justify-center mr-20 ml-4 mt-4 text-gray-400">
                Esther Howard
              </h>

              <h className="flex justify-center mr-28 ml-4 text-gray-400 text-xs">
                Elemantry
              </h>
              <div className="mr-20 mt-4 ">
                <Calendar
                  className="outline-none bg-sky-500"
                  onChange={onChange}
                  value={value}
                />
              </div>
              <div className="mt-4 space-y-4">
                <h className="font-bold text-black-500">Homework progress</h>

                {HomeworkData?.map((item) => {
                  return (
                    <div className="bg-white-500  p-6 rounded-lg hover:bg-sky-500 hover:text-white-500 shadow-lg">
                      <div className=" flex justify-between">
                        <div className="mr-2">
                          <Progress
                            type="circle"
                            percent={item.percantage}
                            size={40}
                            strokeColor={item.color}
                          />
                        </div>

                        <div className="text-xs font-bold ml-2 ">
                          <h className="flex  mr-20 ml-4 mt-4 text-gray-400">
                            {item.course}
                          </h>
                          <h className="mt-2 flex  mr-20 ml-4  text-gray-400">
                            {item.tasks} tasks
                          </h>
                        </div>
                        <div className="flex justify-end">
                          <button className="ml-20  w-1/5 outline-none ">
                            <RightOutlined />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* <div className="bg-white-500 w-3/4 p-6 rounded-lg hover:bg-sky-500 hover:text-white-500 shadow-lg">
              <div className=" flex justify-between">
                <div className="text-xs font-bold">
                  <h1>Styling with CSS</h1>
                  <h1 className="mt-2">12 tasks</h1>
                </div>
                <div className="flex justify-end">
                  <button className="ml-20  w-1/5 outline-none ">
                    <RightOutlined />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white-500 w-3/4 p-6 rounded-lg hover:bg-sky-500 hover:text-white-500 shadow-lg">
              <div className=" flex justify-between">
                <div className="text-xs font-bold">
                  <h1>Styling with CSS</h1>
                  <h1 className="mt-2">12 tasks</h1>
                </div>
                <div className="flex justify-end">
                  <button className="ml-20  w-1/5 outline-none ">
                    <RightOutlined />
                  </button>
                </div>
              </div>
            </div> */}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Dash;