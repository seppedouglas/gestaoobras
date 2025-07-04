import { Request, Response } from "express";
import { prisma } from "../config/database";

export async function create(req: Request, res: Response) {
  try {
    const { dataInicio, dataFinal, ...rest } = req.body;

    const obra = await prisma.obra.create({
      data: {
        ...rest,
        dataInicio: dataInicio ? new Date(dataInicio) : null,
        dataFinal: dataFinal ? new Date(dataFinal) : null,
      },
    });

    res.status(201).json(obra);
  } catch (e) {
    console.error("Erro ao criar obra:", e);
    res.status(400).json({ error: (e as Error).message });
  }
}

export async function listAll(_req: Request, res: Response) {
  const obras = await prisma.obra.findMany();
  res.json(obras);
}

export async function getOne(req: Request, res: Response) {
  const id = Number(req.params.id);
  const obra = await prisma.obra.findUnique({ where: { id } });
  obra
    ? res.json(obra)
    : res.status(404).json({ error: "Obra não encontrada" });
}

export async function update(req: Request, res: Response) {
  const id = Number(req.params.id);
  try {
    const obra = await prisma.obra.update({ where: { id }, data: req.body });
    res.json(obra);
  } catch {
    res.status(404).json({ error: "Obra não encontrada" });
  }
}

export async function remove(req: Request, res: Response) {
  const id = Number(req.params.id);
  await prisma.obra.delete({ where: { id } });
  res.status(204).send();
}
