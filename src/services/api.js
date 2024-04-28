import axios from "axios";

const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});
// export const setToken = (token) => {
//   instance.defaults.headers.common.Authorization = `Bearer ${token}`;
// };
// export const resetToken = () => {
//   instance.defaults.headers.common.Authorization = null;
// };

export const fetchContacts = async () => {
  const { data } = await instance.get("/contacts");

  return data;
};
export const addContact = async (newContact) => {
  const { data } = await instance.post("/contacts", newContact);

  return data;
};
export const deleteContact = async (contactId) => {
  const { data } = await instance.delete(`/contacts/${contactId}`);

  return data;
};
