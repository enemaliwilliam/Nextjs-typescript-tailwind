import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "~/lib/prisma";

type Folder = {
  name: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const folder = await prisma.folder.create({
      data: {
        name: req.body.name,
        userId: req.body.userId,
      },
    });
    res.status(200).json(folder);
  } else {
    const folders = await prisma.category.findMany();
    res.status(200).json(folders);
  }
};
