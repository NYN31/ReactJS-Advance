import { useState } from "react";
import BunchOfStaff from "./BunchOfStaff";
import Button from "./Button";
import ButtonWithModalDialog from "./ButtonWithModalDialog";
import OtherStuffAlsoComplicated from "./OtherStuffAlsoComplicated";
import VerySlowComponent from "./VerySlowComponent";
import ModalDialog from "./ModalDialog";

function Chapter1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
      {/* state is used here */}
      {isOpen ? (
        <ModalDialog
          onClose={() => setIsOpen(false)}
          content="Hello from modal"
        />
      ) : null}
      <ButtonWithModalDialog />
      <VerySlowComponent />
      <BunchOfStaff />
      <OtherStuffAlsoComplicated />
    </>
  );
}

export default Chapter1;
