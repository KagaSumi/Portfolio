import request from "./client";

export type Project = {
  id: number;
  title: string;
  description: string;
  stack: string[];
  github: string;
};

export function getProjects() {
  return request<Project[]>("/projects");
}
