import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const sendImage = mutation({
    args: { storageId: v.string(), author: v.string() },
    handler: async (ctx, args) => {
      await ctx.db.insert("display_profile", {
        body: args.storageId,
        author: args.author
      });
    },
});

export const getMetadata = query({
  args: { storageId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.storage.getMetadata(args.storageId);
  },
});
