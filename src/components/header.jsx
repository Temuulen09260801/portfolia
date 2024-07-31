import { IoSunnyOutline } from "react-icons/io5";
const Header = () => {
  return (
    <header className="flex justify-between items-center mt-4 px-40">
      <div className="font-black text-3xl">TOM</div>
      <div className="flex gap-4 items-center">
        <div className="flex gap-x-2">
          <a>About</a>
          <a>Work</a>
          <a>Testimonials</a>
          <a>Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <IoSunnyOutline />
          <button className="bg-black text-white py-[6px] px-4 rounded-2xl">
            Download CV
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
