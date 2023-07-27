import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <>
      <Typography>Addvertisement</Typography>

      <a
        href="https://www.tesla.com/de_de"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          width="100%"
          height="auto"
          alt="advert"
          src="https://ecomento.de/wp-content/uploads/2022/08/Tesla-Model-Y.jpg"
          style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
        />
      </a>
      <FlexBetween>
        <Typography color={main}>Tesla</Typography>
        <Typography color={medium}>Tesla.com.de</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Tesla cars are electric vehicles known for their innovative design,
        impressive performance, and advanced autonomous features.
      </Typography>
    </>
  );
};

export default AdvertWidget;
