export interface FormData {
  id: number;
  objeto: string;
  tomador: string;
  modalidade: string;
  apelido: string;
  valor: number;
  situacao: string;
  ordemServico: string;
  contrato: string;
  dataInicio: string;
  dataFinal: string;
}

export interface InputFieldProps {
  field: {
    label: string;
    name: string;
    value: string | number;
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
    placeholder?: string;
    type?: string;
    className?: string;
    options?: { label: string; value: string }[];
  };
}

export interface CampoFormulario {
  name: string;
  value: string | number;
  label: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  placeholder?: string;
  type?: string;
  className?: string;
  options?: { label: string; value: string }[];
}
