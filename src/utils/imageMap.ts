import aboutus from "../assets/images/about-us.svg";
import aboutusTablt from "../assets/images/about-us-tablet.svg";
import aboutusMobile from "../assets/images/about-us-mobile.png";
import talent from "../assets/images/talent.svg";
import talentTablt from "../assets/images/talent-tablet.svg";
import talentMobile from "../assets/images/talent-mobile.png";
import deal from "../assets/images/deal.svg";
import dealTablt from "../assets/images/deal-tablet.svg";
import dealMobile from "../assets/images/deal-mobile.png";

import type { Breakpoint, ImageKey } from "../types";

export const imageMap: Record<ImageKey, Record<Breakpoint, string>> = {
    aboutus: {
        desktop: aboutus,
        tablet: aboutusTablt,
        mobile: aboutusMobile
    },
    talent: {
        desktop: talent,
        tablet: talentTablt,
        mobile: talentMobile
    },
    deal: {
        desktop: deal,
        tablet: dealTablt,
        mobile: dealMobile
    }
}