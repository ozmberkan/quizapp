import { FaInfoCircle } from "react-icons/fa";
import { homeDescription } from "~/data/data";

const Home = () => {
  return (
    <div className=" flex-grow flex justify-start items-start flex-col lg:gap-y-12 gap-y-5 lg:py-12 w-full">
      <h1 className="font-extrabold animate-pulse lg:text-[150px] text-5xl bg-clip-text text-transparent bg-gradient-to-l from-blue-500 to-emerald-500 ">
        QuizApp
      </h1>
      <p className="text-xl">{homeDescription}</p>
      <div className="w-full bg-white rounded-md border p-3 flex gap-x-2 items-center ">
        <FaInfoCircle size={30} />
        <span className="text-lg font-medium">
          Kısayol çubuğundan "Sorular"a tıkladığınızda sınav otomatik olarak
          başlayacaktır!
        </span>
      </div>
    </div>
  );
};

export default Home;
