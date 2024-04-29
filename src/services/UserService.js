import axios from "./custom-axios";

const fetchAllUser = () => {
    return (
        axios.get("/api/users/")
    )
}

export {fetchAllUser};