import fs from "fs";

export const deleteFile = async (filename: string) => {
  try {
    await fs.promises.stat(filename);
  } catch (error) {
    return console.log(error);
  }
  await fs.promises.unlink(filename);
};
