import When from "../When";

const ControlWrapper = ({
  label,
  name,
  error,
  touched,
  startAdornment,
  endAdornment,
  classes = {},
  children,
}) => {
  return (
    <div className={`w-full ${classes.container}`}>
      <When truthy={!!label}>
        <label
          htmlFor={name}
          className="block mb-[5px] font-bold text-right text-typography"
        >
          {label}
        </label>
      </When>
      <div className="relative">
        <When truthy={!!startAdornment}>
          <span className={`absolute right-2 top-1/2 -translate-y-1/2 text-mute leading-none ${classes.startAdornment}`}>
            {startAdornment}
          </span>
        </When>
        {children}
        <When truthy={!!endAdornment}>
          <span className={`absolute left-2 top-1/2 -translate-y-1/2 text-mute ${classes.endAdornment}`}>
            {endAdornment}
          </span>
        </When>
      </div>
      <When truthy={!!touched && !!error}>
        <p className="mt-2 font-medium text-right text-red-700">{error}</p>
      </When>
    </div>
  );
};

export default ControlWrapper;
