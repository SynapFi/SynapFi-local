import { TopTradersByTokenTimeFrame } from "@/services/birdeye";
import { z } from "zod";

export const TopTokenTradersInputSchema = z.object({
    tokenAddress: z.string().describe("The token address to check top traders for."),
    timeFrame: z.nativeEnum(TopTradersByTokenTimeFrame).default(TopTradersByTokenTimeFrame.TwentyFourHours).describe("The time frame to check top traders for."),
});
