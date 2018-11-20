export default `
  type Article {
    id: Int!
    title: String!
    subtitle: String!
    text: String!
    image_path: String!
    user: User!
    created_at: Number!
    collection: [Article!]!
  }
  type Date {

  }
  type Query {
    getArticle(id: Int!, title: String!, subtitle: String!, text: String!, image_path: String!, created_at: Number!): Article!
    collection: [Article!]!

  }
  
  `;