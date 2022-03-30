// Services Dependencies
import { api } from "./axios";

// Styled Dependencies
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

// Typings[TypeScript]
type User = {
  id: string;
  name: string;
  email: string;
  created_at: string;
};

type NewUserProps = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  created_at: string;
};

interface UserDataFetch {
  users: Array<User>;
}
type GetUsersResponseAPI = {
  users: User[];
  totalCount: number;
};

export const getAllUsers = async (page: number): Promise<GetUsersResponseAPI> => {
  const { data, headers } = await api.get<UserDataFetch>("/users", {
    params: {
      page,
    },
  });

  const totalCount = Number(headers["x-total-count"]);

  const users = data.users.map((user: User) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: format(new Date(user.created_at), "dd/MM/yyyy", {
        locale: ptBR,
      }),
    };
  });

  return { users, totalCount };
};

export const createNewUser = async (userData: NewUserProps) => {
  const { data } = await api.post("/users", {
    user: {
      ...userData,
    },
  });

  return console.log(data);
};
