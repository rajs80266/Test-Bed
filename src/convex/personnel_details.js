import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

const table = "personnel_details";

export const get = query({
    args: {},
    handler: async (ctx) => {
      return await ctx.db.query(table).collect();
    },
});

export const createPersonnelDetails = mutation({
  args: {
    uid: v.string(),
    name: v.string(),
    email: v.string(),
    display_profile: v.string(),
    social: v.string(),
    instruction: v.string(),
    message1: v.string(),
    message2: v.string(),
    message3: v.string(),
  },
  handler: async (ctx, args) => {
    const taskId = await ctx.db.insert(table, { ...args });
    console.log(taskId);
  },
});