import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    uname: v.string(),
    pswd: v.string(),
  }),
  personnel_details: defineTable({
    uid: v.string(),
    name: v.string(),
    email: v.string(),
    display_profile: v.string(),
    social: v.string(),
    instruction: v.string(),
    message1: v.string(),
    message2: v.string(),
    message3: v.string(),
  }),
  preferrences: defineTable({
    uid: v.string(),
    type: v.string(),
    q1: v.string(),
    q2: v.string(),
    q3: v.string(),
  }),
  voters: defineTable({
    uid: v.string(),
    last_vote: v.string(),
    vote_count: v.float64()
  }),
  votes: defineTable({
    uid: v.string(),
    last_vote: v.string(),
    vote_count: v.float64()
  }).index("by_votes", ["vote_count"]),
  media: defineTable({
    uid: v.string(),
    media_url: v.string(),
    is_intro: v.boolean(),
    likes: v.array(v.string()),
  }),
  display_profile: defineTable({
    body: v.string(),
    author: v.string()
  })
});
