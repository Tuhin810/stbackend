import mongoose from "mongoose"

export interface ApplicantQualification {
    qualification: string,
    inst_name: string,
    from_year: number,
    to_year: number
}

export interface IApplicationEducationSchema {
    applicant_id: string,
    qualificationList: ApplicantQualification[]
}