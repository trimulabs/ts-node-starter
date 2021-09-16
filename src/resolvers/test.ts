import { QueryResolvers } from '../generated/generated-types';

interface CombinedTestResolvers {
  Query: QueryResolvers;
}

export const testResolvers: CombinedTestResolvers = {
  Query: {
    test: async (source, args, ctx) => {
      return 'It works!'
    }
  }
}