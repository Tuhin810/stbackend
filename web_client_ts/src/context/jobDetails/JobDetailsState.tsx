import { useReducer } from 'react';
import { JobDetailsListReducer } from '../../reducers/jobReducers/JobReducer';
import { JobDetailsListContext } from './JobDetailsContext';

const JobListState = (props: any) => {
    const [jobDetailsListDetails, jobListDispatch] = useReducer(JobDetailsListReducer, {
        isFetched: false,
        jobList: []
    });
    return (
        <div>
            <JobDetailsListContext.Provider value={{jobDetailsListDetails, jobListDispatch}}>
                {props.children}
            </JobDetailsListContext.Provider>
        </div>
    )
}

export default JobListState
