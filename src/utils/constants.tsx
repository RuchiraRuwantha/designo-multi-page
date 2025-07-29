import type { JSX } from "react";

import express from "../assets/images/express.svg";
import expressTablet from "../assets/images/express-tablet.svg";
import transfer from "../assets/images/transfer.svg";
import transferTablet from "../assets/images/transfer-tablet.svg";
import blogr from "../assets/images/blogr.svg";
import blogrTablet from "../assets/images/blogr-tablet.svg";
import camp from "../assets/images/camp.svg";
import campTablet from "../assets/images/camp-tablet.svg";
import photon from "../assets/images/photon.svg";
import photonTablet from "../assets/images/photon-tablet.svg";
import builder from "../assets/images/builder.svg";
import builderTablet from "../assets/images/builder-tablet.svg";

import airfilter from "../assets/images/airfilter.svg";
import airfilterTablet from "../assets/images/airfilter-tablet.svg";
import eyecam from "../assets/images/eyecam.svg";
import eyecamTablet from "../assets/images/eyecam-tablet.svg";
import faceit from "../assets/images/faceit.svg";
import faceitTablet from "../assets/images/faceit-tablet.svg";
import todo from "../assets/images/todo.svg";
import todoTablet from "../assets/images/todo-tablet.svg";
import loopstudios from "../assets/images/loopstudios.svg";
import loopstudiosTablet from "../assets/images/loopstudio-tablet.svg";

import timBrown from "../assets/images/tim-brown.svg";
import timBrownTablet from "../assets/images/tim-brown-tablet.svg";
import boxedWater from "../assets/images/boxed-water.svg";
import boxedWaterTablet from "../assets/images/boxed-water-tablet.svg";
import science from "../assets/images/science.svg";
import scienceTablet from "../assets/images/science-tablet.svg";

import canada from "../assets/images/canada.svg";
import uk from "../assets/images/uk.svg";
import australia from "../assets/images/australia.svg";

export const Pages: {
    title: string;
    href: string;
}[] = [
        {
            title: 'OUR COMPANY',
            href: '/about'
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
    image_tablet: string;
}
export const WebDesignContent: ContentProps[] = [
    {
        title: 'EXPRESS',
        desc: <span>A multi- carrier shipping website for<br />ecommerce businesses</span>,
        image: express,
        image_tablet: expressTablet
    },
    {
        title: 'TRANSFER',
        desc: <span>Site for low-cost money transfers and <br />sending money within seconds</span>,
        image: transfer,
        image_tablet: transferTablet
    },
    {
        title: 'PHOTON',
        desc: <span>A state-of-the-art music player with <br />high-resolution audio and DSP effects</span>,
        image: photon,
        image_tablet: photonTablet
    },
    {
        title: 'BUILDER',
        desc: <span>Connects users with local contractors<br /> based on their location</span>,
        image: builder,
        image_tablet: builderTablet
    },
    {
        title: 'BLOGR',
        desc: <span>Blogr is a platform for creating an online<br /> blog or publication</span>,
        image: blogr,
        image_tablet: blogrTablet
    },
    {
        title: 'CAMP',
        desc: <span>Get expert training in coding, data,<br /> design, and digital marketing</span>,
        image: camp,
        image_tablet: campTablet
    }
]

export const appDesignContent: ContentProps[] = [
    {
        title: 'AIRFILTER',
        desc: <span>Solving the problem of poor indoor air<br />quality by filtering the air</span>,
        image: airfilter,
        image_tablet: airfilterTablet
    },
    {
        title: 'EYECAM',
        desc: <span>Product that lets you edit your favorite<br />photos and videos at any time</span>,
        image: eyecam,
        image_tablet: eyecamTablet
    },
    {
        title: 'FACEIT',
        desc: <span>Get to meet your favorite internet <br />superstar with the faceit app</span>,
        image: faceit,
        image_tablet: faceitTablet
    },
    {
        title: 'TODO',
        desc: <span>A todo app that features cloud sync with <br />light and dark mode</span>,
        image: todo,
        image_tablet: todoTablet
    },
    {
        title: 'LOOPSTUDIOS',
        desc: <span>A VR experience app made for<br /> Loopstudios</span>,
        image: loopstudios,
        image_tablet: loopstudiosTablet
    }
]

export const graphicDesignContent: ContentProps[] = [
    {
        title: 'TIM BROWN',
        desc: <span>A book cover designed for Tim Brown’s <br />new release, ‘Change’</span>,
        image: timBrown,
        image_tablet: timBrownTablet
    },
    {
        title: 'BOXED WATER',
        desc: <span>A simple packaging concept made for <br />Boxed Water</span>,
        image: boxedWater,
        image_tablet: boxedWaterTablet
    },
    {
        title: 'SCIENCE!',
        desc: <span>A poster made in collaboration with the<br />Federal Art Project</span>,
        image: science,
        image_tablet: scienceTablet
    }
]

export type LocationContentProps = {
    country: string;
    imageUrl: string;
}
export const LocationContent: LocationContentProps[] = [
    {
        country: 'CANADA',
        imageUrl: canada,
    },
    {
        country: 'AUSTRALIA',
        imageUrl: australia,
    },
    {
        country: 'UK',
        imageUrl: uk,
    }
]