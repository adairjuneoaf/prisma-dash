// Main Dependencies
import { createServer, Factory, Model } from "miragejs";
import { faker } from "@faker-js/faker";

// Typings[TypeScript]
type User = {
  id: string;
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        id() {
          return faker.datatype.uuid();
        },
        name() {
          return faker.name.findName();
        },
        email() {
          return faker.internet.email().toLocaleLowerCase();
        },
        created_at() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      server.createList("user", 10);
    },

    routes() {
      this.namespace = "api";
      this.timing = 1000; // 1 Segundo para retorno das requisições.

      this.get("/users");
      this.post("/users");

      this.namespace = ""; // Reset do namespace para VAZIO por conta do NEXT também possuir um namespace /api por padrão.
      this.passthrough(); // Configuração também do MirageJS para que chamadas que não existam no Mirage possam ser passadas ao NEXT caso exista a rota API por lá também.
    },
  });

  return server;
}
