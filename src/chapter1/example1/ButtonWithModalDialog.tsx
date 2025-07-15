import React, { useState } from "react";
import Button from "./Button";
import ModalDialog from "./ModalDialog";

const ButtonWithModalDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("ButtonWithModalDialog");
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
      {isOpen ? (
        <ModalDialog
          onClose={() => setIsOpen(false)}
          content="Hello from modal"
        />
      ) : null}
    </>
  );
};

export default ButtonWithModalDialog;
