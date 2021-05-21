import React, {createContext, useState ,useEffect} from 'react';
// import {connect} from 'react-redux';
import axios from 'axios';

export const JobsContext=createContext();

const JobsContextProvider = (props) => {
    const [jobs,setJobs]=useState([]);
    useEffect(()=>{
        const canceltoken = axios.CancelToken.source();
        axios.get('https://jobs.github.com/positions.json',{canceltoken:canceltoken.token}).then(res=>{
            setJobs(res.data);
        }).catch(err=>{
            if(axios.isCancel(err)){
                console.log(err)
            }
        });
        return ()=>{
            canceltoken.cancel()
        }
    },[setJobs]);
    
    return (
        <JobsContext.Provider value={{jobs}}>{props.children}</JobsContext.Provider>
    )
};

// const mapDispatchToProps = (dispatch)=>{
//     return {
//         fetchJobsAction:(jobs)=>dispatch(fetchJobsAction(jobs))
//     }
// }

export default JobsContextProvider
