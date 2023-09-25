import { useEffect, useState } from "react";
import { useTheme, styled } from "@mui/material/styles";
import Site from "../../Site";
import { useSearchParams, useParams } from "react-router-dom";
import { Button, TextareaAutosize, Input } from "@mui/material";

import {
  UPDATE_LINK,
  CREATE_EMAIL_HISTORY,
  EMAIL_HISTORY,
  GET_LEADFORMS,
  GET_LEADFORM,
  DELETE_LINK,
} from "../../gql/links";

//  CREATE_EMAIL_HISTORY
// EMAIL_HISTORY
// // {"email": "richard.lanham2@gmail.com", "name": "Richard","leadFormId": 3}
import { useMutation, useQuery } from "@apollo/client";
import client from "../../apollo/client";

import ConfirmButtons from "../ConfirmButtons";

const LinkDetail = ({ contact }) => {
  const theme = useTheme();
  const [show, setShow] = useState(false);
  const [deleteLink] = useMutation(DELETE_LINK);
  const [formdata, setFormdata] = useState({});

  const [putLink] = useMutation(UPDATE_LINK);

  const handleDelete = async (e) => {
    await deleteLink({
      variables: {
        id: e.target.value,
      },
    }).then((res) => {
      client.refetchQueries({
        include: "active",
      });
    });
  };

  // const { data, loading, error } = useQuery(EMAIL_HISTORY, {
  //   variables: {
  //     email: contact.attributes.email || "",
  //   },
  // });

  // useEffect(() => {
  //   console.log("CONTACT DETAIL");
  //   if (!error) {
  //     if (data) {
  //       console.log(data.emailHistories.data);
  //     }
  //   }
  // }, [data, loading, error]);

  const handleFormField = (e) => {
    const field = e.target.name;
    const val = e.target.value;
    const form = Object.assign({}, formdata);
    const attribs = Object.assign({}, form.attributes);
    attribs[field] = val;
    form.attributes = attribs;
    setFormdata(form);
    //   console.log(form);
  };

  const handleUpdate = () => {
    const form = Object.assign({}, formdata);
    console.log(form);
    putLink({ variables: { ...form.attributes, id: form.id } }).then((res) => {
      // console.log(res);
      client.refetchQueries({
        include: "active",
      });
    });
  };

  useEffect(() => {
    setFormdata(contact);
  }, []);

  if (show) {
    return (
      <div
        style={{
          background: theme.palette.background.default,
        }}
      >
        <Button onClick={() => setShow(false)}>close</Button>
        <Button onClick={handleUpdate}>Update</Button>

        <ConfirmButtons
          action={handleDelete}
          value={contact.id}
          label="Delete!"
        >
          Delete
        </ConfirmButtons>

        <div className="formFields" style={{ ...theme.flexRows, width: 400 }}>
          <Input
            onChange={handleFormField}
            name="url"
            value={formdata.attributes.url}
            placeholder="Url"
          ></Input>
          <Input
            onChange={handleFormField}
            name="text"
            value={formdata.attributes.text}
            placeholder="Text"
          ></Input>
          <Input
            onChange={handleFormField}
            name="comment"
            value={formdata.attributes.comment || ""}
            placeholder="Comment"
          ></Input>
          <Input
            onChange={handleFormField}
            name="rate"
            value={formdata.attributes.rate || ""}
            placeholder="rate"
          ></Input>
        </div>
        <pre style={{ display: "none" }}>
          {JSON.stringify(formdata.attributes, null, 3)}
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Button onClick={() => setShow(true)}>details</Button>
    </div>
  );
};

export default LinkDetail;
