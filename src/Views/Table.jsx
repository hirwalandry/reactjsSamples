import React from "react";

function Table(props) {
  return (
    <div className="bg-indigo-950 min-h-[100vh] flex flex-col items-center ">
      <div className="relative mt-40 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-zinc-500 dark:text-zinc-400">
          <thead className="text-xs text-zinc-700 uppercase bg-indigo-50 dark:bg-indigo-700 dark:text-indigo-400">
            <div>download</div>
            <tr>
              <th scope="col" class="px-6 py-3">
                Item
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-indigo-800 dark:border-indigo-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-indigo-900 whitespace-nowrap dark:text-white"
              >
                Tomato
              </th>
              <td class="px-6 py-4">pending</td>
            </tr>
            <tr className="bg-white border-b dark:bg-indigo-800 dark:border-indigo-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-indigo-900 whitespace-nowrap dark:text-white"
              >
                Carrots
              </th>
              <td class="px-6 py-4">complete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
