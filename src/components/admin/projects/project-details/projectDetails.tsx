"use client";
import { useState } from "react";
import EditProject from "./EditProject";
import AssignedLeader from "./AssignedLeader";
import AssignedUser from "./AssignedUser";
import Link from "next/link";

const ProjectDetails = ({ params }: any) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [assignedLeader, setAssignedLeader] = useState<boolean>(false);
  const [assignedUser, setAssignedUser] = useState<boolean>(false);

  return (
    <div className="w-full overflow-x-auto">
      <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-md-tl-lg rounded-md-tr-lg">
        <div className="flex items-center justify-between">
          <p className="text-base sm:text-lg md:text-md lg:text-2xl font-bold leading-normal text-gray-800">
            Hospital Admin
          </p>
          <div>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded-md"
            >
              <p className="text-sm font-medium leading-none text-white">
                Edit Project
              </p>
            </button>
          </div>
        </div>
      </div>

      {showModal && <EditProject setShowModal={setShowModal} />}
      {assignedLeader && (
        <AssignedLeader setAssignedLeader={setAssignedLeader} />
      )}
      {assignedUser && <AssignedUser setAssignedUser={setAssignedUser} />}
      <div className="lg:grid grid-cols-4 gap-10 px-8 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
        <div className="col-span-3 p-6 bg-white shadow-md rounded-md ">
          <h1 className="font-bold text-lg">Hospital Administration</h1>
          <p className="text-sm opacity-50">2 open tasks, 5 tasks completed</p>
          <p className="mt-5 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            elit neque. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin
            libero vitae est consectetur, a molestie tortor consectetur. Aenean
            tincidunt interdum ipsum, id pellentesque diam suscipit ut. Vivamus
            massa mi, fermentum eget neque eget, imperdiet tristique lectus.
            Proin at purus ut sem pellentesque tempor sit amet ut lectus. Sed
            orci augue, placerat et pretium ac, hendrerit in felis. Integer
            scelerisque libero non metus commodo, et hendrerit diam aliquet.
            Proin tincidunt porttitor ligula, a tincidunt orci pellentesque nec.
            Ut ultricies maximus nulla id consequat. Fusce eu consequat mi, eu
            euismod ligula. Aliquam porttitor neque id massa porttitor, a
            pretium velit vehicula. Morbi volutpat tincidunt urna, vel
            ullamcorper ligula fermentum at. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec vel elit neque. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Vestibulum sollicitudin libero vitae est consectetur, a
            molestie tortor consectetur. Aenean tincidunt interdum ipsum, id
            pellentesque diam suscipit ut. Vivamus massa mi, fermentum eget
            neque eget, imperdiet tristique lectus. Proin at purus ut sem
            pellentesque tempor sit amet ut lectus. Sed orci augue, placerat et
            pretium ac, hendrerit in felis. Integer scelerisque libero non metus
            commodo, et hendrerit diam aliquet. Proin tincidunt porttitor
            ligula, a tincidunt orci pellentesque nec. Ut ultricies maximus
            nulla id consequat. Fusce eu consequat mi, eu euismod ligula.
            Aliquam porttitor neque id massa porttitor, a pretium velit
            vehicula. Morbi volutpat tincidunt urna, vel ullamcorper ligula
            fermentum at
          </p>
        </div>
        <div className="p-5 mt-8 lg:mt-0 bg-white rounded-md shadow-md">
          <h1 className="mb-4">Project Details</h1>
          <table className="min-w-full text-left text-sm font-light border">
            <thead className="border-b font-medium dark:border-neutral-500"></thead>
            <tbody>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-2 py-4 font-medium">
                  Cost
                </td>
                <td className="whitespace-nowrap px-2 py-4 text-end">$1200</td>
              </tr>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-2 py-4 font-medium">
                  Total Hours:
                </td>
                <td className="whitespace-nowrap px-2 py-4 text-end">
                  100 hours
                </td>
              </tr>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-2 py-4 font-medium">
                  Total Hours:
                </td>
                <td className="whitespace-nowrap px-2 py-4 text-end">
                  100 hours
                </td>
              </tr>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-2 py-4 font-medium">
                  Total Hours:
                </td>
                <td className="whitespace-nowrap px-2 py-4 text-end">
                  100 hours
                </td>
              </tr>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-2 py-4 font-medium">
                  Total Hours:
                </td>
                <td className="whitespace-nowrap px-2 py-4 text-end">
                  100 hours
                </td>
              </tr>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-2 py-4 font-medium">
                  Total Hours:
                </td>
                <td className="whitespace-nowrap px-2 py-4 text-end">
                  100 hours
                </td>
              </tr>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-2 py-4 font-medium">
                  Total Hours:
                </td>
                <td className="whitespace-nowrap px-2 py-4 text-end">
                  100 hours
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="lg:grid grid-cols-4 gap-10 px-8 md:px-10 pt-4 md:pt-7  overflow-y-auto ">
        <div className="col-span-3 bg-white p-6 shadow-md rounded-md">
          <h1 className="font-bold text-lg mb-5">Uploaded image files</h1>
          <div className="gap-x-3 rounded-md grid grid-cols-4">
            <img src="/mee.jpg" alt="" />
            <img src="/mee.jpg" alt="" />
            <img src="/mee.jpg" alt="" />
            <img src="/mee.jpg" alt="" />
          </div>
        </div>
        <div className="p-5 mt-8 lg:mt-0 bg-white shadow-md rounded-md">
          <div className="flex items-center justify-between">
            <p className="text-base font-bold leading-normal text-gray-800">
              Assigned Leader
            </p>
            <button
              onClick={() => setAssignedLeader(true)}
              className="inline-flex mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded-md"
            >
              <p className="text-sm font-medium leading-none text-white">Add</p>
            </button>
          </div>
          <div className="items-center flex mt-4 gap-x-4">
            <div className="bg-gray-400 rounded-md-[50%] w-[38px] h-[38px] text-sm text-white font-extrabold flex items-center justify-center">
              <span>H</span>
            </div>
            <div>
              <h1 className="font-bold">Mr.Huzaifa</h1>
              <h2 className="text-sm">Frontend Developer</h2>
            </div>
          </div>
          <div className="items-center flex mt-4 gap-x-4">
            <div className="bg-gray-400 rounded-md-[50%] w-[38px] h-[38px] text-sm text-white font-extrabold flex items-center justify-center">
              <span>H</span>
            </div>
            <div>
              <h1 className="font-bold">Mr.Huzaifa</h1>
              <h2 className="text-sm">Frontend Developer</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:grid grid-cols-4 gap-10 px-8 md:px-10 pt-4 md:pt-7 pb-5 mt-4 overflow-y-auto">
        <div className="col-span-3 bg-white p-6 shadow-md rounded-md">
          <h1 className="font-bold text-lg mb-5">Uploaded files</h1>
          <div className="bg-white">
            <div className="items-center flex gap-x-4">
              <div className="bg-gray-400 rounded-md-[50%] w-[38px] h-[38px] text-sm text-white font-extrabold flex items-center justify-center">
                <span>H</span>
              </div>
              <div>
                <h1 className="text-sm">
                  AHA Selfcare Mobile Application Test-Cases.xls
                </h1>
                <h2 className="text-xs opacity-50">
                  Richard Miles May 31st at 6:53 PM
                </h2>
                <h3 className="text-sm opacity-50">Size: 14.8Mb</h3>
              </div>
            </div>
            <div className="items-center flex gap-x-4 mt-4">
              <div className="bg-gray-400 rounded-md-[50%] w-[38px] h-[38px] text-sm text-white font-extrabold flex items-center justify-center">
                <span>H</span>
              </div>
              <div>
                <h1 className="text-sm">
                  AHA Selfcare Mobile Application Test-Cases.xls
                </h1>
                <h2 className="text-xs opacity-50">
                  Richard Miles May 31st at 6:53 PM
                </h2>
                <h3 className="text-sm opacity-50">Size: 14.8Mb</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 mt-8 lg:mt-0 bg-white rounded-md shadow-md">
          <div className="flex items-center justify-between"> <p className="text-base font-bold leading-normal text-gray-800">
              Assigned users
            </p>
            <button
              onClick={() => setAssignedUser(true)}
              className="inline-flex mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded-md"
            >
              <p className="text-sm font-medium leading-none text-white">Add</p>
            </button>
          </div>
          <div className="items-center flex mt-4 gap-x-4">
            <div className="bg-gray-400 rounded-md-[50%] w-[38px] h-[38px] text-sm text-white font-extrabold flex items-center justify-center">
              <span>H</span>
            </div>
            <div>
              <h1 className="font-bold">Mr.Huzaifa</h1>
              <h2 className="text-sm">Frontend Developer</h2>
            </div>
          </div>
          <div className="items-center flex mt-4 gap-x-4">
            <div className="bg-gray-400 rounded-md-[50%] w-[38px] h-[38px] text-sm text-white font-extrabold flex items-center justify-center">
              <span>H</span>
            </div>
            <div>
              <h1 className="font-bold">Mr.Huzaifa</h1>
              <h2 className="text-sm">Frontend Developer</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
