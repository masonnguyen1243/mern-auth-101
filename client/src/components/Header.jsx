import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="mt-20 flex flex-col items-center px-4 text-center text-gray-800">
      <img
        src={assets.header_img}
        alt=""
        className="mb-6 h-36 w-36 rounded-full"
      />
      <h1 className="mb-2 flex items-center gap-2 text-xl font-medium sm:text-3xl">
        Hey Mason
        <img src={assets.hand_wave} alt="" className="aspect-square w-8" />
      </h1>
      <h2 className="mb-4 text-3xl font-semibold sm:text-5xl">
        Welcome to our app
      </h2>
      <p className="mb-8 max-w-md">
        Let's start with a quick product tour and we will have you up and
        running no time !
      </p>
      <button className="rounded-full border border-gray-500 px-8 py-2.5 transition-all hover:bg-gray-100">
        Get Started
      </button>
    </div>
  );
};
export default Header;
