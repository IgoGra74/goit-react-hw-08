import axios from "axios";

const instance = axios.create({
  baseURL: "https://66213b503bf790e070b247c0.mockapi.io",
});

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
