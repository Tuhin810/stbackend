import { createContext } from "react";
import { JobDetailsState } from "../../@types/interfaces/state/JobDetailsState";

export const JobDetailsListContext = createContext({} as JobDetailsState)