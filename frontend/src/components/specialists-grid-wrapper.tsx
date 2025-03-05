import * as React from "react";

import { Specialist } from "@/providers/generate";
import { UserCard } from "./templates/customer-card";

interface SpecialistsGridWrapperModel {
  specialists: Specialist[];
  onOpenDrawer: (customer: Specialist) => void;
}

export const SpecialistsGridWrapper: React.FC<SpecialistsGridWrapperModel> = ({
  specialists,
  onOpenDrawer,
}) => (
  <div className="grid grid-cols-[repeat(auto-fill,minmax(min(220px,100%),1fr))] gap-4 p-4">
    {specialists.map((specialist) => {
      const { id, firstName, lastName, email, image, specialty } = specialist;

      return (
        <UserCard
          key={id}
          firstName={firstName}
          lastName={lastName}
          email={email}
          avatar={image?.url ?? "/avatars/shadcn.jpg"}
          variant="column"
          specialist={specialty}
          onClick={() => {
            onOpenDrawer(specialist);
          }}
        />
      );
    })}
  </div>
);
