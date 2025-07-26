import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from '../components/layout/layout';
import Home from '../pages/Home/Home';
import AppDesign from '../pages/AppDesign/AppDesign';
import About from '../pages/About/About';
import Graphic from '../pages/Graphic/Graphic';
import Location from '../pages/Locations/Location';
import WebDesign from '../pages/WebDesign/WebDesign';
import Contact from "../pages/Contact/Contact";
import ScrollToTop from "../components/specific/ScrollToTop";

function AppRoutes() {
    return (
        <Router>
            <Layout>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/appdesign" element={<AppDesign />} />
                    <Route path="/webdesign" element={<WebDesign />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/graphic" element={<Graphic />} />
                    <Route path="/location" element={<Location />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default AppRoutes;