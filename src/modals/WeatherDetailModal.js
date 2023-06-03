import { Modal, Grid, Box, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const WeatherDetailModal = ({ open, handleClose, hourlyData }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Grid container spacing={2}>
          {hourlyData?.map((item, index) => (
            <Grid item key={index}>
              <Typography color="text.secondary" sx={{ mb: 0.5, mt: 1 }}>
                {item?.time?.split(" ")[1]}
              </Typography>
              T (C): {item?.temp_c} <br />T (F): {item?.temp_f}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Modal>
  );
};

export default WeatherDetailModal;
