interface FormLabelProps {
  id: string;
  labelText: string;
  isRequired?: boolean;
  className?: string;
}

const FormLabel = ({ id, labelText, isRequired = false, className }: FormLabelProps) => {
  return (
    <label className={["text-sm", className].filter(Boolean).join(" ")} htmlFor={id}>
      {labelText} {isRequired && <span className="text-danger font-bold">*</span>}
    </label>
  );
};

export default FormLabel;
