import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchQuestions,
  setCurrentQuestion,
} from "~/redux/slices/questionSlice";
import { FiArrowRightCircle } from "react-icons/fi";
import { ring2 } from "ldrs";
import { useNavigate } from "react-router-dom";
import { setAnswers } from "~/redux/slices/answersSlice";
import toast from "react-hot-toast";

const Questions = () => {
  ring2.register();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { questions, status, currentQuestion } = useSelector(
    (store) => store.questions
  );
  const [selected, setSelected] = useState(null);
  const [time, setTime] = useState(30);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  useEffect(() => {
    if (questions.length > 0 && currentQuestion === 0) {
      dispatch(setCurrentQuestion(0));
    }
  }, [questions, currentQuestion, dispatch]);

  useEffect(() => {
    if (time === 0) {
      nextQuestion();
    }

    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      dispatch(setCurrentQuestion(currentQuestion + 1));
      setTime(30);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    toast.success(
      "Sınavınız başarıyla tamamlandı. Sonuçlar sayfasına yönlendiriliyorsunuz."
    );
    setTimeout(() => {
      navigate("/results");
      dispatch(setCurrentQuestion(0));
    }, 1000);
  };

  const message = (option) => {
    setSelected(option);

    if (selected === option) {
      toast.error("Soru seçimi zaten yapıldı.");
      return;
    } else {
      dispatch(
        setAnswers({
          question: currentQuestion + 1,
          answer: selected === "" ? "Boş" : option,
          correctAnswer: questions[currentQuestion].correctAnswer,
        })
      );
    }
  };

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center flex-grow">
        <l-ring-2
          size="40"
          stroke="5"
          stroke-length="0.25"
          bg-opacity="0.1"
          speed="0.8"
          color="black"
        ></l-ring-2>
      </div>
    );
  }

  if (questions.length === 0) {
    return <div className="flex justify-center">Soru bulunamadı.</div>;
  }

  return (
    <div className="w-full bg-white flex flex-col  rounded-md p-4 border">
      <div className="w-full flex justify-between items-center border-b  p-5">
        <span className="text-3xl font-semibold">{time} Saniye Kaldı</span>
        <div className="flex items-center gap-x-5">
          <span className="text-2xl font-semibold">
            {currentQuestion + 1}/{questions.length}
          </span>
          {currentQuestion < questions.length - 1 ? (
            <button
              onClick={nextQuestion}
              className="text-4xl text-darkBlack hover:text-darkBlack/50"
            >
              <FiArrowRightCircle />
            </button>
          ) : (
            <button
              onClick={finishQuiz}
              className="px-4 py-2 rounded-md border bg-black text-white disabled:bg-gray-300"
            >
              Sınavı Bitir
            </button>
          )}
        </div>
      </div>
      <div className="w-full p-6">
        {questions[currentQuestion] && (
          <div className="flex flex-col gap-y-5">
            <h2 className="text-2xl font-bold">
              {questions[currentQuestion].question}?
            </h2>
            <div className="w-full grid grid-cols-2 gap-5">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`bg-zinc-50 p-3 rounded-md border flex  disabled:bg-gray-300 ${
                    selected === option ? "bg-blue-500 text-white" : ""
                  }`}
                  disabled={time >= 20}
                  onClick={() => message(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Questions;
