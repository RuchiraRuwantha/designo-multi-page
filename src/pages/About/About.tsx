import AboutTile from "./aboutUsTiles/AboutTile";
import LocationComponent from "../../components/common/locationTile/LocationsComponent";
import useBreakpoint from "../../hooks/useBreakPoint";
import { imageMap } from "../../utils/imageMap";
import type { Breakpoint, ImageKey } from "../../types";

const About = () => {

    const breakPoint: Breakpoint = useBreakpoint();

    const getImage = (imageName: ImageKey) => {
        return imageMap[imageName]?.[breakPoint]
    };
    return (
        <div className="flex flex-col lg:gap-32 sm:gap-28 mb-12 sm:pb-[350px] 2xl:pb-[350px] lg:pb-60 pb-60">
            <AboutTile
                bgImage={breakPoint === "mobile" ? '/images/about-us-mobile-bg.png' : '/images/about-us-bg.svg'}
                desc={<span>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</span>}
                imageURL={getImage('aboutus')}
                title="About Us"
            />
            <AboutTile
                bgImage={breakPoint === "mobile" ? '/images/deal-mobile-bg.png' : '/images/talent-bg.svg'}
                desc={<span>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.<br /><br />Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</span>}
                imageURL={getImage('talent')}
                title="World-class talent"
                flexReverse={true}
                fontStyleDark={true}
            />
            <LocationComponent />
            <AboutTile
                bgImage={breakPoint === "mobile" ? '/images/deal-mobile-bg.png' : '/images/deal-bg.svg'}
                desc={<span>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.<br /><br />We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</span>}
                imageURL={getImage('deal')}
                title="The real deal"
                fontStyleDark={true}
            />
        </div>
    );
}

export default About;