import { useCallback, useEffect, useState } from "react";
import { Container, Grid, CircularProgress } from "@mui/material";
import axiosApi from "../../axiosApi";
import { IDish, IDishesList } from "../../types";
import { DishCard } from "../../components/dishCard/dishCard.tsx";

const Home = () => {
    const [dishes, setDishes] = useState<IDish[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchDishes = useCallback(async () => {
        try {
            setLoading(true);
            const response = await axiosApi.get<IDishesList | null>("/dishes.json");
            const data = response.data;

            console.log("Ответ от Firebase:", data);

            if (!data) {
                setDishes([]);
                return;
            }

            const newDishes: IDish[] = Object.keys(data).map((id) => ({
                ...data[id],
                id,
            }));

            setDishes(newDishes);
        } catch (error) {
            console.error("Ошибка загрузки блюд:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchDishes();
    }, [fetchDishes]);

    if (loading) {
        return (
            <Container sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <CircularProgress />
            </Container>
        );
    }

    return (
        <Container>
            <Grid container spacing={2}>
                {dishes.length > 0 ? (
                    dishes.map((dish) => (
                        <Grid item xs={12} sm={6} md={4} key={dish.id}>
                            <DishCard dish={dish} />
                        </Grid>
                    ))
                ) : (
                    <p>Блюд пока нет.</p>
                )}
            </Grid>
        </Container>
    );
};

export default Home;