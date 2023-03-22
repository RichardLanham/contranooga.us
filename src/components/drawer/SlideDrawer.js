import StrapiPages from "../StrapiPages";
import CloseIcon from "@mui/icons-material/Close";
import { Fab } from "@mui/material";
import { theme } from "../../assets/theme";

const slideDrawer = (props) => {
  // const [open, setOpen] = useState(false);
  console.log(props);
  const setDrawerOpen = props.setDrawerOpen;
  // console.log("Show: " + props.show);
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  const bgImage = require("../../assets/bgimages/burgerbg.webp");
  // console.log(bgImage);
  const closeDrawer = () => {
    console.log("close it");
    setDrawerOpen(false);
  };
  return (
    <div
      style={{
        width: "50%",
        maxWidth: 300,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "100% auto",
        // backgroundPosition: "center",
        backgroundRepeat: "repeat",
        zIndex: 5000,
        // position: "relative",
      }}
      className={drawerClasses}
    >
      <Fab
        style={{
          position: "fixed",
          bottom: 1,
          right: 1,
          zIndex: theme.zIndex.tooltip,
          // width: 45,
          // height: "auto",
          // border: "1px solid",
          // borderColor: theme.palette.secondary.main,
          // color: theme.palette.primary.contrastText,
        }}
      >
        <CloseIcon onClick={closeDrawer} />
      </Fab>
      <StrapiPages position="drawer" />
    </div>
  );
};

export default slideDrawer;
