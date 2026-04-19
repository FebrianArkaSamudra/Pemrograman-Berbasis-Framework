import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductPage = () => {
    // Simulate login state (change to true to simulate logged in)
    const [isLogin] = useState(false);
    const { push } = useRouter();
    useEffect(() => {
        if (!isLogin) {
            push("/auth/login");
        }
    }, [isLogin, push]);
    return (
        <div>
            Product User Page
        </div>
    );
};

export default ProductPage;