import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_PROJECTS_URL =  "http://localhost:3000/api/projects"

export const useProjects = () => {
    return useQuery(["projects"], async () => {
        const { data } = await axios.get(
            API_PROJECTS_URL
        );
        return data;
      });
}