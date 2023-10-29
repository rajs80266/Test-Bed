import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

const table = "votes";

export const get = query({
    args: {},
    handler: async (ctx) => {
      return await ctx.db.query(table).collect();
    },
});

export const createVote = mutation({
  args: { uid: v.string(), last_vote: v.string(), vote_count: v.float64() },
  handler: async (ctx, args) => {
    await ctx.db.insert(table, { ...args });
  },
});