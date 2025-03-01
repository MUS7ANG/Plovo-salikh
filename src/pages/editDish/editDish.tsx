import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Dish } from "../../types";
import { DishForm } from "../../components/dishForm/dishForm.tsx";

export const EditDish: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [dish, setDish] = useState<Dish | null>(null);

    useEffect(() => {
        const fetchDish = async () => {
            try {
                const { data } = await axios.get<Dish>(`/dishes/${id}`);
                setDish(data);
            } catch (error) {
                console.error("Ошибка загрузки блюда:", error);
            }
        };

        fetchDish();
    }, [id]);

    const handleUpdate = async (updatedDish: Dish) => {
        try {
            await axios.put(`/dishes/${id}`, updatedDish);
            navigate("/");
        } catch (error) {
            console.error("Ошибка обновления блюда:", error);
        }
    };

    return dish ? <DishForm initialData={dish} onSubmit={handleUpdate} /> : <p>Загрузка...</p>;
};