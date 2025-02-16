import * as React from "react";
import { Plus, ListFilter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Customer } from "@/providers/generate";
import { ContentLayout } from "@/layout/content";
import { BaseUseDrawer, useDrawer } from "@/hooks/use-drawer";
import { SearchInput } from "@/components/templates/search-input";
import { CustomerInfoDrawer } from "@/components/customer-info-drawer";
import { CustomerFormDrawer } from "@/components/customer-form-drawer";
import { CustomersGridWrapper } from "@/components/customers-grid-wrapper";

const customers: Customer[] = [
  {
    id: 1,
    firstName: "Jhon",
    lastName: "Doe",
    email: "jhon@example.com",
    phone: "1234567890",
    age: 24,
    dni: "96876567",
    createdAt: "2023-01-01",
    facebook: "https://www.facebook.com/jhon.doe",
    instagram: "https://www.instagram.com/jhon.doe",
    linkedin: "https://www.linkedin.com/jhon.doe",
  },
  {
    id: 2,
    firstName: "Jhon",
    lastName: "Doe",
    email: "jhon@example.com",
    phone: "1234567890",
    age: 45,
    dni: "96876567",
    createdAt: "2023-01-01",
    facebook: "https://www.facebook.com/jhon.doe",
    instagram: "https://www.instagram.com/jhon.doe",
    linkedin: "https://www.linkedin.com/jhon.doe",
  },
  {
    id: 3,
    firstName: "Oscar",
    lastName: "Cerron Juarez",
    email: "jhon@example.com",
    phone: "1234567890",
    age: 28,
    dni: "96876567",
    createdAt: "2023-01-01",
    facebook: "https://www.facebook.com/jhon.doe",
    instagram: "https://www.instagram.com/jhon.doe",
    linkedin: "https://www.linkedin.com/jhon.doe",
  },
  {
    id: 4,
    firstName: "Emilio",
    lastName: "Gonzales Pachas",
    email: "jhon@example.com",
    phone: "1234567890",
    age: 42,
    dni: "96876567",
    createdAt: "2023-01-01",
    facebook: "https://www.facebook.com/jhon.doe",
    instagram: "https://www.instagram.com/jhon.doe",
    linkedin: "https://www.linkedin.com/jhon.doe",
  },
];

export const CustomersPage: React.FC = () => {
  const [customer, setCustomer] = React.useState<Customer | null>(null);
  const {
    showDrawer,
    handleCloseDrawer,
    handleOpenDrawer,
    handleCloseAllDrawer,
  } = useDrawer<BaseUseDrawer>(["form", "info"]);

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
                setCustomer(null);
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
        <>
          <CustomersGridWrapper
            customers={customers}
            onOpenDrawer={(customer) => {
              setCustomer(customer);
              handleCloseAllDrawer();
              handleOpenDrawer("info");
            }}
          />

          {/* <div className="flex flex-1 flex-col gap-4 p-4 h-full">
          <Button
            className="w-fit"
            onClick={() => {
              handleCloseAllDrawer();
              handleOpenDrawer("info");
            }}
          >
            OPEN DRAWER INFO
          </Button>

          <Button
            className="w-fit"
            variant="outline"
            onClick={() => {
              handleCloseAllDrawer();
              handleOpenDrawer("form");
            }}
          >
            OPEN DRAWER FORM
          </Button>
        </div> */}
        </>
      }
      aside={
        <>
          {customer ? (
            <CustomerInfoDrawer
              open={info}
              customer={customer}
              onEdit={() => {
                handleCloseAllDrawer();
                handleOpenDrawer("form");
              }}
              onClose={() => {
                handleCloseDrawer("info");
              }}
            />
          ) : null}

          {form ? (
            <CustomerFormDrawer
              open={form}
              customer={customer ?? undefined}
              onClose={() => {
                handleCloseDrawer("form");
              }}
            />
          ) : null}
        </>
      }
    />
  );
};
