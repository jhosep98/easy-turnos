import * as React from "react";
import { Plus, X, ListFilter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Customer } from "@/providers/generate";
import { ContentLayout } from "@/layout/content";
import { BaseUseDrawer, useDrawer } from "@/hooks/use-drawer";
import { SearchInput } from "@/components/templates/search-input";
import { CustomerInfoDrawer } from "@/components/customer-info-drawer";
import { CustomersGridWrapper } from "@/components/customers-grid-wrapper";

const customers: Customer[] = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@example.com",
    phone: "1234567890",
  },
  {
    id: 2,
    name: "Jane Doe",
    username: "janedoe",
    email: "janedoe@example.com",
    phone: "0987654321",
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

  console.log("!!CUSTOMER: ", customer);

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
            <Button size="icon" className="h-7 w-7" variant="ghost">
              <ListFilter />
            </Button>

            <Button
              size="icon"
              className="h-7 w-7"
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
          {customer && (
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
          )}

          {form && (
            <>
              <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b w-full justify-between p-4">
                HEADER
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => {
                    handleCloseDrawer("form");
                  }}
                >
                  <X />
                </Button>
              </header>

              <div className="p-4">FORM</div>
            </>
          )}
        </>
      }
    />
  );
};
