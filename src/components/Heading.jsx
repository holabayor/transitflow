const Heading = ({ subText, headerText }) => (
  <div className="max-w-full sm:max-w-[400px] md:max-w-[570px]">
    <div className="w-[4px] yellow__gradient h-[25px] absolute"></div>
    <span className="px-4 py-2 bg-[#041c37] bg-opacity-50 text-white text-[14px]">
      {subText}
    </span>
    <h3 className="font-bold font-rubik text-dimBlack text-[32px] sm:text-[40px] md:text-[48px] lg:text-[20px] leading-tight sm:leading-tight pt-2">
      {headerText}
    </h3>
  </div>
);

export default Heading;
