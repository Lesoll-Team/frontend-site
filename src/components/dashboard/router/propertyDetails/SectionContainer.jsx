const SectionContainer = ({ children, style }) => {
  return (
    <div className={`w-[100%] bg-white h-full p-3 py-5 rounded-lg ${style}`}>
      {children}
    </div>
  );
};
export default SectionContainer;
