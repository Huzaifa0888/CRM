interface Prop {
  setShowModal: (value: boolean) => void;
}
const ClientForm = ({ setShowModal }: Prop) => {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative mx-auto w-full h-full">
        {/*content*/}
        <div className="border-0 relative flex flex-col w-full  bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold">Add Client</h3>
            <button
              className="p-1 ml-auto border-0 text-black hover:opacity-50 float-right text-xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              x
            </button>
          </div>
          {/*body*/}

          {/* Client Form */}

          <form className="grid grid-cols-2 gap-x-2 justify-center mx-auto">
            <div className="relative p-6 flex justify-center">
              <div className="w-72">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2 "
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter your first name"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center">
              <div className="w-72">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2 "
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center">
              <div className="w-72">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2 "
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      id="username"
                      type="text"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter your username"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center">
              <div className="w-72">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2 "
                      htmlFor="Email"
                    >
                      Email
                    </label>
                    <input
                      id="Email"
                      type="text"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter your Email"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center">
              <div className="w-72">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2 "
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter your Password"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center">
              <div className="w-72">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2 "
                      htmlFor="conPassword"
                    >
                      Confirm Password
                    </label>
                    <input
                      id="conPassword"
                      type="password"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter your Confirm Password"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center">
              <div className="w-72">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2 "
                      htmlFor="clientId"
                    >
                      Client ID
                    </label>
                    <input
                      id="clientId"
                      type="text"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter your Client Id"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center">
              <div className="w-72">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2 "
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="text"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter your Phone"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center">
              <div className="w-72">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2 "
                      htmlFor="company"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter your company"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-2 w-[93%] mx-auto pt-14 pb-10">
              <button
                onClick={() => {
                  alert("Form Submitted");
                }}
                className="bg-indigo-600 w-full   text-white hover:bg-indigo-500 font-normal py-2 px-4 rounded-md"
              >
                Add Client
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClientForm;
