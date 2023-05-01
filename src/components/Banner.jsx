import { headerbg } from '../assets';
import Button from './Button';

const Banner = () => (
  <>
    <div className="top-0 md:top-[-60px] flexCenter overflow-hidden relative">
      <img
        src={headerbg}
        alt=""
        className="absolute w-full h-full object-cover z-[-10]"
      />
      <div className="pageWidth z-10 py-8 sm:py-24 md:py-48">
        <div className="max-w-full sm:max-w-[400px] md:max-w-[570px]">
          <div className="w-[4px] yellow__gradient h-[25px] absolute"></div>
          <span className="px-4 py-2 bg-[#041c37] bg-opacity-50 text-white text-[14px]">
            Logistics & Supply Chain Solution
          </span>
          <h1 className="font-bold font-rubik text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] leading-tight sm:leading-tight pt-2">
            Your Gateway&nbsp;
            <br className="hidden sm:block" />
            to any Destination&nbsp;
            <br className="hidden sm:block" />
            in the World
          </h1>
          <p className="text-white py-4 md:py-6">
            In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie
            in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
            finibus, enim diam interdum nulla, sed laoreet risus lectus.
          </p>
        </div>
        <Button text={'Explore More'} color={'yellow'} />
      </div>
    </div>
  </>
);

export default Banner;
