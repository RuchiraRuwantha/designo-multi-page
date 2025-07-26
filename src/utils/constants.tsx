import type { JSX } from "react";

import express from "../assets/images/express.svg";
import transfer from "../assets/images/transfer.svg";
import blogr from "../assets/images/blogr.svg";
import camp from "../assets/images/camp.svg";
import photon from "../assets/images/photon.svg";
import builder from "../assets/images/builder.svg";

import airfilter from "../assets/images/airfilter.svg";
import eyecam from "../assets/images/eyecam.svg";
import faceit from "../assets/images/faceit.svg";
import todo from "../assets/images/todo.svg";
import loopstudios from "../assets/images/loopstudios.svg";

export const Pages: {
    title: string;
    href: string;
}[] = [
        {
            title: 'OUR COMPANY',
            href: '/'
        },
        {
            title: 'LOCATION',
            href: '/location'
        },
        {
            title: 'CONTACT',
            href: '/contact'
        }
    ]

export const designsPaths = {
    "webDesign": "/webdesign",
    "appDesign": "/appdesign",
    "graphicDesign": "/graphic"
}

export type ContentProps = {
    title: string;
    desc: JSX.Element;
    image: string;
}
export const WebDesignContent: ContentProps[] = [
    {
        title: 'EXPRESS',
        desc: <span>A multi- carrier shipping website for<br />ecommerce businesses</span>,
        image: express
    },
    {
        title: 'TRANSFER',
        desc: <span>Site for low-cost money transfers and <br />sending money within seconds</span>,
        image: transfer
    },
    {
        title: 'PHOTON',
        desc: <span>A state-of-the-art music player with <br />high-resolution audio and DSP effects</span>,
        image: photon
    },
    {
        title: 'BUILDER',
        desc: <span>Connects users with local contractors<br /> based on their location</span>,
        image: builder
    },
    {
        title: 'BLOGR',
        desc: <span>Blogr is a platform for creating an online<br /> blog or publication</span>,
        image: blogr
    },
    {
        title: 'CAMP',
        desc: <span>Get expert training in coding, data,<br /> design, and digital marketing</span>,
        image: camp
    }
]

export const appDesignContent: ContentProps[] = [
    {
        title: 'AIRFILTER',
        desc: <span>Solving the problem of poor indoor air<br />quality by filtering the air</span>,
        image: airfilter
    },
    {
        title: 'EYECAM',
        desc: <span>Product that lets you edit your favorite<br />photos and videos at any time</span>,
        image: eyecam
    },
    {
        title: 'FACEIT',
        desc: <span>Get to meet your favorite internet <br />superstar with the faceit app</span>,
        image: faceit
    },
    {
        title: 'TODO',
        desc: <span>A todo app that features cloud sync with <br />light and dark mode</span>,
        image: todo
    },
    {
        title: 'LOOPSTUDIOS',
        desc: <span>A VR experience app made for<br /> Loopstudios</span>,
        image: loopstudios
    }
]