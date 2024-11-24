import React from "react";
import { Dispatch, SetStateAction } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { MdClose } from "react-icons/md";

type PopUpPropsType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  emailError: boolean;
};

export const PopUp: React.FC<PopUpPropsType> = ({
  isOpen,
  setIsOpen,
  emailError,
}) => {
  function close() {
    setIsOpen(false);
  }
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={close}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto backdrop-blur-md bg-white/5">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="shadow-sm shadow-white w-full max-w-md rounded-xl bg-black/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <Button
              aria-label="close menu"
              className=" ml-auto py-1.5 text-sm/6 font-semibold text-white focus:shadow-sm hover:shadow-sm block focus:shadow-white hover:shadow-white rounded-lg px-2 transition-all duration-300"
              onClick={close}
            >
              <MdClose />
            </Button>
            {emailError ? (
              <>
                <DialogTitle
                  as="h3"
                  className="text-base/7 font-medium text-white text-center"
                >
                  Something went wrong!
                </DialogTitle>
                <p className="mt-2 text-sm/6 text-white/50 text-center">
                  Please try again!
                </p>
              </>
            ) : (
              <>
                <DialogTitle
                  as="h3"
                  className="text-base/7 font-medium text-white text-center"
                >
                  Thank you for contacting me!
                </DialogTitle>
                <p className="mt-2 text-sm/6 text-white/50 text-center">
                  I will be in touch as soon as possible!
                </p>
              </>
            )}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
