import { gql } from 'apollo-server-express';

export const testSchema = gql`
extend type Query {
  test: String
}
`;
