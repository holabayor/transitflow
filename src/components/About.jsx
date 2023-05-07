import { person, plane } from '../assets';
import { aboutLinks, serviceLinks } from '../constants';
import Heading from './Heading';
import ListItem from './ListItem';

const About = () => (
  <section className="flex p-4 md:p-10 justify-between max-w-[700px]">
    <div className=" flex flex-1 flex-col">
      <Heading
        subText={'Why Us'}
        headerText={'We provide full range global logistics solution'}
      />
      <p className="text-dimGray text-[10px] md:text-[12px] pr-6 py-2 md:py-4">
        Leverage agile frameworks to provide a robust synopsis for strategy
        foster collaborative thinking to further the overall value proposition.
        <br />
        <br />
        Organically grow the holistic world view of disruptive innovation via
        workplace diversity and empowerment.
      </p>
      <ListItem list={aboutLinks} />
    </div>
    <div className="hidden sm:flex flex-1">
      <img src={plane} alt="plane" className="w-full object-contain" />
      <div className="relative z-10">
        <img
          src={person}
          alt="person"
          className="max-w-[200px] absolute -bottom-10 right-[250px] border-[14px] border-white"
        />
      </div>
    </div>
  </section>
);

export default About;
