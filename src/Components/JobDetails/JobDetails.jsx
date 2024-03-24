import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    const handleApplyJob = () => {
        toast('you have applied successfully');
    }

    return (
        <div className="mt-10 mb-10">
            <div className="grid gap-4 grid-cols-4">
                <div className=" md:col-span-3">
                    <h2 className="text-4xl text-white pb-4 text-center">Details Coming here</h2>
                    <h2 className="text-white text-base font-normal"><span className="text-white text-base font-semibold underline">Job Description:</span> {job.job_description} </h2>
                    <h2 className="text-white text-base font-normal pt-6"><span className="text-white text-base font-semibold underline">Job Responsibility:</span> {job.job_responsibility}</h2>
                    <h2 className="pt-6"><span className="text-[white] text-base font-semibold underline">Educational Requirements:</span></h2>
                    <p className="text-white text-base font-normal pt-1">{job.educational_requirements}</p>
                    <p className="text-white text-base font-semibold pt-6">{job.company_name}</p>
                    <h2 className="text-white text-base font-semibold pt-6 underline">Experiences:</h2>
                    <p className="text-white text-base font-normal pt-2">{job.experiences}</p>
                </div>
                <div>
                    <div className="bg-[#7E10FE] p-7 rounded-lg">
                        <h2 className="text-white text-xl font-semibold pb-6">Job Details</h2>
                        <hr/>
                        <h2 className="text-white font-normal pt-5"><span className="font-semibold">Salary:</span> {job.salary} (Per Month)</h2>
                        <h2 className="text-white font-normal pt-2"><span className="font-semibold">Job Title: </span>{job.job_title}</h2>
                        <h2 className="text-white font-semibold pb-6 pt-8">Contact Information</h2>
                        <hr />
                        <h2 className="text-white font-normal pt-4"><span className="font-semibold">Phone:</span> {job.contact_information.phone}</h2>
                        <h2 className="text-white font-normal pt-2"><span className="font-semibold">Email:</span> {job.contact_information.email}</h2>
                        <h2 className="text-white font-normal pt-1"><span className="font-semibold">Address:</span> {job.contact_information.address}</h2>
                    </div>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full mt-6">Apply Now</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;