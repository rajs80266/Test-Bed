import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

const table = "votes";

export const getTop10 = query({
    args: {},
    handler: async (ctx) => {
      return await ctx.db.query(table).withIndex("by_votes", (q) => q).order("desc").take(10);
    },
});

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

export const updateVote = mutation({
  args: { uid: v.string(), last_vote: v.string(), vote_count: v.float64(), id: v.id("votes") },
  handler: async (ctx, args) => {
    const { id, uid, last_vote, vote_count } = args;
    await ctx.db.patch(id, { uid, last_vote, vote_count });
  },
});