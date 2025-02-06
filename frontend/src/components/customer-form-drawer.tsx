import * as React from "react";
import { X } from "lucide-react";

import { Button } from "./ui/button";
import { Customer } from "@/providers/generate";
import { InputLabelWrapper } from "./input-label-wrapper";

interface CustomerInfoDrawerModel {
  open: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  customer?: Customer;
}

export const CustomerFormDrawer: React.FC<CustomerInfoDrawerModel> = (
  props
) => {
  const { customer, onClose } = props;

  return (
    <div className="flex flex-col relative">
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b w-full justify-between p-4">
        {customer?.id ? "Edit Customer" : "Add Customer"}
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7"
          onClick={onClose}
        >
          <X />
        </Button>
      </header>

      <div className="p-4 flex flex-col gap-6 divide-y">
        <InputLabelWrapper label="Image" name="profile" type="file" />

        <InputLabelWrapper label="Name" name="name" placeholder="John" />

        <InputLabelWrapper
          label="Last Name"
          name="lastName"
          placeholder="Doe"
        />

        <InputLabelWrapper
          label="Email"
          name="email"
          type="email"
          placeholder="john@doe.com"
        />

        <InputLabelWrapper
          label="Phone"
          name="phone"
          type="tel"
          placeholder="+5411240047678"
        />

        <InputLabelWrapper
          label="Age"
          name="age"
          type="number"
          placeholder="27"
        />

        <InputLabelWrapper label="Dni" name="dni" placeholder="97896756" />

        <InputLabelWrapper
          label="Facebook"
          name="facebook"
          type="url"
          placeholder="https://facebook.com/johndoe"
        />

        <InputLabelWrapper
          label="Instagram"
          name="instagram"
          type="url"
          placeholder="https://instagram.com/johndoe"
        />

        <InputLabelWrapper
          label="Linkedin"
          name="linkedin"
          type="url"
          placeholder="https://linkedin.com/johndoe"
        />
      </div>

      <footer className="p-4 pt-0">
        <Button className="w-full" size="lg">
          Save
        </Button>
      </footer>
    </div>
  );
};
