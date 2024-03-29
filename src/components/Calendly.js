import React from "react";
import { PopupWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className="Calendly">
      <PopupWidget
        url="https://calendly.com/mahdi-saqqa/online-meeting"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#00a2ff"
      />
    </div>
  );
};

export default Calendly;