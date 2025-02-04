import * as React from "react";
import { X, Pencil, Facebook, Instagram, Linkedin } from "lucide-react";

import { Divider } from "./divider";
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
  const { name } = customer;

  if (!open) {
    return null;
  }

  return (
    <div>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b w-full justify-between p-4">
        {customer?.name}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={onEdit}
          >
            <Pencil />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={onClose}
          >
            <X />
          </Button>
        </div>
      </header>

      <div className="p-4 flex flex-col gap-4">
        <UserAvatar
          name={name}
          className="h-14 w-14 rounded-full"
          src="https://ui.shadcn.com/avatars/shadcn.jpg"
        />

        <TextOutputInfo label="Email" description="johndoe@example.com" />

        <Divider />

        <TextOutputInfo label="Phone" description="1234567890" />

        <Divider />

        <TextOutputInfo label="Age" description="24" />

        <Divider />

        <TextOutputInfo label="Dni" description="96876567" />

        <Divider />

        <div className="flex flex-col items-start gap-1">
          <span className="text-sm font-medium">Social</span>

          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost" className="rounded-full">
              <Facebook />
            </Button>

            <Button size="icon" variant="ghost" className="rounded-full">
              <Instagram />
            </Button>

            <Button size="icon" variant="ghost" className="rounded-full">
              <Linkedin />
            </Button>
          </div>
        </div>

        <Divider />

        <TextOutputInfo label="Created At" description="2023-01-01" />
      </div>
    </div>
  );
};
