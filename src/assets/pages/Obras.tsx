import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { FormData } from "../interfaces/interfaces";
import { FilePenLine, X } from "lucide-react";
import { useState } from "react";
import ContainerEdit from "@/components/ContainerEdit";
import useObras from "../hooks/useObras";

export default function Obras() {
  const [editingObra, setEditingObra] = useState<FormData | null>(null);
  const { obras, removeObra, updateObra, loading, error } = useObras();

  if (loading) return <p className="p-6">Carregando…</p>;
  if (error) return <p className="p-6 text-red-600">{error}</p>;

  return (
    <div className="relative ">
      {editingObra && (
        <div className="absolute inset-0 z-50 min-h-screen p-6 flex justify-center items-center">
          <div
            className="absolute bg-gray-100 opacity-80  w-full h-full"
            onClick={() => setEditingObra(null)}
          ></div>
          <div className="relative ">
            <ContainerEdit
              obra={editingObra}
              onClose={() => setEditingObra(null)}
              onSave={updateObra}
            />
          </div>
        </div>
      )}
      <div className=" p-6 mx-auto">
        <div className="text-gray-500 font-semibold pb-6">Obras</div>
        <div className="rounded-sm bg-white shadow-md relative">
          <Table className="overflow-y-auto">
            <TableHeader>
              <TableRow>
                <TableHead>Id</TableHead>
                <TableHead>Apelido</TableHead>
                <TableHead>Tomador</TableHead>
                <TableHead>Início</TableHead>
                <TableHead>Fim</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Situação</TableHead>
                <TableHead>Ação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {obras.map((obra, i) => (
                <TableRow
                  key={i}
                  className={`${
                    i % 2 === 0 ? "bg-blue-50" : "bg-white"
                  } border-none`}
                >
                  <TableCell>{obra.id}</TableCell>
                  <TableCell>{obra.apelido}</TableCell>
                  <TableCell>{obra.tomador}</TableCell>
                  <TableCell>{obra.dataInicio}</TableCell>
                  <TableCell>{obra.dataFinal}</TableCell>
                  <TableCell>
                    {Number(obra.valor).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </TableCell>
                  <TableCell>{obra.situacao}</TableCell>
                  <TableCell className="inline-block">
                    <span className="inline-block transition-transform duration-200 transform hover:scale-125 pr-2">
                      <X
                        onClick={() => removeObra(obra.id)}
                        className="text-red-600 w-4"
                      />
                    </span>
                    <span className="inline-block transition-transform duration-200 transform hover:scale-125">
                      <FilePenLine
                        onClick={() => setEditingObra(obra)}
                        className="text-primaryy w-4"
                      />
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
