import { serviceLinks } from '../constants';
import Heading from './Heading';

const Services = () => (
  <div className="pageWidth">
    <Heading
      subText={'What We Do'}
      headerText={'Safe & Reliable Cargo Solutions'}
    />
    <div className="flex flex-col md:flex-row gap-8">
      {serviceLinks.map((link) => (
        <div key={link.name} className="flex items-start gap-4 md:gap-8">
          <img
            src={link.icon}
            alt={link.name}
            className="w-[30px] object-contain"
          />
          <div>
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
