export interface Users {
    users: User[];
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: string;
  gender: string;
  email: string;
  phone: string;
  username: string;
  birthDate: string;
  expanded: boolean;
}
