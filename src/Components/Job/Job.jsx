import {MdLocationOn} from "react-icons/md"
import {AiOutlineDollar} from "react-icons/ai"
import { Link } from "react-router-dom";


const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl border border-[#757575] p-5">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="text-[#7E90FE] flex gap-4">
                    <button className="px-5 py-2 font-extrabold border border-[#7E90FE] rounded">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border border-[#7E90FE] rounded">{job_type}</button>
                </div>
                <div className="flex items-center gap-4 mt-4">
                    <h2 className="flex"><MdLocationOn className="text-2xl"></MdLocationOn>{location}</h2>
                    <h2 className="text-2xl flex items-center"><AiOutlineDollar></AiOutlineDollar>{salary}</h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                    <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;