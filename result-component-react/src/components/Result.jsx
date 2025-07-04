function Result({ score }) {
  return (
    <>
      <div className="bg-blue-700 flex flex-col justify-between items-center p-8 sm:rounded-3xl rounded-b-3xl">
        <div className="text-gray-400 mb-5">Your Result</div>
        <div className="w-40 h-40 rounded-full bg-blue-800 mb-5 flex flex-col items-center justify-center">
          <div className="text-6xl font-bold text-white">{score || 72}</div>
          <div className="text-gray-400 text-xs text-center">of 100</div>
        </div>

        <div className="text-2xl mb-5">Great</div>
        <div className="text-center text-gray-300">
          You scored higher than 65% of the people who have taken these tests
        </div>
      </div>
    </>
  );
}

export default Result;
