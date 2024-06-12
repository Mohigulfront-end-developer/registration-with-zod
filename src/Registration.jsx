import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define your Zod schema
const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  secondName: z.string().min(1, "Second name is required"),
  lastName: z.string().min(1, "Last name is required"),
  month: z.string().min(1, "Month is required"),
  day: z.string().min(1, "Day is required"),
  year: z.string().min(1, "Year is required"),
  gender: z.string().min(1, "Gender is required"),
  streetAddress: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  postalCode: z.string().min(1, "Postal/Zip code is required"),
  email: z.string().email("Invalid email"),
  mobileNumber: z.string().min(10, "Mobile number is required"),
  phoneNumber: z.string().min(10, "Phone number is required"),
  workNumber: z.string().min(10, "Work number is required"),
  company: z.string().min(1, "Company name is required"),
  course: z.string().min(1, "Course is required"),
  comments: z.string().optional(),
});

const Registration = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(schema),
    });

    const onSubmit = (data) => {
      console.log(data);
    };
  return (
    <div className="">
      <div className="lg:container mx-auto px-4 flex justify-center items-center">
        <div className="w-[750px] bg-sky-50 my-10 rounded-lg">
          <div className="border-b-2 border-b-sky-900 py-8 px-8">
            <h1 className="font-bold text-[35px] text-sky-900">
              Registration Form
            </h1>
            <p className="font-normal text-[20px] text-sky-900">
              Fill out the form carefully for registration
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="px-8 mt-[40px] py-5">
              <div className="">
                <h2 className="font-normal text-[18px] text-sky-900">
                  Student Name
                </h2>
                <div className="mt-2 flex justify-between items-center">
                  <div className="flex flex-col ">
                    <input
                      type="text"
                      {...register("firstName")}
                      className="outline-none border border-sky-900 rounded-md px-4 py-2"
                    />
                    <label className="py-2 text-[13px] text-sky-900">
                      First Name
                    </label>
                    {errors.firstName && (
                      <span className="text-red-500">
                        {errors.firstName.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <input
                      type="text"
                      {...register("secondName")}
                      className="outline-none border border-sky-900 rounded-md px-4 py-2"
                    />
                    <label className="py-2 text-[13px] text-sky-900">
                      Second Name
                    </label>
                    {errors.secondName && (
                      <span className="text-red-500">
                        {errors.secondName.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      {...register("lastName")}
                      className="outline-none border border-sky-900 rounded-md px-4 py-2"
                    />
                    <label className="py-2 text-[13px] text-sky-900">
                      Last Name
                    </label>{" "}
                    {errors.lastName && (
                      <span className="text-red-500">
                        {errors.lastName.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-[10px] flex justify-between items-center">
                <div className="">
                  <h2 className="font-normal text-[18px] text-sky-900">
                    Birth Date
                  </h2>
                  <div className="mt-[10px]  flex justify-between items-center gap-2 ">
                    <div className="flex flex-col gap-1">
                      <select className="px-2 py-[5px] border border-sky-900 rounded-md">
                        <option value="month">Please select</option>
                        <option value="month">January</option>
                        <option value="month">February</option>
                        <option value="month">March</option>
                        <option value="month">April</option>
                        <option value="month">May</option>
                        <option value="month">June</option>
                        <option value="month">July</option>
                        <option value="month">August</option>
                        <option value="month">September</option>
                        <option value="month">October</option>
                        <option value="month">November</option>
                        <option value="month">December</option>
                      </select>
                      <label className="py-2 text-[13px] text-sky-900">
                        Month
                      </label>
                    </div>
                    <div className="flex flex-col gap-1">
                      <select className="px-2  py-[5px] border border-sky-900 rounded-md">
                        <option value="day">Please Select</option>
                        <option value="day">1</option>
                        <option value="day">2</option>
                        <option value="day">3</option>
                        <option value="day">4</option>
                        <option value="day">5</option>
                        <option value="day">6</option>
                        <option value="day">7</option>
                        <option value="day">8</option>
                        <option value="day">9</option>
                        <option value="day">10</option>
                        <option value="day">11</option>
                        <option value="day">12</option>
                        <option value="day">13</option>
                        <option value="day">14</option>
                        <option value="day">15</option>
                        <option value="day">16</option>
                        <option value="day">17</option>
                        <option value="day">18</option>
                        <option value="day">19</option>
                        <option value="day">20</option>
                        <option value="day">21</option>
                        <option value="day">22</option>
                        <option value="day">23</option>
                        <option value="day">24</option>
                        <option value="day">25</option>
                        <option value="day">26</option>
                        <option value="day">27</option>
                        <option value="day">28</option>
                        <option value="day">29</option>
                        <option value="day">30</option>
                        <option value="day">31</option>
                      </select>
                      <label className="py-2 text-[13px] text-sky-900">
                        Day
                      </label>
                    </div>
                    <div className="flex flex-col gap-1">
                      <select className="px-2 py-[5px] border border-sky-900 rounded-md">
                        <option value="day">Please Select</option>
                        <option value="day">2015</option>
                        <option value="day">2014</option>
                        <option value="day">2013</option>
                        <option value="day">2012</option>
                        <option value="day">2011</option>
                        <option value="day">2010</option>
                        <option value="day">2009</option>
                        <option value="day">2008</option>
                        <option value="day">2007</option>
                        <option value="day">2006</option>
                        <option value="day">2005</option>
                        <option value="day">2004</option>
                        <option value="day">2003</option>
                        <option value="day">2002</option>
                        <option value="day">2001</option>
                        <option value="day">2000</option>
                      </select>

                      <label className="py-2 text-[13px] text-sky-900">
                        Year
                      </label>
                    </div>
                  </div>
                </div>
                <div className="">
                  <h2 className="font-normal text-[18px] text-sky-900">
                    Gender
                  </h2>
                  <div className=" flex flex-col mt-[10px]">
                    <select className="w-[260px] px-2 py-[5px] border border-sky-900 rounded-md">
                      <option value="">Please select</option>
                      <option value="">Male</option>
                      <option value="">Female</option>
                    </select>
                    <label className="py-2 text-[13px] text-sky-900">
                      Gender
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="font-normal text-[18px] text-sky-900">
                  Address
                </h2>
                <div className="mt-[10px] flex flex-col">
                  <input
                    type="text"
                    {...register("streetAddress")}
                    className="outline-none border border-sky-900 rounded-md px-4 py-2"
                  />
                  <label className="py-2 text-[13px] text-sky-900">
                    Street Address
                  </label>
                  {errors.streetAddress && (
                    <span className="text-red-500">
                      {errors.streetAddress.message}
                    </span>
                  )}
                </div>
                <div className="mt-[20px] flex flex-col">
                  <input
                    type="text"
                    className="outline-none border border-sky-900 rounded-md px-4 py-2"
                  />
                  <label className="py-2 text-[12px] text-sky-900">
                    Street Address Line 2
                  </label>
                </div>
                <div className="mt-[20px] flex justify-center gap-4 items-center ">
                  <div className="flex flex-col">
                    <input
                      type="text"
                      {...register("city")}
                      className="w-[335px] outline-none border border-sky-900 rounded-md px-4 py-2"
                    />
                    <label className="py-2 text-[13px] text-sky-900">
                      City
                    </label>
                    {errors.city && (
                      <span className="text-red-500">
                        {errors.city.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      {...register("state")}
                      className="w-[335px] outline-none border border-sky-900 rounded-md px-4 py-2"
                    />
                    <label className="py-2 text-[13px] text-sky-900">
                      State / Province
                    </label>
                    {errors.state && (
                      <span className="text-red-500">
                        {errors.state.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-[20px] flex flex-col">
                  <input
                    type="number"
                    {...register("postalCode")}
                    className="outline-none border border-sky-900 rounded-md px-4 py-2"
                  />
                  <label className="py-2 text-[12px] text-sky-900">
                    Postal / Zip Code
                  </label>
                  {errors.postalCode && (
                    <span className="text-red-500">
                      {errors.postalCode.message}
                    </span>
                  )}
                </div>
                <div className="mt-[20px] flex justify-center gap-4 items-center ">
                  <div className=" flex flex-col">
                    <h2 className="pb-[10px] font-normal text-[18px] text-sky-900">
                      Student E-mail
                    </h2>
                    <input
                      type="text"
                      {...register("email")}
                      placeholder="ex:myname@example.com"
                      className="w-[335px] outline-none border border-sky-900 rounded-md px-4 py-2"
                    />
                    <label className="py-2 text-[13px] text-sky-900">
                      example@example.com
                    </label>
                    {errors.email && (
                      <span className="text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <h2 className="pb-[10px] font-normal text-[18px] text-sky-900">
                      Mobile Number
                    </h2>
                    <input
                      type="number"
                      {...register("mobileNumber")}
                      placeholder="(000) 000-0000"
                      className="w-[335px] outline-none border border-sky-900 rounded-md px-4 py-2"
                    />
                    <label className="py-2 text-[13px] text-sky-900">
                      mobile number
                    </label>
                    {errors.mobileNumber && (
                      <span className="text-red-500">
                        {errors.mobileNumber.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-[20px] flex justify-center gap-4 items-center ">
                  <div className=" flex flex-col">
                    <h2 className="pb-[10px] font-normal text-[18px] text-sky-900">
                      Phone Number
                    </h2>
                    <input
                      type="number"
                      {...register("phoneNumber")}
                      placeholder="(000) 000-0000"
                      className="w-[335px] outline-none border border-sky-900 rounded-md px-4 py-2"
                    />
                    {errors.phoneNumber && (
                      <span className="text-red-500">
                        {errors.phoneNumber.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <h2 className="pb-[10px] font-normal text-[18px] text-sky-900">
                      Work Number
                    </h2>
                    <input
                      type="text"
                      {...register("workNumber")}
                      placeholder="(000) 000-0000"
                      className="w-[335px] outline-none border border-sky-900 rounded-md px-4 py-2"
                    />
                    {errors.workNumber && (
                      <span className="text-red-500">
                        {errors.workNumber.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-[20px] flex justify-center gap-4 items-center ">
                  <div className=" flex flex-col">
                    <h2 className="pb-[10px] font-normal text-[18px] text-sky-900">
                      Company
                    </h2>
                    <input
                      type="text"
                      className="w-[335px] outline-none border border-sky-900 rounded-md px-4 py-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="pb-[10px] font-normal text-[18px] text-sky-900">
                      Courses
                    </h2>
                    <select
                      className="w-[335px] px-2 py-2 border border-sky-900 rounded-md"
                      {...register("cours")}
                    >
                      <option value="">Please select</option>
                      <option value="">Computer Science</option>
                      <option value="">Physics</option>
                      <option value="">Geology</option>
                      <option value="">Biology</option>
                    </select>
                    {errors.cours && (
                      <span className="text-red-500">
                        {errors.cours.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="px-8 border-b-2 border-b-sky-900 py-8">
              <h2 className="mb-[10px] font-normal text-[18px] text-sky-900">
                Additional Comments
              </h2>
              <textarea
                name="text"
                id="text"
                className="w-full outline-none rounded-md border-sky-900 border px-4 py-4 h-[120px]"
              ></textarea>
            </div>
            <div className="my-8 flex justify-center items-center">
              <button className="w-[200px] text-[18px] font-semibold bg-cyan-900 border-none rounded-lg text-white px-4 py-3 hover:bg-cyan-600">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
