import axios from "axios";

const fetchAllUser = () => {
    return (
        axios.get("http://127.0.0.1:8000/api/users/")
    )
}

export {fetchAllUser};