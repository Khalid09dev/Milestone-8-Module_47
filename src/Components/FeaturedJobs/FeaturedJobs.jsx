import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    // this is not the best way to load all data
    const [dataLength, setDataLength] = useState(4); 

    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    return (
        <div>
            <div className="text-center">
                <h2 className="text-[40px] text-white font-semibold text-center">Featured Jobs: {jobs.length}</h2>
                <p className="text-base font-normal text-white text-center pb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
                <div className="flex justify-center pt-10">
                    <div className={dataLength === jobs.length && 'hidden'}>
                    <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">Show All Jobs</button>
                    </div>
                </div>
        </div>
    );
};

export default FeaturedJobs;