import { useEffect, useState } from "react"
import { MatchedApplicantProps } from "../../../../@types/interfaces/props/matchedApplicantProps/MatchedApplicantProps"
import { getMatchedApplicantList } from "../../../../utils/apis/Job/jobpost"
import MatchedApplicantList from "../matchedApplicant/MatchedApplicantList"
import { IMatchedApplicantDetails } from "../../../../@types/interfaces/MatchedApplicant/MatchedApplicant"
import Spinner from "../../../shared/spinner/Spinner"

const MatchedApplicantBoard = ({matched_applicant_no,jobId}:MatchedApplicantProps) => {
    const [applicantDetailsList,setApplicantDetailsList]=useState<IMatchedApplicantDetails[]>([]);
    const [isLoading,setIsLoading]=useState<boolean>(false);
    const getApplicantDetailsList =async () => {
        setIsLoading(true);
        const response =await getMatchedApplicantList(jobId);
        setIsLoading(false);
        if(response?.status===200){
            setApplicantDetailsList(response?.data.data)
        }
    }
    useEffect(()=>{
        console.log(jobId);
        if(matched_applicant_no!==0){
            getApplicantDetailsList();
        }
    },[]);
  return (
    <>
    {
        (isLoading)?<><div className="flex justify-center"><Spinner/></div></>:
        <MatchedApplicantList applicantList={applicantDetailsList}/>
    }
    </>
  )
}

export default MatchedApplicantBoard