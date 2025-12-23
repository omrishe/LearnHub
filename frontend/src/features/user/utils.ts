import { UserBackendRead, UserRead } from "./userInterfaces";

function mapUserBackendToUserRead(user: UserBackendRead): UserRead {
  return {
    id: user.id,
    email: user.email,
    username: user.username,
    firstName: user.first_name,
    lastName: user.last_name,
    createdAt: user.createdAt,
  };
}
