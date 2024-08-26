import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addData } from "../utils/dashBoardDataSlice";

const useDashBoardData = () => {
    const dispatch = useDispatch();
    const selector = useSelector((store) => store.dashBoardData);
    const getData = async () => {
        const data = await fetch(
            "http://localhost:4000/dashboardData",
         
        );
        const json = await data.json();
        dispatch(addData(json));
    };

    useEffect(() => {
        !selector && getData();
    },[]);
}

export default useDashBoardData;