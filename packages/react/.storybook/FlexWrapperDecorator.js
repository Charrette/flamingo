import React from "react";

const FlexWrapperDecorator = storyFn => (
  <div
    style={{
      display: "flex",
      width: "100vw",
      minHeight: "100vh",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}
  >
    {storyFn()}
  </div>
);

export default FlexWrapperDecorator;
