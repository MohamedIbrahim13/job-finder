import React,{useContext} from 'react';
import { JobsContext } from '../contexts/fetchJobsContext';
import Job from './Job';


const JobList = () => {
    const {jobs} = useContext(JobsContext);
    return (
        <>
            {jobs.map(job => {
                return (<Job key={job.id} job={job} />)
            })}
        </>
    )
}

export default JobList
