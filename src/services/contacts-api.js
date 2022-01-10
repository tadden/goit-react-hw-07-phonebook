import axios from 'axios';

axios.defaults.baseURL =
  'https://61dc3359591c3a0017e1a79a.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get(`/Contacts`);

  return data;
}

export async function addContact(name, number) {
  const { data } = await axios.post(`/Contacts`, {
    name,
    number,
  });
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/Contacts/${id}`);
  return data;
}
