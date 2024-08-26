import { useSelector } from "react-redux";
import Card from "./Card";

const CategorySection = () => {
    const selector = useSelector((store) => store.dashBoardData);
    return (
        <div className="flex flex-col pl-10">
            {selector ? selector.map((dashData) => (
                <div key={dashData.id} className="mb-[20px]"> 
                    <h5 className="font-semibold text-md mb-[10px]">{dashData.categoryName}</h5>
                    <div className="flex flex-wrap gap-[10px]"> 
                        {dashData?.data?.map((data) => (
                           data.isShown && <Card key={data.id} data={data} className="mb-[10px]" />
                        ))}
                    </div>
                </div>
            )) : "No data"}
        </div>
    );
}

export default CategorySection;
