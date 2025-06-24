import { useNavigate } from "react-router-dom";

export function useOrqagaQaytish() {
    const navigate = useNavigate();

    return () => {
        navigate(-1);
    };
}
