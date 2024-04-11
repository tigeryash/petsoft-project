import { Button } from "./ui/button";

type PetFormBtnProps = {
  actionType: "add" | "edit";
};

const PetFormBtn = ({ actionType }: PetFormBtnProps) => {
  return (
    <Button className="mt-5 self-end" type="submit">
      {actionType === "add" ? "Add a new pet" : "Edit Pet"}
    </Button>
  );
};

export default PetFormBtn;
