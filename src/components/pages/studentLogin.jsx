import { useEffect } from "react";

const StudentLogin = () => {
    useEffect(() => {
        window.location.href = "https://students.digitalworldtech.academy/"; // Replace with your target URL
    }, []);

    return null; // or return a loading spinner if desired
};

export default StudentLogin;
