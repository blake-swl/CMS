export default `
type User {
  id: Int!
  firstName: String!
  lastName: String!
  username: String!
  email: String!
  articles: [Article!]!
  collections: [Collection!]!
}
type RegisterResponse {
  ok: Boolean!
  user: User
  errors: [Error!]
}
type Query {
  getUser(id: Int!, firstName: String!, lastName: String!, username: String!): User!
  allUsers: [User!]!
}
type Mutation {
  register(username: String!, email: String!, password: String!, firstName: String!, lastName: String!): RegisterResponse!
}
`;
  // type Query {
  //   getUser(id: Int!): User!
  //   allUsers: [User!]!
  // }
  
  // type RegisterResponse {
  //   ok: Boolean!
  //   user: User
  
  // }
  
  // type Mutation {
  //   register(username: String!, email: String!, password: String!): RegisterResponse!
  // }