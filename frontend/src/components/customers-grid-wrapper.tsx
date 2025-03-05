import * as React from "react";

import { Customer } from "@/providers/generate";
import { UserCard } from "./templates/customer-card";

interface CustomersGridWrapperModel {
  customers: Customer[];
  onOpenDrawer: (customer: Customer) => void;
}

export const CustomersGridWrapper: React.FC<CustomersGridWrapperModel> = ({
  customers,
  onOpenDrawer,
}) => (
  <div className="grid grid-cols-[repeat(auto-fill,minmax(min(220px,100%),1fr))] gap-4 p-4">
    {customers.map((customer) => {
      const { id, firstName, lastName, email } = customer;

      return (
        <UserCard
          key={id}
          firstName={firstName}
          lastName={lastName}
          email={email}
          avatar="/avatars/shadcn.jpg"
          onClick={() => {
            onOpenDrawer(customer);
          }}
        />
      );
    })}
  </div>
);
