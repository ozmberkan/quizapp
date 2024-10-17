import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { tableTitles } from "~/data/data";

const Results = () => {
  const { answers } = useSelector((store) => store.answers);
  const [trueQuestions, setTrueQuestions] = useState(0);

  const trueAnswers = answers.filter(
    (answer) => answer.answer === answer.correctAnswer
  );

  useEffect(() => {
    setTrueQuestions(trueAnswers.length);
  }, []);

  return (
    <div className="flex-grow border bg-white p-5 flex flex-col gap-y-5">
      <div className="flex  w-full gap-y-2 justify-between items-center">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-4xl font-extrabold">Sonuçlarım</h1>
          <p className="text-zinc-400 text-sm">
            Bu ekrandan sonuçlarınızı kontrol edebilirsiniz.
          </p>
        </div>
        {trueQuestions > 0 && (
          <div className="font-semibold text-4xl">
            <span className="text-green-500">{trueQuestions}</span>/
            {answers.length}
          </div>
        )}
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {tableTitles.map((title) => (
              <th key={title.id} scope="col" className="px-2 py-3">
                {title.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {answers.length > 0 ? (
            answers.map((answer) => (
              <tr
                key={answer.question}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {answer.question}
                </th>
                <td className="px-2 py-4">{answer.answer}</td>
                <td className="px-2 py-4">{answer.correctAnswer}</td>
                <td className="px-2 py-4">
                  {answer.answer === answer.correctAnswer ? (
                    <span className="text-green-500 font-semibold">Doğru</span>
                  ) : (
                    <span className="text-red-500 font-semibold">Yanlış</span>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Öncesinde soru çözümü yapınız..
              </th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
