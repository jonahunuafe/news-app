import { getContacts } from "@/lib/data";

export const obtainContact = async() => {
    const contact = await getContacts();
    return contact;
}