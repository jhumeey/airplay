import prisma from "../lib/prisma";
export const resolvers = {
  Query: {
    resources: async (_parent, _args, context) => await context.prisma.resources.findMany(),
  }
}