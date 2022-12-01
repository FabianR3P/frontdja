import { Button } from "@material-tailwind/react";
export const ButtonApp = ({ onClick, label, type, variant, icon , className}) => {
  return (
    <div>
      <div>{icon}</div>
      <Button type={type} onClick={onClick} variant={variant} className={`${className}`}>
        {label}
      </Button>
    </div>
  );
};
