import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import { createHandler } from 'graphql-http/lib/use/express';
import express from 'express';
import { connectDB } from './lib/mongoose.ts';

const PORT = 4000;

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: { 
        type: GraphQLString,
        resolve: () => 'Hello world!'
      },
    },
  }),
});

const app = express();

app.all(
  '/graphql',
  createHandler({
    schema: schema,
  }),
);

app.listen(PORT, async function() {
  await connectDB()
  console.log("Listening on port:", PORT);
})