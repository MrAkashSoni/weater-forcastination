import { useState } from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";

import WeatherDetailModal from "../modals/WeatherDetailModal";

const WeatherCard = ({ item }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card sx={{ minWidth: 250 }}>
        <CardMedia
          sx={{ height: 100, width: 100 }}
          image={item?.day?.condition?.icon}
          title={item?.day?.condition?.text}
        />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {item?.date}
          </Typography>
          <Typography variant="h7" component="div">
            Average temp <br /> (C): {item?.day?.avgtemp_c} / (F): {item?.day?.avgtemp_f}
          </Typography>
          <Typography sx={{ mb: 1.5 }}>Humidity: {item?.day?.avghumidity}</Typography>
          <Typography variant="body2">
            Max temp (C): {item?.day?.maxtemp_c} / (F): {item?.day?.maxtemp_f}
            <br />
            Min temp (C): {item?.day?.mintemp_c} / (F): {item?.day?.mintemp_f}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleOpen}>
            More Detail
          </Button>
        </CardActions>
      </Card>

      {open && <WeatherDetailModal open={open} handleClose={handleClose} hourlyData={item.hour} />}
    </>
  );
};

export default WeatherCard;
