import React from "react";
import shreya from "../assets/members/board/shreya.jpg";

const recruitmentSchedule = [
  {
    id: 1,
    date: "Tues",
    event: "Meet the Chapter",
  },
  {
    id: 2,
    date: "Thurs",
    event: "Alumni Night",
  },

  {
    id: 3,
    date: "Fri",
    event: "Beach Bonfire",
  },

  {
    id: 4,
    date: "Mon",
    event: "Pitch Night",
  },

  {
    id: 5,
    date: "Tues",
    event: "Applications Due",
  },

  {
    id: 6,
    date: "Wed",
    event: "Interview I",
  },
  {
    id: 7,
    date: "Thurs",
    event: "Interview II",
  },
];

const Recruitment = () => {
  return (
    <div className="sm:overflow-y-scroll sm:snap-mandatory sm:snap-y sm:h-screen">
      <div className="snap-start flex flex-col mx-auto text-center justify-center items-center h-screen">
        <h1 className="md:text-7xl sm:text-6xl text-5xl font-bold md:py-6 sm:py-4 py-2">
          Recruitment
        </h1>
        <p className="md:text-4xl sm:text-3xl text-2xl font-bold text-accent">
          Spring 2024 Interest Form
        </p>
      </div>
      <div className="snap-start flex flex-col h-screen text-center justify-center items-center sm:w-[80%] m-auto">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-10 sm:py-4 py-2">
          The Schedule
        </h1>
        <div>
          <div className="grid justify-center items-center gap-4 px-5 sm:gap-6 sm:px-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {recruitmentSchedule.map((item, index) => (
              <div
                key={index}
                className="sm:text-2xl text-l font-medium text-accent border-[4px] border-white rounded-lg sm:p-[20px] p-[10px] flex flex-col justify-center sm:h-[120px] h-[90px]"
              >
                <div className="text-l sm:text-2xl font-extrabold">
                  {item.date}
                </div>
                <div className="text-sm sm:text-xl font-normal text-white">
                  {item.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="snap-start flex flex-col justify-center items-center mx-auto sm:w-[90%] w-full h-screen text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-20 md:mt-20 lg:mt-0 xl:mt-0 w-full max-w-4xl">
          President's Note
        </h1>
        <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center w-full max-w-6xl">
          <div className="w-6/12 sm:w-3/4 md:w-1/3 lg:max-w-md xl:w-96 mx-auto mt-2 lg:mx-4 rounded-lg overflow-hidden">
            <img src={shreya} alt="President" className="w-full h-auto" />
          </div>
          <div className="flex-1 font-normal text-md md:text-2xl lg:text-3xl mt-2 lg:mt-0 mx-4 text-left text-accent">
            <p>
              "Hey all, My name is Shreya Mawandia and I am so excited to
              welcome you to Spring 2024 Recruitment! I truly enjoyed my
              recruitment process as it was the first taste of what the culture
              at Sigma Eta Pi was and is today: scrappy, innovative, and
              exciting. One of my fondest memories was hearing all of the
              actives' stories and journey within SEP, and that really
              encouraged me to be authentic and resilient as I embarked on
              Founder's Education. I am so excited to meet you all"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
