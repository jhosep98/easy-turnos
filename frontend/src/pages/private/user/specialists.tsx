import * as React from "react";
import { Plus, ListFilter } from "lucide-react";

import { useDrawer } from "@/hooks/use-drawer";
import { Button } from "@/components/ui/button";
import { ContentLayout } from "@/layout/content";
import { Specialist } from "@/providers/generate";
import { SearchInput } from "@/components/templates/search-input";
import { SpecialistFormDrawer } from "@/components/specialist-form-drawer";
import { SpecialistInfoDrawer } from "@/components/specialist-info-drawer";
import { SpecialistsGridWrapper } from "@/components/specialists-grid-wrapper";

const SPECIALISTS: Specialist[] = [
  {
    id: 1,
    firstName: "Jhon",
    lastName: "Doe",
    email: "jhon@example.com",
    phone: "1234567890",
    age: 24,
    dni: "96876567",
    specialty: "Specialist 1",
    createdAt: "2023-01-01",
    image: {
      url: "/avatars/shadcn.jpg",
    },
  },
  {
    id: 2,
    firstName: "Martin",
    lastName: "Vizcarra",
    email: "martin.g@example.com",
    phone: "1234567890",
    age: 45,
    dni: "96876567",
    specialty: "Specialist 2",
    createdAt: "2023-01-01",
    image: {
      url: "/avatars/shadcn.jpg",
    },
  },
  {
    id: 3,
    firstName: "Oscar",
    lastName: "Cerron Juarez",
    email: "jhon@example.com",
    phone: "1234567890",
    age: 28,
    dni: "96876567",
    specialty: "Specialist 3",
    createdAt: "2023-01-01",
    image: {
      url: "/avatars/shadcn.jpg",
    },
  },
  {
    id: 4,
    firstName: "Emilio",
    lastName: "Gonzales Pachas",
    email: "jhon@example.com",
    phone: "1234567890",
    age: 42,
    dni: "96876567",
    specialty: "Specialist 4",
    createdAt: "2023-01-01",
    image: {
      url: "/avatars/shadcn.jpg",
    },
  },
];

export const SpecialistsPage: React.FC = () => {
  const [specialist, setSpecialist] = React.useState<Specialist | null>(null);
  const {
    showDrawer,
    handleCloseDrawer,
    handleOpenDrawer,
    handleCloseAllDrawer,
  } = useDrawer<"form" | "info">(["form", "info"]);

  const { info, form } = showDrawer;

  return (
    <ContentLayout
      isOpenDrawer={info || form}
      subHeader={
        <div className="flex items-center justify-between w-full">
          <SearchInput
            placeholder="Search by name, email, or phone number"
            onSearch={(e) => {
              console.log(e);
            }}
          />

          <div className="flex items-center justify-center gap-2">
            <Button size="icon" variant="ghost">
              <ListFilter />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                handleCloseAllDrawer();
                handleOpenDrawer("form");
              }}
            >
              <Plus />
            </Button>
          </div>
        </div>
      }
      content={
        <SpecialistsGridWrapper
          specialists={SPECIALISTS}
          onOpenDrawer={(specialist) => {
            setSpecialist(specialist);
            handleCloseAllDrawer();
            handleOpenDrawer("info");
          }}
        />
      }
      aside={
        <>
          {info && specialist ? <SpecialistInfoDrawer /> : null}

          {form ? <SpecialistFormDrawer /> : null}
        </>
      }
    />
  );
};
