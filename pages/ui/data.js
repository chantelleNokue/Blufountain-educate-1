import {GrTrophy} from 'react-icons/gr'
import {RiParentLine} from 'react-icons/ri'
import {GiAfrica, GiTrophy} from 'react-icons/gi'
import {MdOutlineSportsBaseball} from 'react-icons/md'
const TeachersData = [
    {
        id:1,
        name: "Clarabell Atomo",
        grade: 11,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        subjects: ['IT', 'Mathematics']
      },
      
      { 
        id:2,
        name: "Daniel Atomo",
        grade: 10,
        image: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        subjects:['LifeSciences', 'Geography'],
      },
      
      {
        id:3,
        name: "Daniel Atomo",
        grade: 12,
        image: "https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        subjects: ['Mathematics', 'Physics'],
      },
      
      {
        id:4,
        name: "Daniel Atomo",
        grade: 9,
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        subjects: ['Accounting', 'Economics'],
      },

      {
        id:5,
        name: "Clarabell Atomo",
        grade: 11,
        image: "https://images.unsplash.com/photo-1615529609972-1864841e3da3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        subjects: ['Mathematics', 'Physics'],  
      },
      
      { 
        id:6,
        name: "Aaron Atomo",
        grade: 8,
        image: "https://images.unsplash.com/photo-1513152697235-fe74c283646a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        subjects: ['Accounting', 'Economics'],
      },
      
      {
        id:7,
        name: "Daniel Atomo",
        grade: 10,
        image: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=600",
        subjects: ['LifeSciences', 'Geography'],
      },
      
      {
        id:8,
        name: "Daniel Atomo",
        grade: 12,
        image: "https://images.unsplash.com/photo-1620000617482-821324eb9a14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        subjects: ['IT', 'Mathematics']
      }
]
export default TeachersData

export const  UpcomingEvents =[
  {
    title: 'Parents and Teachers Association',
    date: 'Tuesday, August 29, 2023',
    img: <RiParentLine size={24}/>,
  },

  {
    title: 'Culture Day',
    date: 'Friday, August 31, 2023',
    img: <GiAfrica size={24}/>,
  },

  {
    title: 'Speech and Prize Giving Day',
    date: 'Wednesday, November 19, 2023',
    img: <GiTrophy size={24}/>,
  },

  {
    title: 'Sports Day',
    date: 'Thursday, September 08, 2023',
    img: <MdOutlineSportsBaseball size={24}/>,
  },

]


export const OpenPosts = [
  {
    title: 'Project Manager',
    number: 2,
    candidates: 10,
    percantage: 75,
    color: 'orange',
  },

  {
    title: 'Content Manager',
    number: 3,
    candidates: 7,
    percantage: 50,
    color: '',
  },

  {
    title: 'Senior UI/UX Designer',
    number: 1,
    candidates: 3,
    percantage: 0,
    color: '',
  },

  {
    title: 'JavaScript Developer',
    number: 8,
    candidates: 21,
    percantage: 65,
    color: 'green',
  }
]

export const CalenderEvents = [

{
  task1: 'Tech interview',
  task2: 'Resume review',
  date: "02 September",
  title1: 'UX Designer',
  title2: 'Node js Developer',
  time1: '09:00',
  time2: '10:00',
},

{
  task1: 'Send test task',
  task2: 'Meeting',
  task3: 'Final interview',
  date: "11 September",
  title1: 'QA Engineer',
  title2: 'Front-end Developer',
  title3: 'Back-end Developer',
  time1: '09:00',
  time2: '11:00',
  time3: '13:00',
},

{
  task1: 'Platform concept',
  task2: '2 posts for instagram',
  date: "20 September",
  title1: 'UI Designer',
  title2: 'Marketing',
  time1: '08:30',
  time2: '10:00',
},

]

export const Candidates = [
  {
    name: "Clarabell Atomo",
    title: '.Net Developer',
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },

  {
    name: "Estella Mills",
    title: 'Middle Copywriter',
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },

  {
    name: "Vera Romirez",
    title: 'Business Analyst',
    image: "https://plus.unsplash.com/premium_photo-1675461588230-732ec738a0f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },

  {
    name: "Adela Simpson",
    title: 'Front-end Developer',
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  
  {
    name: "Milla Medina",
    title: 'Android Developer',
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },

  {
    name: "Collin Bush",
    title: 'Project Manager',
    image: "https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  
]


export const StudentGroupData = [
  {
      numberOfTeachers: 3,
      numberOfStudents: 20,
      img1: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img2: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img3: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      student1: 'P',
      student2: "C",
      student3:"S",
  },
  {
      numberOfTeachers: 3,
      numberOfStudents: 20,
      img1: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img2: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img3: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      student1: 'P',
      student2: "C",
      student3:"S",
  },
  {
      numberOfTeachers: 3,
      numberOfStudents: 20,
      img1: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img2: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img3: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      student1: 'P',
      student2: "C",
      student3:"S",
  },
  {
      numberOfTeachers: 3,
      numberOfStudents: 20,
      img1: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img2: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img3: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      student1: 'P',
      student2: "C",
      student3:"S",
  },
  {
      numberOfTeachers: 3,
      numberOfStudents: 20,
      img1: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img2: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img3: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      student1: 'P',
      student2: "C",
      student3:"S",
  },
  {
      numberOfTeachers: 3,
      numberOfStudents: 20,
      img1: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img2: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img3: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      student1: 'P',
      student2: "C",
      student3:"S",
  },
  {
      numberOfTeachers: 3,
      numberOfStudents: 20,
      img1: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img2: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img3: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      student1: 'P',
      student2: "C",
      student3:"S",
  },
  {
      numberOfTeachers: 3,
      numberOfStudents: 20,
      img1: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img2: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img3: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      student1: 'P',
      student2: "C",
      student3:"S",
  },
  {
      numberOfTeachers: 3,
      numberOfStudents: 20,
      img1: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img2: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img3: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      student1: 'P',
      student2: "C",
      student3:"S",
  },
  {
      numberOfTeachers: 3,
      numberOfStudents: 20,
      img1: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img2: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img3: "https://plus.unsplash.com/premium_photo-1690579805273-fd0c7b08035d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      student1: 'P',
      student2: "C",
      student3:"S",
  },
]
