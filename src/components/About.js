import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>Lorem ipsum dolor..</p>
      <Outlet />
    </div>
  );
};

export default About;
