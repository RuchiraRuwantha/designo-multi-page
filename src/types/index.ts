import type { JSX } from "react";

export type ImageKey = 'aboutus' | 'talent' | 'deal';
export type Breakpoint = 'desktop' | 'tablet' | 'mobile';

export type Country = 'Canada' | 'Australia' | 'United Kingdom';
interface iAddressData {
    officeName: string,
    addressLine: JSX.Element
}

export interface iContact {
    phoneNumber: string,
    emailAddress: string
}

export interface iLocationData {
    country: Country,
    address: iAddressData,
    contactInfo: iContact
    mapPosition: [number, number]
}