import axios from "axios";

const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const requestContacts = async () => {
  const { data } = await instance.get("/contacts");

  return data;
};

export const addNewContact = async (newContact) => {
  const { data } = await instance.post("/contacts", newContact, {
    headers: { "Content-Type": "application/json" },
  });

  return data;
};

export const deleteContactById = async (id) => {
  const { data } = await instance.delete(`/contacts/${id}`, {});

  return data;
};
