import request from "./client";

export type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export function sendContact(form: ContactForm) {
  return request<void>("/contact", {
    method: "POST",
    body: JSON.stringify(form),
  });
}
