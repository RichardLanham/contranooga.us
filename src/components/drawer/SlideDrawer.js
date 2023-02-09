import StrapiPages from "../StrapiPages";

const slideDrawer = (props) => {
  // const [open, setOpen] = useState(false);

  // console.log("Show: " + props.show);
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <div style={{ width: "50%", maxWidth: 300 }} className={drawerClasses}>
      <div style={{ height: 30 }}></div>
      <StrapiPages position="drawer" />
    </div>
  );
};

export default slideDrawer;
