// import sidebar data

import {
    Home,
    Call,
    Comment,
    Group,
    Timeline,
    MonetizationOn


} from "@material-ui/icons";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";
//sidebar data
export const SidebarData = [
    {
        icon:Home,
        heading:"dashboard",
    },
    {
        icon:Call,
        heading:"dashboard",
    },
    {
        icon:Group,
        heading:"dashboard",
    },
   
    {
        icon:Comment,
        heading:"dashboard",
    },
    {
        icon:Timeline,
        heading:"dashboard",
    },

   
]

export const  CardsData = [
    {
        title: "ALi",
        color: {
            background : "#76528BFF",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value:"BSSE",
        // png: MonetizationOn,
        series: [
            {
                name: "Ahmad",
                data: [31, 40, 39, 34, 108, 109],
            },
        ],
    },
    {
        title: "abdullah",
        color: {
            background : '#990011FF' ,
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 60,
        value:"BSSE",
        png: MonetizationOn,
        series: [
            {
                name: "Ali",
                data: [31, 40, 39, 34, 108, 109],
            },
        ],

    },
    {
        title: "Aqeel",
        color: {
            background : '#DAA03DFF',
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 96,
        value:"BSSE",
        png: MonetizationOn,
        series: [
            {
                name: "Sales",
                data: [31, 40, 39, 34, 108, 109],
            },
        ],

    }
] 

// Recent Update Card Data
export const UpdatesData = [
    {
      img: img1,
      name: "Andrew Thomas",
      des: "has ordered Apple smart watch 2500mh battery.",
      time: "25 seconds ago",
    },
    {
      img: img2,
      name: "James Bond",
      des: "has received Samsung gadget for charging battery.",
      time: "30 minutes ago",
    },
    {
      img: img3,
      name: "Iron Man",
      des: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
      time: "2 hours ago",
    },
  ];