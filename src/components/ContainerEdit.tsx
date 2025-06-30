import type { CampoFormulario, FormData } from "@/assets/interfaces/interfaces";
import { useEffect, useState } from "react";
import InputForm from "./InputForm";
import ButtonSubmit from "./ButtonSubmit";

interface Props {
  obra: FormData;
  onClose: () => void;
  onSave: (id: number, changes: Partial<FormData>) => void;
}

export default function ContainerEdit({ obra, onClose, onSave }: Props) {
  const [formData, setFormData] = useState<FormData>(obra);
  useEffect(() => {
    setFormData(obra);
  }, [obra]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Atualiza o estado e salva no localStorage pelo hook
    onSave(obra.id, formData);
    onClose();
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const { name, value, type } = target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "number"
          ? value === "" // permite apagar campo sem virar 0 automático
            ? ""
            : Number(value)
          : value,
    }));
  };
  const descricaoForm: CampoFormulario[] = [
    {
      name: "objeto",
      value: formData.objeto,
      label: "Objeto",
      placeholder: "Digite o objeto do Contrato",
      onChange: handleChange,
      type: "text",
      className: "col-span-2",
    },
    {
      name: "tomador",
      label: "Tomador",
      placeholder: "Digite o nome do contratante",
      type: "text",
      value: formData.tomador,
      onChange: handleChange,
      className: "col-span-1",
    },
    {
      name: "modalidade",
      label: "Modalidade",
      value: formData.modalidade,
      onChange: handleChange,
      className: "col-span-1",
      options: [
        {
          label: "Empreitada por preço global",
          value: "Empreitada por preço global",
        },
        {
          label: "Empreitada por preço unitário",
          value: "Empreitada por preço unitario",
        },
      ],
    },
    {
      name: "apelido",
      label: "Apelido",
      placeholder: "Digite um apelido para o objeto do contrato",
      type: "text",
      className: "col-span-2",
      value: formData.apelido,
      onChange: handleChange,
    },
    {
      name: "valor",
      label: "Valor do Contrato",
      placeholder: "R$ 1.000.000,00",
      type: "number",
      value: formData.valor,
      onChange: handleChange,
    },
    {
      name: "situacao",
      label: "Situação",
      value: formData.situacao,
      onChange: handleChange,
      className: "col-span-1",
      options: [
        {
          label: "Em Andamento",
          value: "Em Andamento",
        },
        {
          label: "Paralisada",
          value: "Paralisada",
        },
        {
          label: "Concluida",
          value: "Concluida",
        },
      ],
    },
    {
      name: "ordemServico",
      label: "Ordem de Serviço OS",
      placeholder: "165/2024",
      type: "text",
      value: formData.ordemServico,
      onChange: handleChange,
    },
    {
      name: "contrato",
      label: "N Contrato",
      placeholder: "001/2023",
      type: "text",
      value: formData.contrato,
      onChange: handleChange,
    },
    {
      name: "dataInicio",
      label: "Data de Início",
      placeholder: "2025-10-05",
      type: "date",
      value: formData.dataInicio,
      onChange: handleChange,
    },
    {
      name: "dataFinal",
      label: "Data Final",
      placeholder: "2025-12-05",
      type: "date",
      value: formData.dataFinal,
      onChange: handleChange,
    },
  ];
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl p-6 max-w-2xl mx-auto shadow-md"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {descricaoForm.map((campo) => (
          <InputForm key={campo.name} field={campo} />
        ))}
      </div>

      <div className="mt-6">
        <ButtonSubmit />
      </div>
    </form>
  );
}
