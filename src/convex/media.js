import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

const table = "media";

export const get = query({
    args: {},
    handler: async (ctx) => {
      return await ctx.db.query(table).collect();
    },
});

export const createMedia = mutation({
  args: { 
    uid: v.string(),
    media_url: v.string(),
    is_intro: v.boolean(),
    likes: v.array(v.string()),
   },
  handler: async (ctx, args) => {
    const taskId = await ctx.db.insert(table, { ...args });
    console.log(taskId);
  },
});