# GraphQL Overview

GraphQL is a query language for APIs and a runtime for executing those queries using a type system you define for your data. Developed by Facebook in 2012 and released as an open-source project in 2015, GraphQL provides an alternative to traditional REST APIs.

## How GraphQL Works

1. **Client Request**: The client sends a query to the server specifying exactly what data it needs.
2. **Server Execution**: The server executes the query by resolving the fields specified in the query using the functions defined for those fields.
3. **Response**: The server returns a JSON response containing the requested data.

## Main Components of GraphQL

### Schema

Defines the types and structure of data available in the API. It includes:

- **Types**: Define the shape of the data (e.g., `User`, `Post`).
- **Queries**: Define the read operations available (e.g., `getUser`, `listPosts`).
- **Mutations**: Define the write operations available (e.g., `createUser`, `updatePost`).
- **Subscriptions**: Define real-time operations to get updates (e.g., `onPostCreated`).

### Resolvers

Functions that resolve a query to actual data. Each field in a type has a corresponding resolver function that fetches the required data.

- **Query Resolvers**: Fetch data for read operations.
- **Mutation Resolvers**: Perform write operations and return the result.
- **Subscription Resolvers**: Handle real-time updates.

### Queries and Mutations

The client specifies queries and mutations to interact with the server.

- **Query**:

  ```graphql
  query {
    user(id: "1") {
      name
      email
    }
  }
  ```

- **Mutation**:

```
mutation { # create new user
  createUser(name: "") {
    id
    name
    email
    errors {
      path
      errors {
      	validator
      	message
      	code
      }
    }
  }
}
```
