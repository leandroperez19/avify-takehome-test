import { z } from "zod";

export const DataSchema = z.object({
    data: z.object({
        from: z.coerce.date(),
        to: z.coerce.date(),
        generationmix: z.array(
            z.object({
                fuel: z.string(),
                perc: z.number(),
            })
        ),
    }),
});
