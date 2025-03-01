import { Card, CardContent, Typography } from "@mui/material";
import { Dish } from "../../types.ts";
import { useNavigate } from "react-router-dom";

interface DishCardProps {
    dish: Dish;
}

export const DishCard: React.FC<DishCardProps> = ({ dish }) => {
    const navigate = useNavigate();

    return (
        <Card
            sx={{ marginBottom: 2, cursor: "pointer" }}
            onClick={() => navigate(`/dish/${dish.id}`)}
        >
            <CardContent>
                <Typography variant="h6">{dish.name}</Typography>
                <Typography variant="body1">{dish.price} ₽</Typography>
            </CardContent>
        </Card>
    )
}