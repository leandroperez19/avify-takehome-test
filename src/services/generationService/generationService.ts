import { doGet } from "../requestHandler";
import { generationResponse } from "./generationService.types";
import { DataSchema } from "@/schemas/dataSchema";

export const getGeneration = async () => {
    return await doGet<generationResponse>("/generation", DataSchema.parse);
};
