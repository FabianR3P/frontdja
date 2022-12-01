import { Select, Option } from "@material-tailwind/react";

export const SelectApp = ({ label, options, onChange, id}) => {

  return (
    <div className="w-72">
      <select
        label={label}
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
        id={id}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.id}>{ option.name
           }</option>
        ))}
      </select>
    </div>
  );
};
