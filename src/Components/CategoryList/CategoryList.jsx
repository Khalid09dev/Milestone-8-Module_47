import { useEffect, useState } from "react";

const CategoryList = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setDatas(data))
    },[])

    return (
        <div className="pt-24 pb-32">
            <h2 className="text-[40px] text-white font-semibold text-center">Job Category List</h2>
            <p className="text-base font-normal text-white text-center pb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex justify-center gap-6">
                {
                    datas.map(data => <div className="flex" key={data.id}>
                            <div className="px-10 pt-10 pb-0 bg-gray-200 rounded-lg h-56 w-[300px]">
                                <img src={data.logo} alt="#" />
                                <p className="text-[#000] text-[19px] font-medium pt-5">{data.category_name}</p>
                                <p className="text-[#000] text-base font-normal">{data.availability}</p>
                            </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CategoryList;