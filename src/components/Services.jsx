import { serviceLinks } from '../constants';
import Heading from './Heading';

const Services = () => (
  <div className="max-w-[800px] flex flex-col md:flex-row gap-4 p-4 md:p-8">
    <Heading
      subText={'What We Do'}
      headerText={'Safe & Reliable Cargo Solutions'}
    />
    <div className="flex flex-col md:flex-row flex-wrap">
      {serviceLinks.map((link) => (
        <div
          key={link.name}
          className="flex items-start w-full sm:max-w-[250px] mb-2 md:mb-8 gap-4 md:gap-8"
        >
          <img
            src={link.icon}
            alt={link.name}
            className="w-[30px] object-contain"
          />
          <div className="border-l-[1.5px] pl-2 md:pl-4">
            <h6 className="font-rubik text-dimBlack font-medium text-[12px] md:text-[14px]">
              {link.header}
            </h6>
            <p className="text-dimGray text-[10px]">{link.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
