import { serviceLinks } from '../constants';
import Heading from './Heading';

const Services = () => (
  <section className="max-w-[800px] flex flex-col md:flex-row gap-x-4 p-4 md:p-8">
    <Heading
      subText={'What We Do'}
      headerText={'Safe & Reliable Cargo Solutions'}
    />
    <div className="flex flex-col sm:flex-row flex-wrap gap-x-4 ">
      {serviceLinks.map((link) => (
        <div
          key={link.name}
          className="flex items-start w-[60%] sm:max-w-[250px] my-4 md:mb-8 gap-4"
        >
          <img
            src={link.icon}
            alt={link.name}
            className="w-[30px] object-contain"
          />
          <div className="border-l-[1.5px] pl-2 md:pl-4 flex flex-col">
            <h6 className="font-rubik text-dimBlack font-medium text-[12px] md:text-[14px]">
              {link.header}
            </h6>
            <p className="text-dimGray text-[10px] md:text-[12px]">
              {link.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
