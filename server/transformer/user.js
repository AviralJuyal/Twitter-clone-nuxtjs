import human from "human-time";

export const userTransformer = (user) => {
  return {
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    profileImage: user.profileImage,
    handle: "@" + user.username,
    joinedAtHuman: human(user.createdAt),
  };
};
