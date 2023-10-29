import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

const table = "preferrences";

export const get = query({
    args: {},
    handler: async (ctx) => {
      return await ctx.db.query(table).collect();
    },
});

export const createPreferences = mutation({
  args: {
    uid: v.string(),
    type: v.string(),
    q1: v.string(),
    q2: v.string(),
    q3: v.string(),
  },
  handler: async (ctx, args) => {
    const taskId = await ctx.db.insert(table, { ...args });
    console.log(taskId);
  },
});