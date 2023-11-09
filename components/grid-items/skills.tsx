"use client"
import Image from "next/image";
import skills from "./skills.json";

export default function Skills() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-2 items-center mt-4 p-2">
      
      {skills.map((item, index) => (
        <div key={index} className="bg-zinc-900/90 hover:bg-zinc-200/20 hover:scale-[1.03] p-2 px-4 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-11/12 mx-auto">
          <div className="flex justify-between items-center w-full">
            <div className="flex justify-center items-center h-[26px]">
              <Image className="rounded-md w-[24px] h-[24px]" src={item.path} alt="avatar" width={500} height={500} />
            </div>
            <p className="text-md text-white">{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}