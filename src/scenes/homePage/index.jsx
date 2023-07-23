import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidgit from "scenes/widgets/MyPostWidgit";
const Homepage = () => {
  const isNotMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id = "", picturePath = "" } = useSelector((state) => state.user);
  return (
    <Box>
      <Navbar />
      <Box
        width="100px"
        padding="2rem 6%"
        display={isNotMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNotMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNotMobileScreens ? "42%" : undefined}
          marginTop={isNotMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidgit picturePath={picturePath} />
        </Box>
        {isNotMobileScreens && <Box flexBasis="26%"></Box>}
      </Box>
    </Box>
  );
};

export default Homepage;
