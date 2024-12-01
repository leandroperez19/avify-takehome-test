import { DataSchema } from "@/schemas/dataSchema";
import { z } from "zod";

export type generationResponse = z.infer<typeof DataSchema>;
