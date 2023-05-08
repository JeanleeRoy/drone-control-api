const getUser = async (id: string) => {
  // return await User.findByPk(id);
  return {
    uuid: "c0ce5ac4-ed4c-11ed-a05b-0242ac120003",
    name: "John Doe",
    email: "user@email.com",
  };
};

export { getUser };
