// import Head from "next/head";
// import { Col, Row } from "reactstrap";
// // import SalesChart from "../src/components/dashboard/SalesChart";
// // import Feeds from "../src/components/dashboard/Feeds";
// // import ProjectTables from "../src/components/dashboard/ProjectTable";
// // import TopCards from "../src/components/dashboard/TopCards";
// // import Blog from "../src/components/dashboard/Blog";
// // import bg1 from "../src/assets/images/bg/bg1.jpg";
// // import bg2 from "../src/assets/images/bg/bg2.jpg";
// // import bg3 from "../src/assets/images/bg/bg3.jpg";
// // import bg4 from "../src/assets/images/bg/bg4.jpg";


// import React from 'react'
// import {
//   CCol,
//   CRow,
//   CWidgetStatsF,
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import {
//   cilAddressBook,
//   cilArrowRight,
//   cilApps,
//   cilCart,
//   cilGroup,

// } from '@coreui/icons'


// import { Link } from 'react-router-dom'

// const dashboard_widget = [

//   {
//     cardTitle: 'Billing',
//     footerText: 'View',
//     cardRoute: 'billing',
//     icon: cilAddressBook,
//   },

//   {
//     cardTitle: 'Users and Admin',
//     footerText: 'View',
//     cardRoute: 'usersadmin',
//     icon: cilGroup,
//   },

//   {
//     cardTitle: 'Patients',
//     footerText: 'View',
//     cardRoute: 'patients',
//     icon: cilGroup,
//   },

//   {
//     cardTitle: 'Invoice',
//     footerText: 'View',
//     cardRoute: 'invoice',
//     icon: cilGroup,
//   },

//   {
//     cardTitle: 'Customers',
//     footerText: 'View',
//     cardRoute: 'customer',
//     icon: cilGroup,
//   },

//   {
//     cardTitle: 'Medical Record Form',
//     footerText: 'View',
//     cardRoute: 'medicalrecord',
//     icon: cilAddressBook,
//   },
//   {
//     cardTitle: 'Medical Record Closed Chart',
//     footerText: 'View',
//     cardRoute: 'closedchart',
//     icon: cilCart,
//   },  
// ]



// // const BlogData = [
// //   {
// //     image: bg1,
// //     title: "This is simple blog",
// //     subtitle: "2 comments, 1 Like",
// //     description:
// //       "This is a wider card with supporting text below as a natural lead-in to additional content.",
// //     btnbg: "primary",
// //   },
// //   {
// //     image: bg2,
// //     title: "Lets be simple blog",
// //     subtitle: "2 comments, 1 Like",
// //     description:
// //       "This is a wider card with supporting text below as a natural lead-in to additional content.",
// //     btnbg: "primary",
// //   },
// //   {
// //     image: bg3,
// //     title: "Don't Lamp blog",
// //     subtitle: "2 comments, 1 Like",
// //     description:
// //       "This is a wider card with supporting text below as a natural lead-in to additional content.",
// //     btnbg: "primary",
// //   },
// //   {
// //     image: bg4,
// //     title: "Simple is beautiful",
// //     subtitle: "2 comments, 1 Like",
// //     description:
// //       "This is a wider card with supporting text below as a natural lead-in to additional content.",
// //     btnbg: "primary",
// //   },
// // ];

// export default function Home() {
//   return (
//     // <div>
//     //   <Head>
//     //     <title>Ample Admin Next Js Free Aadmin Dashboard</title>
//     //     <meta
//     //       name="description"
//     //       content="Blufountain Educate"
//     //     />
//     //     <link rel="icon" href="/favicon.ico" />
//     //   </Head>

//     <CRow>
//       {dashboard_widget.map((widget, i) =>{
//         return (
          
//       <CCol xs={6} md={4} xl={3} > 
//           <div key={i} style={{ paddingTop: '20px' }}>
//             <CWidgetStatsF
//               className="mb-3"
//               color="primary"
//               to={`/${widget.cardRoute}`}
//               footer={
//                 <Link to={`/${widget.cardRoute}`}>
//                   {widget.footerText}
//                   <CIcon icon={cilArrowRight} className="float-end" width={16} />
//                 </Link>
//               }
//               icon={<CIcon icon={widget.icon || cilApps} height={24} />}
//               title={widget.cardTitle}
//             />
//           </div>
//           </CCol>
          
//         )
//       })}
    
//     </CRow>
//   );
// }


import React from 'react'
import {
  CCol,
  CRow,
  CWidgetStatsF,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilAddressBook,
  cilArrowRight,
  cilApps,
  cilCart,
  cilGroup,

} from '@coreui/icons'

import Link from "next/link";
import { useRouter } from "next/router";
// import { Link } from 'react-router-dom'

const Home = () => {

  let curl = useRouter();
  const location = curl.pathname;

  const dashboard_widget = [

    {
      cardTitle: 'Teachers',
      footerText: 'View',
      href: "/ui/teachers",
      icon: cilAddressBook,
    },


    {
      cardTitle: 'Students',
      footerText: 'View',
      href: "/ui/students",
      icon: cilGroup,
    },

    {
      cardTitle: 'Courses',
      footerText: 'View',
      href: "/about",
      icon: cilGroup,
    },

    {
      cardTitle: 'Student Groups',
      footerText: 'View',
      href: "/ui/tables",
      icon: cilGroup,
    },

    {
      cardTitle: 'HR Management',
      footerText: 'View',
      href: "/ui/humanResource",
      icon: cilGroup,
    },

    {
      cardTitle: 'About',
      footerText: 'View',
      href: "/ui/tables",
      icon: cilAddressBook,
    },
 
  ]

  return (
    <CRow>
      {dashboard_widget.map((widget, i) =>{
        return (
          
      <CCol xs={6} md={4} xl={3} > 
          <div key={i} style={{ paddingTop: '20px' }}>
            <CWidgetStatsF
              className="mb-3"
              color="primary"
              to={`/${widget.href}`}
              footer={
                // <a  href= {{pathname: `/${widget.cardRoute}`}}>
                //   {widget.footerText}
                //   <CIcon icon={cilArrowRight} className="float-end" width={16} />
                // </a>

                <Link href={widget.href}>
                <a>
                  {widget.footerText}
                  <CIcon icon={cilArrowRight} className="float-end" width={16} />
                  {/* <i className={widget.icon}></i> */}
                </a>
              </Link>
              }
              icon={<CIcon icon={widget.icon || cilApps} height={24} />}
              title={widget.cardTitle}
            />
          </div>
          </CCol>
          
        )
      })}
    
    </CRow>
    
  )
 
}

export default Home

