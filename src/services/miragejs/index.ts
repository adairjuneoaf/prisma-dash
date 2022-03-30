// Main Dependencies
import { createServer, Factory, Model, Response, ActiveModelSerializer } from "miragejs";
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

    serializers: {
      application: ActiveModelSerializer,
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
      server.createList("user", 7);
    },

    routes() {
      this.namespace = "api";
      this.timing = 1000; // 1 Segundo para retorno das requisições.

      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all("user").length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all("user")).users.slice(pageStart, pageEnd);

        return new Response(200, { "x-total-count": String(total) }, { users });
      });
      this.post("/users");

      this.namespace = ""; // Reset do namespace para VAZIO por conta do NEXT também possuir um namespace /api por padrão.
      this.passthrough(); // Configuração também do MirageJS para que chamadas que não existam no Mirage possam ser passadas ao NEXT caso exista a rota API por lá também.
    },
  });

  return server;
}
