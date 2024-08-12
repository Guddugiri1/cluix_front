"use client"
import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import {
    Paper,
    Button,
    Typography,
    Grid
} from '@mui/material'

import "./HomeHeader.scss";
import Settings, { DefaultSettingsT, SettingsT } from './Setting';
import slider from '../../../../public/img/slider-header.gif';
import slider2 from '../../../../public/img/slider-header2.gif';
import Image  from 'next/image';
import VideoComponent from './VideoComponent';


const HomeHeaderComponents = () => {
    const [settings, setSettings] = useState(DefaultSettingsT);

    return (
        <div style={{ marginTop: "50px", color: "#494949" }}>
           
            <Carousel
                className="SecondExample"
                {...settings}

                indicators={false}

            >
                {
                    items.map((item, index) => {
                        return <Project item={item} key={index} />
                    })
                }
            </Carousel>
            <div className="SecondExample">
        <VideoComponent/>
        </div>
            {/* <Settings settings={settings} setSettings={setSettings} /> */}
        </div>
    )
}

 function Project({ item }) {
    return (
        <Paper style={{width:"50vw"}}
            className="Project"
           
            elevation={10}
        >
       
          
           <Image src={item.href} alt="slider img" height={"100%" } width={"100%"}/>
          
        </Paper>
    )
}

const items = [
    {
        name: "Lear Music Reader",
        description: "A PDF Reader specially designed for musicians.",
        description: "A PDF Reader specially designed for musicians.",
        color: "#64ACC8",
        href: slider
    },
    {
        name: "Hash Code 2019",
        description: "My Solution on the 2019 Hash Code by Google Slideshow problem.",
        color: "#7D85B1",
        href: slider2
    },
    {
        name: "Terrio",
        description: "A exciting mobile game game made in the Unity Engine.",
        color: "#CE7E78",
        href: slider
    },
    {
        name: "React Carousel",
        description: "A Generic carousel UI component for React using material ui.",
        color: "#C9A27E",
        href: slider2
    }
]

export default HomeHeaderComponents;
