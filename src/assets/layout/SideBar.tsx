import type { ReactElement } from "react";
import { useNavigate, useLocation } from "react-router";
import { LayoutDashboard, ListCheck, FilePlus, HandCoins } from "lucide-react";
import logo from "../images/logo.png";

export default function SideBar() {
  const nomes: { nome: string; path: string; icon: ReactElement }[] = [
    { nome: "Dashboard", path: "/", icon: <LayoutDashboard size={18} /> },
    {
      nome: "Cadastro de Obras",
      path: "/cadastro",
      icon: <FilePlus size={18} />,
    },
    { nome: "Obras", path: "/obras", icon: <ListCheck size={18} /> },
    { nome: "Medições", path: "/*", icon: <HandCoins size={18} /> },
  ];
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="">
      <div className="flex justify-center items-center h-[3rem]  border-b border-b-gray-300 gap-2 text-sm">
        <div>
          <img src={logo} className="h-[2rem]" />
        </div>
        <div>GESTÃO DE OBRAS</div>
      </div>
      <div className="flex flex-col text-sm p-4 mt-5 text-gray-300">
        <div className="flex p-2 mb-1">Menu</div>
        <div className="flex flex-col gap-3">
          {nomes.map((nome, i) => {
            const isActive: boolean = location.pathname === nome.path;
            return (
              <div
                key={i}
                onClick={() => navigate(nome.path)}
                className={`${
                  isActive ? "bg-secondaryy" : ""
                } hover:bg-secondaryy p-2 rounded-md p hover:text-white flex flex-row gap-3 cursor-pointer`}
              >
                <div>{nome.icon}</div>
                <div>{nome.nome}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
