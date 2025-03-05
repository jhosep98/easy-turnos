import * as React from "react";

interface SpecialistInfoDrawerModel {
  open: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  onEdit: React.MouseEventHandler<HTMLButtonElement>;
  specialist: Specialist;
}

export const SpecialistInfoDrawer: React.FC<SpecialistInfoDrawerModel> = ({
  open,
  onClose,
  onEdit,
  specialist,
}) => {
  return <div>specialists-info-drawer:React.FC</div>;
};
