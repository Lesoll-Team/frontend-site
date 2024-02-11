const RadioBtn = ({ onClick, active, title }) => {
  return (
    <button type="button" className="flex gap-1 items-center" onClick={onClick}>
      {" "}
      <span className="border-2 w-4 h-4 p-[2px] rounded-full">
        {active && (
          <div className="h-full w-full rounded-full bg-blue-600"></div>
        )}
      </span>
      {title}
    </button>
  );
};
export default RadioBtn;
