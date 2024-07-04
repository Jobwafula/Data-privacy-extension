import Navbar from "../components/dashboard/Navbar";
// import Add from "./Add";
import Analytics from "../components/dashboard/Analytics";
import Statistics from "../components/Statistics";
import Sidebar from "../components/dashboard/Sidebar";
import PersonalData from "../components/dashboard/PersonalData";
// import Orders from "./Orders";
// import Sales from "./Sales";
// import Shopping from "./Shopping";

export default function Dashboard() {
  return (
    <section className=" p-2">
      <section className="fixed shadow  w-full h-full right-0  bg-white ">
        <Navbar />
        <div className="flex gap-[10rem] h-[85%] w-full   shadow p-2">
          <div ><Sidebar /></div>

          <div className="grid grid-cols-10 gap-4 p-[2rem]  w-full shadow">
            <div className="flex flex-col w-full col-span-7  gap-[2rem]">
              {/* url visits */}
              <Statistics />
              <PersonalData />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
