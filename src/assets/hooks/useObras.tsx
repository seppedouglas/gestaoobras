// src/hooks/useObras.ts
import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { FormData } from "../interfaces/interfaces";

export default function useObras() {
  const [obras, setObras] = useState<FormData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchObras = async () => {
    try {
      const { data } = await api.get<FormData[]>("/obras");
      setObras(data);
    } catch {
      setError("Erro ao buscar obras");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchObras();
  }, []);

  // --- POST /obras ----------------------------------------------------------
  const addObra = async (obra: Omit<FormData, "id">) => {
    try {
      const { data } = await api.post("/obras", obra);
      setObras((prev) => [...prev, data]);
    } catch (err) {
      console.error("Erro ao adicionar obra:", err);
      throw err;
    }
  };

  // --- PUT /obras/:id -------------------------------------------------------
  const updateObra = async (id: number, changes: Partial<FormData>) => {
    const { data } = await api.put<FormData>(`/obras/${id}`, changes);
    setObras((prev) => prev.map((o) => (o.id === id ? data : o)));
  };

  // --- DELETE /obras/:id ----------------------------------------------------
  const removeObra = async (id: number) => {
    await api.delete(`/obras/${id}`);
    setObras((prev) => prev.filter((o) => o.id !== id));
  };

  return {
    obras,
    loading,
    error,
    addObra,
    updateObra,
    removeObra,
    refetch: fetchObras,
  };
}
