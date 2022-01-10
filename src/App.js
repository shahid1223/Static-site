import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import AboutUs from './Component/About/AboutUs';
import ContactForm from './Component/ContactUs/ContactForm';
import LastFooter from './Component/Footer/LastFooter';
import Gallery from './Component/Gallery/Gallery';
import { Header } from "./Component/Header";
import Services from './Component/Services/Services';
import Index from './Component/index';
import DataContext from './Component/Context/DataContext';
import Login from './Component/Admin/Login';
import Dashboard from './Component/Admin/Dashboard';
import AdminCrousal from './Component/Admin/AdminCrousal';


const App = () => {
  let location = useLocation();
  return (
    <>
      <DataContext>
        {location.pathname === "/login" ? null : <Header />}
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/contactus" element={<ContactForm />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/admindashboard" element={<Dashboard />} />
          <Route exact path="/admincrousal" element={<AdminCrousal />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
        {location.pathname === "/login" ? null : <LastFooter />}
      </DataContext>
    </>
  );
}

export default App;
