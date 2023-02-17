import StrapiPages from "../StrapiPages";

const slideDrawer = (props) => {
  // const [open, setOpen] = useState(false);

  // console.log("Show: " + props.show);
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  const bgImage = require("../../assets/bgimages/collage1.png");
  console.log(bgImage);
  return (
    <div
      style={{
        width: "50%",
        maxWidth: 300,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        zIndex: 5000,
      }}
      className={drawerClasses}
    >
      <StrapiPages position="drawer" />
    </div>
  );
};

export default slideDrawer;
