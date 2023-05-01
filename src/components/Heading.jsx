const Heading = ({ subText, headerText }) => (
  <div className="w-full md:max-w-[200px] relative">
    <div className="w-[3px] yellow__gradient h-[20px] absolute top-[3%]"></div>
    <span className="px-2 py-1 font-rubik bg-[#e8e8e8] bg-opacity-50 text-dimBlack text-[10px]">
      {subText}
    </span>
    <h3 className="font-bold font-rubik text-dimBlack text-[16px] sm:text-[18px] lg:text-[20px] leading-tight pt-2">
      {headerText}
    </h3>
  </div>
);

export default Heading;
