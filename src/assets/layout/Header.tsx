import logo from "../images/logo.png";
import { ChevronDown, Bell } from "lucide-react";

export default function Header() {
  const user: { nome: string; icon: string } = {
    nome: "Douglas Rodrigues Seppe",
    icon: logo,
  };
  return (
    <div className="flex h-[3rem] justify-between items-center pl-7 pr-7">
      <div className="flex">
        <input
          type="text"
          placeholder="Search"
          className="bg-white text-sm w-[39rem] h-7 rounded-lg pl-5 shadow-2xs"
        ></input>
      </div>
      <div className="flex items-center gap-2">
        <img src={user.icon} className="flex h-8" />
        <div className="flex text-sm">{user.nome}</div>
        <ChevronDown color="gray" size={"1rem"} />
        <Bell size={"1.2rem"} className="ml-6" />
      </div>
    </div>
  );
}
