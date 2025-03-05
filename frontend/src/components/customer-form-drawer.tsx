import * as React from "react";
import { X } from "lucide-react";

import { Button } from "./ui/button";
import { FileDrop } from "./file-drop";
import { Separator } from "./ui/separator";
import { Customer } from "@/providers/generate";
import { InputLabelWrapper } from "./input-label-wrapper";
import { BaseDrawerTemplate } from "./templates/base-drawer";

interface CustomerInfoDrawerModel {
  open: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  customer?: Customer;
}

export const CustomerFormDrawer: React.FC<CustomerInfoDrawerModel> = (
  props
) => {
  const { customer, onClose } = props;

  const handleFileSelect = (file: File | null) => {
    if (file) {
      console.log("Selected file:", file);
      // Here you can handle the file, e.g., upload it to a server
    } else {
      console.log("File removed");
      // Here you can handle file removal, e.g., delete from server
    }
  };

  return (
    <BaseDrawerTemplate
      header={
        <>
          {customer?.id ? "Edit Customer" : "Add Customer"}

          <Button variant="ghost" size="icon" onClick={onClose}>
            <X />
          </Button>
        </>
      }
    >
      <form
        id="customer-form"
        className="pb-[72px] flex-1 flex flex-col gap-2"
        autoComplete="off"
      >
        <FileDrop onFileSelect={handleFileSelect} />

        <Separator />

        <InputLabelWrapper label="Name" name="name" placeholder="John" />

        <Separator />

        <InputLabelWrapper
          label="Last Name"
          name="lastName"
          placeholder="Doe"
        />

        <Separator />

        <InputLabelWrapper
          label="Email"
          name="email"
          type="email"
          placeholder="john@doe.com"
        />

        <Separator />

        <InputLabelWrapper
          label="Phone"
          name="phone"
          type="tel"
          placeholder="+5411240047678"
        />

        <Separator />

        <InputLabelWrapper
          label="Age"
          name="age"
          type="number"
          placeholder="27"
        />

        <Separator />

        <InputLabelWrapper label="Dni" name="dni" placeholder="97896756" />

        <Separator />

        <InputLabelWrapper
          label="Facebook"
          name="facebook"
          type="url"
          placeholder="https://facebook.com/johndoe"
        />

        <Separator />

        <InputLabelWrapper
          label="Instagram"
          name="instagram"
          type="url"
          placeholder="https://instagram.com/johndoe"
        />

        <Separator />

        <InputLabelWrapper
          label="Linkedin"
          name="linkedin"
          type="url"
          placeholder="https://linkedin.com/johndoe"
        />
      </form>

      <footer className="w-[-webkit-fill-available] bottom-0 bg-white">
        <Button className="w-full" size="lg" type="submit" form="customer-form">
          Save
        </Button>
      </footer>
    </BaseDrawerTemplate>
  );
};
