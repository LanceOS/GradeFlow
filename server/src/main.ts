import Fastify from 'fastify'

const server = Fastify({
  logger: true
});

server.get('/', async (request, reply) => {
  return { 'hello world' };
});

server.listen({ port: 4000 }, (err, address) => {
  if(err) {
    console.log(err);
    process.exit(1);
  };
  console.log("Running on address:", address);
});

