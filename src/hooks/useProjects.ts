import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useProjects = () => {
    return useQuery(["projects"], async () => {
        const { data } = await axios.get("api/projects");
        return data;
      });
}