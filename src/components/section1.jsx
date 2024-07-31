import { FaGithub } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaFigma } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
const Sections1 = () => {
  return (
    <>
      <div className="flex items-center justify-around mt-24">
        <div className="">
          <div className="font-bold text-6xl">Hi, I’m Tom 👋</div>
          <div className="text-gray-600 mt-6">
            I specialize in full stack development, particularly with React.js
            and Node.js. <br />
            My main goal is to create exceptional digital experiences that are
            fast, visually <br />
            appealing, and accessible to everyone. With over 7 years of
            experience in web <br /> development, I continue to find joy in
            crafting innovative solutions and designs.
          </div>
          <div className="mt-8 text-gray-500 flex gap-2 items-center">
            <IoLocationOutline />
            <div>Ulaanbaatar, Mongolia</div>
          </div>
          <div className=" text-gray-500 flex items-center gap-2">
            <div className="bg-green-500 w-2 h-2 rounded-full "></div>
            <div>Available for new projects</div>
          </div>
          <div className="flex mt-8 gap-4 ">
            <FaGithub size={20} />
            <FiTwitter size={20} />
            <FaFigma size={20} />
          </div>
        </div>
        <img
          src="./images/Pic.png"
          alt=""
          className="shadow-[40px_40px_#d1d5db;]"
        />
      </div>
    </>
  );
};
export default Sections1;
