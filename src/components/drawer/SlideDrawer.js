import StrapiPagesDrawer from "../StrapiPagesDrawer";

const slideDrawer = (props) => {
  // const [open, setOpen] = useState(false);

  // console.log("Show: " + props.show);
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <div style={{ width: "calc(50%)" }} className={drawerClasses}>
      <div style={{ height: 30 }}></div>
      <StrapiPagesDrawer />
    </div>
  );
};

export default slideDrawer;
