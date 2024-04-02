import React from "react";

export default function Stats() {
  return (
    <div class="sm:h-screen flex flex-col items-center justify-center">
      <div class="container px-6 pt-8 pb-4 mx-auto">
        <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          UCI's Premier Entrepreneurship Fraternity
        </h1>

        <p class="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
          Sigma Eta Pi is a tight-knit community of founders, innovators, and
          builders focused on making an impact in our communities. We do things
          differently at SEP.
        </p>

        <div class="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div class="w-full p-8 space-y-4 text-center border border-gray-200 rounded-lg dark:border-gray-700">
            <h2 class="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
              40+
            </h2>
            <p class="font-medium text-gray-500 dark:text-gray-300">Members</p>
          </div>

          <div class="w-full p-8 space-y-4 text-center border border-gray-200 rounded-lg dark:border-gray-700">
            <h2 class="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
              15+
            </h2>
            <p class="font-medium text-gray-500 dark:text-gray-300">Majors</p>
          </div>
          <div class="w-full p-8 space-y-4 text-center border border-gray-200 rounded-lg dark:border-gray-700">
            <h2 class="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
              20+
            </h2>
            <p class="font-medium text-gray-500 dark:text-gray-300">Startups</p>
          </div>
          <div class="w-full p-8 space-y-4 text-center border border-gray-200 rounded-lg dark:border-gray-700">
            <h2 class="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
              $1M+
            </h2>
            <p class="font-medium text-gray-500 dark:text-gray-300">
              In Funding
            </p>
          </div>
          <div class="w-full p-8 space-y-4 text-center border border-gray-200 rounded-lg dark:border-gray-700">
            <h2 class="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
              1
            </h2>
            <p class="font-medium text-gray-500 dark:text-gray-300">Family</p>
          </div>
        </div>
      </div>
    </div>
  );
}
