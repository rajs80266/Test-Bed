import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

const table = "users";

export const get = query({
    args: {},
    handler: async (ctx) => {
      return await ctx.db.query(table).collect();
    },
});

export const createUser = mutation({
  args: { 'uname': v.string(), 'pswd': v.string() },
  handler: async (ctx, args) => {
    const taskId = await ctx.db.insert(table, { ...args });
    return taskId;
  },
});