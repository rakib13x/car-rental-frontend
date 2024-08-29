import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import SectionWrapper from "../Shared/SectionWrapper/SectionWrapper";

const CallToAction = () => {
  return (
    <SectionWrapper classes="mt-12 max-w-4xl">
      <SectionTitle title={"Support"} subtitle={"Do you have any questions"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="flex gap-4">
          <MdSupportAgent size={"44"} className="fill-orange-500" />
          <div>
            <p>ONLINE CHAT NOW</p>
            <button className="bg-orange-600 rounded-full px-4 py-2 text-white">
              Call now
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          <HiOutlineDevicePhoneMobile
            size={"44"}
            className="stroke-orange-500"
          />
          <div>
            <p>CALL US</p>
            <Link className="text-2xl" to="/">
              +123-567-8908
            </Link>
          </div>
        </div>
        <div className="flex gap-4">
          <IoMailUnreadOutline
            size={"44"}
            className="fill-orange-500 stroke-orange-500"
          />
          <div>
            <p>EMAIL US</p>
            <Link className="text-2xl" to="/">
              info@carrental.com
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CallToAction;
