import { useState } from "react";
import { useTheme, styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Editor = ({ container, content }) => {
  console.log(container);
  const theme = useTheme();
  const [show, setShow] = useState(false);

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
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Button onClick={() => setShow((prev) => !prev)}>Close</Button>

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
