import { User } from './user.model';

export class UserResponse {
  constructor(
              public content: User[],
              public totalPages: number,
              public totalElements: number) {}
}
