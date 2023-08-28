import { createContext } from "react";
import { ApplicantState } from "../../@types/interfaces/state/ApplicantState";

export const applicantContext= createContext({} as ApplicantState);
