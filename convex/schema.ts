import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

export default defineSchema({
  ...authTables,

  // Project quotes and support inquiries
  projectQuotes: defineTable({
    name: v.string(),
    email: v.string(),
    category: v.string(),
    subject: v.string(),
    message: v.string(),
    status: v.string(), // "pending" | "reviewed" | "contacted"
    referenceId: v.string(),
    userId: v.optional(v.id("users")),
    createdAt: v.number(),
  }),
});
