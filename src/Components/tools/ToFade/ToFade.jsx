import { Fade } from "@mui/material";
import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

export const ToFade = ({ children }) => {
  let [isVisible, setIsVisible] = useState(false);

  const handleVisible = (visible) => {
    setIsVisible(visible);
  };

  return (
    <VisibilitySensor partialVisibility onChange={handleVisible}>
      <Fade in={isVisible} timeout={1000}>
        {children}
      </Fade>
    </VisibilitySensor>
  );
};