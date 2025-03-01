import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";
import axios from "axios";
import { Dish } from "../../types";

export const DishPage: React.FC = () => {
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

    const handleDelete = async () => {
        try {
            await axios.delete(`/dishes/${id}`);
            navigate("/");
        } catch (error) {
            console.error("Ошибка удаления блюда:", error);
        }
    };

    if (!dish) return <Typography>Загрузка...</Typography>;

    return (
        <Container>
            <Typography variant="h4">{dish.name}</Typography>
            <Typography variant="h6">Цена: {dish.price} ₽</Typography>
            <Typography variant="body1">{dish.description}</Typography>
            <Button variant="contained" color="error" onClick={handleDelete} sx={{ mt: 2 }}>
                Удалить блюдо
            </Button>
        </Container>
    );
};