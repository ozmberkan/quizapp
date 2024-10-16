import React from "react";
import { Link } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";

const Home = () => {
  return (
    <div className=" flex-grow flex justify-start items-start flex-col lg:gap-y-12 gap-y-5 lg:py-12 w-full">
      <h1 className="font-extrabold animate-pulse lg:text-[150px] text-5xl bg-clip-text text-transparent bg-gradient-to-l from-blue-500 to-emerald-500 ">
        QuizApp
      </h1>
      <p className="text-xl">
        QuizApp, kullanıcıların çeşitli konularda testler çözerek bilgilerini
        sınayabilecekleri bir uygulamadır. Bu uygulama, kullanıcı dostu arayüzü
        ve basit yapısıyla her yaştan insanın rahatlıkla kullanabileceği şekilde
        tasarlanmıştır. Soruları çözdükten sonra otomatik olarak sonuçlarınızı
        görüntüleyeceğiniz sayfaya aktarılırsınız. Ayrıca, soruları çözerken ve
        sonuçlarınızı görüntülerken herhangi bir sorun yaşarsanız, bizimle
        iletişime geçebilirsiniz.
      </p>
      <Link
        to="/questions"
        className="w-full bg-white rounded-md border p-3 flex gap-x-2 items-center hover:bg-neutral-100 transition-colors duration-200"
      >
        <FaInfoCircle size={30} />
        <span className="text-lg font-medium">
          Soru çözmek için, kısayol çubuğundan "Sorular" sayfasına gitmelisiniz.
        </span>
      </Link>
    </div>
  );
};

export default Home;
