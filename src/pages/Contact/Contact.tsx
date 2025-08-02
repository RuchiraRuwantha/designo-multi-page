import LocationComponent from "../../components/common/locationTile/LocationsComponent";
import ContactForm from "./components/ContactForm";

const Contact = () => {
    return (
        <div className="flex flex-col lg:gap-32 sm:gap-[120px] gap-8 sm:pb-[350px] 2xl:pb-[350px] lg:pb-40 pb-10">
            <ContactForm />
            <LocationComponent />
        </div>
    );
}

export default Contact;