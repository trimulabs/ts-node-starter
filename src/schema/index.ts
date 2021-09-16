import { gql } from 'apollo-server-express';
import { testSchema } from './test';

const linkSchema = gql`
  """
  An ISO-8601 encoded date string.
  """
  scalar Date

  scalar URI

  """
  A E.164 formatted phone number.
  """
  scalar PhoneNumber

  scalar Email

  """
  A 2-letter US state code.
  """
  scalar State

  scalar ZipCode

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

export default [
  linkSchema,
  testSchema,
];
