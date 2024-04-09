export abstract class UsersRepository {
  abstract create(name: string, memberFunction: string): Promise<void>;
}
