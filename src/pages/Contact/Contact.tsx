import LocationComponent from "../../components/common/locationTile/LocationsComponent";
import ContactForm from "./components/ContactForm";

const Contact = () => {
    return (
        <div className="flex flex-col lg:gap-32 sm:gap-[120px] gap-8 sm:pb-[350px] pb-10">
            <ContactForm />
            <LocationComponent />
        </div>
    );
}

export default Contact;