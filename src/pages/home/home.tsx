import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import axios from "axios";
import { Dish } from "../../types.ts";
import { DishCard } from "../../components/dishCard/dishCard.tsx";

export const Home: React.FC = () => {
    const [dishes, setDishes] = useState<Dish[]>([]);

    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const { data } = await axios.get<Dish[]>("/dishes");
                setDishes(data);
            } catch (error) {
                console.error("Ошибка загрузки блюд:", error);
            }
        };

        fetchDishes();
    }, []);

    return (
        <Container>
            <Grid container spacing={2}>
                {dishes.map((dish) => (
                    <Grid item xs={12} sm={6} md={4} key={dish.id}>
                        <DishCard dish={dish} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};