import { BsSearch } from "react-icons/bs";

export const AutoCompleteBar = () => {
    return <div className="w-50 p-5 rounded mx-auto">
            <div clasName="form-floating ">
            <input style={{backgroundColor: "rgba(145, 158, 171, 0.04"}} id="search" type="text" className="form-control" placeholder="Search"/>
        </div>
    </div>
}