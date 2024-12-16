"use server";

import prisma from "@/lib/prisma";
import { sleep } from "@/utils";


export const getStockBySlug = async (slug: string): Promise<number> => {
  try {

    const stock = await prisma.product.findFirst({
      where: { slug: slug }, // condición de búsqueda
      select: { inStock: true }, // Elementos que quiero traer
    });

    return stock?.inStock ?? 0;

  } catch (error) {
    return 0;
  }
};
