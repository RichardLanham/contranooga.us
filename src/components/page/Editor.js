import { useState, useEffect } from "react";
import { useTheme, styled } from "@mui/material/styles";
import { Button, IconButton } from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Editor from "ckeditor5-custom-build/build/ckeditor";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

const RichEditor = ({ container }) => {
  // console.log(container);
  const field = container.field;
  const Id = container.id;
  // console.log(Id);
  // console.log(field);
  const content = container.content;
  const typename = container.typename;
  // console.log(typename);
  // console.log(typename);
  // const [data, setData] = useState("");
  const [dirty, setDirty] = useState(false);
  const [url, setUrl] = useState(process.env.REACT_APP_SIDECAR_API);
  const [put, setPut] = useState({
    richtext: {
      id: Id,
      content: "",
      richtext: "", // don't use any other names, from now on.
    },
  });

  const theme = useTheme();
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log(typename);
    switch (typename) {
      case "ComponentSectionsRichText": {
        setUrl(
          process.env.REACT_APP_SIDECAR_API + "components_sections_rich_texts"
        );
        break;
      }
      case "ComponentSectionsInputs": {
        setUrl(process.env.REACT_APP_SIDECAR_API + "components_slices_inputs");
        break;
      }

      // components_slices_large_videos richtext
      // components_elements_gmaps richtext
      // components_elements_ckeditors richtext

      case "ComponentSectionsLargeVideo": {
        setUrl(
          process.env.REACT_APP_SIDECAR_API + "components_slices_large_videos"
        );
        break;
      }

      case "ComponentSectionsInputs": {
        setUrl(process.env.REACT_APP_SIDECAR_API + "components_elements_gmaps");
        break;
      }

      case "ComponentElementsCkeditor": {
        setUrl(
          process.env.REACT_APP_SIDECAR_API + "components_elements_ckeditors"
        );
        break;
      }

      default: {
      }
    }
  }, [typename]);

  const StyledEditor = styled(CKEditor)(({ theme }) => ({
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  }));
  if (!show) {
    return (
      <div
        style={{
          position: "absolute",
          // height: "fit-content",
        }}
      >
        <Fab
          // variant="contained"
          style={{
            position: "relative",
            top: -25,
            left: -20,
            width: 40,
            height: "auto",
          }}
          onClick={() => setShow((prev) => !prev)}
        >
          <EditIcon />
        </Fab>
      </div>
    );
  }
  const handleChange = (data) => {
    // setData(data);
    const _put = Object.assign({}, put);
    _put.richtext.content = data;
    _put.richtext.richtext = data;
    // console.log(_put);
    setDirty(true);
    setPut(_put);
  };

  const handleKeys = (e) => {
    // console.log(e.keyCode);
  };

  function KeyPress(e) {
    // console.log(e.ctrlKey);
    if (e.keyCode === 83 && e.ctrlKey) {
      console.log("Ctrl+z");
      handleUpdate();
    }
  }

  const handleUpdate = async () => {
    if (!dirty) {
      return;
    }

    // console.log(JSON.stringify(put));
    // log

    const _put = Object.assign({}, put);

    switch (typename) {
      case "ComponentSectionsRichText": {
        delete _put.richtext.richtext;
        break;
      }
      case "ComponentSectionsInputs": {
        delete _put.richtext.content;
        break;
      }
      default: {
      }
    }

    const response = await fetch(url, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: "follow", // manual, *follow, error
      // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(_put), // body data type must match "Content-Type" header
    }).then((res) => {
      if (res.ok) {
        // eventEmitter.dispatch("REQUERY", {});
      }
    });
  };

  // "Georgia, serif",
  //     "Lucida Sans Unicode, Lucida Grande, sans-serif",
  //     "Tahoma, Geneva, sans-serif",
  //     "Times New Roman, Times, serif",
  //     "Trebuchet MS, Helvetica, sans-serif",
  //     "Verdana, Geneva, sans-serif",
  const fontFamilyConfig = {
    options: [
      "default",
      "Roboto Mono",
      "Roboto Condensed",
      "Roboto Flex",
      "Roboto Slab",
      "Roboto Serif",
      "Rampart One",
      "Titan One",
      "Anton",
      "Arial, Helvetica, sans-serif",
      "Courier New, Courier, monospace",
    ],
  };

  return (
    <div
      onKeyDown={handleKeys}
      onKeyUp={KeyPress}
      style={{
        position: "absolute",
        backgroundColor: theme.palette.background.default,
        zIndex: theme.zIndex.drawer,
      }}
    >
      <Button onClick={() => setShow((prev) => !prev)}>Close</Button>
      <Button onClick={() => handleUpdate()}>Update</Button>
      <pre style={{ display: "none" }}>
        {JSON.stringify(container, null, 3)}
      </pre>
      <span style={{ ...theme.typography.caption }}>
        {container.typename},{container.id},{container.field}
      </span>
      <CKEditor
        editor={Editor}
        data={content}
        config={{
          fontFamily: fontFamilyConfig,
        }}
        // config={{
        //   // plugins: [Paragraph],
        //   toolbar: [
        //     "sourceEditing",
        //     "heading",
        //     "|",
        //     "bold",
        //     "italic",
        //     "underline",
        //     "strikethrough",
        //     "link",
        //     "bulletedList",
        //     "numberedList",
        //     "blockQuote",
        //     "fontFamily",
        //     "fontSize",
        //   ],
        //   fontFamily: {
        //     options: [
        //       "default",
        //       "Ubuntu, Arial, sans-serif",
        //       "Ubuntu Mono, Courier New, Courier, monospace",
        //     ],
        //   },
        //   fontSize: {
        //     options: [9, 11, 13, "default", 17, 19, 21],
        //   },
        //   heading: {
        //     options: [
        //       {
        //         model: "paragraph",
        //         title: "Paragraph",
        //         class: "ck-heading_paragraph",
        //       },
        //       {
        //         model: "heading1",
        //         view: "h1",
        //         title: "Heading 1",
        //         class: "ck-heading_heading1",
        //       },
        //       {
        //         model: "heading2",
        //         view: "h2",
        //         title: "Heading 2",
        //         class: "ck-heading_heading2",
        //       },
        //       {
        //         model: "heading3",
        //         view: "h3",
        //         title: "Heading 3",
        //         class: "ck-heading_heading3",
        //       },
        //       {
        //         model: "heading4",
        //         view: "h4",
        //         title: "Heading 4",
        //         class: "ck-heading_heading4",
        //       },
        //       {
        //         model: "heading5",
        //         view: "h5",
        //         title: "Heading 5",
        //         class: "ck-heading_heading5",
        //       },
        //       {
        //         model: "heading6",
        //         view: "h6",
        //         title: "Heading 6",
        //         class: "ck-heading_heading6",
        //       },
        //     ],
        //   },
        // }}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          // console.log({ event, editor, data });
          handleChange(data);
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
};

export default RichEditor;
