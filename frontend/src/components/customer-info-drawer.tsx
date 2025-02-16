import * as React from "react";
import { X, Pencil, Facebook, Instagram, Linkedin } from "lucide-react";

import { Separator } from "./ui/separator";
import { UserAvatar } from "./user-avatar";
import { Customer } from "@/providers/generate";
import { Button } from "@/components/ui/button";
import { TextOutputInfo } from "./text-output-info";

interface CustomerInfoDrawerModel {
  open: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  onEdit: React.MouseEventHandler<HTMLButtonElement>;
  customer: Customer;
}

export const CustomerInfoDrawer: React.FC<CustomerInfoDrawerModel> = ({
  customer,
  onClose,
  onEdit,
  open,
}) => {
  const {
    firstName,
    email,
    age,
    createdAt,
    dni,
    lastName,
    phone,
    facebook,
    instagram,
    linkedin,
  } = customer;

  if (!open) {
    return null;
  }

  return (
    <div>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b w-full justify-between p-4">
        {customer?.firstName}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onEdit}
          >
            <Pencil />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
          >
            <X />
          </Button>
        </div>
      </header>

      <div className="p-4 flex flex-col gap-4">
        <UserAvatar
          name={`${firstName} ${lastName}`}
          className="h-20 w-20 rounded-full"
          src="https://ui.shadcn.com/avatars/shadcn.jpg"
        />

        <TextOutputInfo label="Name" description={firstName} />

        <Separator />

        <TextOutputInfo label="Last Name" description={lastName} />

        <Separator />

        <TextOutputInfo label="Email" description={email} />

        <Separator />

        <TextOutputInfo label="Phone" description={phone} />

        <Separator />

        <TextOutputInfo label="Age" description={`${age}`} />

        <Separator />

        <TextOutputInfo label="Dni" description={dni} />

        <Separator />

        <div className="flex flex-col items-start gap-1">
          <span className="text-sm font-medium">Social</span>

          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full"
              onClick={() => {
                window.open(facebook, "_blank");
              }}
            >
              <Facebook />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="rounded-full"
              onClick={() => {
                window.open(instagram, "_blank");
              }}
            >
              <Instagram />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="rounded-full"
              onClick={() => {
                window.open(linkedin, "_blank");
              }}
            >
              <Linkedin />
            </Button>
          </div>
        </div>

        <Separator />

        <TextOutputInfo
          label="Created At"
          description={createdAt ?? new Date().toLocaleDateString()}
        />
      </div>
    </div>
  );
};
