"use client";

import Button from "@/components/ui/button";
import IconButton from "@/components/ui/IconButton";
import { Color, Size } from "@/types";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { Fragment, useState } from "react";
import Filter from "./filter";

interface MobileFilterProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilter: React.FC<MobileFilterProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>
      <Dialog
        open={open}
        as="div"
        onClose={onClose}
        className="relative z-40 lg:hidden"
      >
        <DialogPanel className="relative ml-auto flex h-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
          <div className="relative flex h-full flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              {/* Close button */}
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>
            {/* Render the filters sidebar */}
            <div className="p-4">
              <Filter valueKey="sizeId" name="Size" data={sizes} />
              <Filter valueKey="colorId" name="Color" data={colors} />
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default MobileFilter;
