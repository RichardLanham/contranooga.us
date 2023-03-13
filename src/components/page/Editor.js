import { useState, useEffect } from "react";
import { useTheme, styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Editor = ({ container }) => {
  // console.log(container);
  const field = container.fields;
  const Id = container.id;
  const content = container.content;
  const typename = container.typename;
  // console.log(typename);
  const [data, setData] = useState("");
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
        setUrl((prev) => prev + "richtext");
        break;
      }
      case "ComponentSectionsInputs": {
        setUrl((prev) => prev + "richtextInputs");
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
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Button onClick={() => setShow((prev) => !prev)}>Edit</Button>
      </div>
    );
  }
  const handleChange = (data) => {
    // setData(data);
    const _put = Object.assign({}, put);
    _put.richtext.content = data;
    _put.richtext.richtext = data;
    console.log(_put);
    setPut(_put);
  };

  const handleUpdate = async () => {
    console.log(JSON.stringify(put));

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
    });
  };

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: theme.palette.background.default,
        zIndex: theme.zIndex.drawer,
      }}
    >
      <Button onClick={() => setShow((prev) => !prev)}>Close</Button>
      <Button onClick={() => handleUpdate()}>Update</Button>
      <pre>{JSON.stringify(container, null, 3)}</pre>
      <CKEditor
        editor={ClassicEditor}
        data={content}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
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

export default Editor;
