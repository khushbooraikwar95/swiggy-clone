import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h1>{title}</h1>
      {isVisible ? (
        <button
          className="cusrsor-pointer underline"
          onClick={() => setIsVisible(false)}
        >
          Hide
        </button>
      ) : (
        <button
          className="cusrsor-pointer underline"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");

  return (
    <div>
      <h1 className="text-3xl p-2 m-2 fornt-bols">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Everything you need gets delivered in minutes with Swiggy Instamart. Order now. Order fruits, veggies, milk, munchies & more online from Swiggy Instamart. Swiggy Instamart is the platform's quick – commerce vertical where it promises to deliver groceries and related items in a shorter period of time compared to conventional online grocers.Instant delivery. Fresh Products. Great deals. Door Step Delivery. Safe packing."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => setVisibleSection("about")}
      />
      <Section
        title={"Team Instamart"}
        description={
          "Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, Let's do this. Swiggy Instamart is the platform's quick – commerce vertical where it promises to deliver groceries and related items in a shorter period of time compared to conventional online grocers."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() => setVisibleSection("team")}
      />
      <Section
        title={"Careers"}
        description={
          "We build innovative products & solutions that deliver unparalleled convenience to urban consumers.The best part? Every bit of your work at Swiggy will help elevate the lives of our users across India. Swiggy Instamart is the platform's quick – commerce vertical where it promises to deliver groceries and related items in a shorter period of time compared to conventional online grocers."
        }
        isVisible={visibleSection === "career"}
        setIsVisible={() => setVisibleSection("career")}
      />
    </div>
  );
};

export default Instamart;
