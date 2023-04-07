import { useEffect, useState } from "react";
import { useTheme, styled } from "@mui/material/styles";
import Site from "../Site";
import { useSearchParams, useParams } from "react-router-dom";
import { Button, TextareaAutosize, Input } from "@mui/material";

import {
  UPDATE_LEAD_FORM,
  CREATE_EMAIL_HISTORY,
  EMAIL_HISTORY,
  EMAIL_HISTORIES,
  GET_LEADFORMS,
  GET_LEADFORM,
  DELETE_LEADFORM,
} from "../gql/leadForm";

//  CREATE_EMAIL_HISTORY
// EMAIL_HISTORY
// // {"email": "richard.lanham2@gmail.com", "name": "Richard","leadFormId": 3}
import { useMutation, useQuery } from "@apollo/client";
import client from "../apollo/client";

import ConfirmButtons from "../components/ConfirmButtons";

import ContactDetail from "../components/crm/ContactDetail";

require("./css/crm.css");

const Crm = () => {
  const { id } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();

  const [createEmailHistory] = useMutation(CREATE_EMAIL_HISTORY);
  const [message, setMessage] = useState("looking ...");
  const theme = useTheme();
  const { data, loading, error } = useQuery(GET_LEADFORMS);
  const [list, setList] = useState([]);

  const [emailHistory, setEmailHistory] = useState([]);
  useEffect(() => {
    // const email = searchParams.get("email");
    if (!loading) {
      if (!error) {
        if (data) {
          const d = JSON.parse(JSON.stringify(data));
          setList(
            d?.leadFormSubmissions?.data.sort((a, b) => {
              if (
                a?.attributes?.name.toLowerCase() <
                b?.attributes?.name.toLowerCase()
              ) {
                return -1;
              }
            })
          );
        }
      }
    }
  }, [data, error, loading]);

  const {
    data: emaildata,
    loading: emailloading,
    error: emailerror,
  } = useQuery(EMAIL_HISTORIES);

  useEffect(() => {
    if (!emailloading) {
      if (!emailerror) {
        if (emaildata) {
          console.log(emaildata);
          setEmailHistory(
            emaildata.emailHistories.data.map((d) => d.attributes.email)
          );
        }
      }
    }
  }, [emaildata, emailloading, emailerror]);

  const sendEmail = async (contact) => {
    console.log(contact);

    // // {"email": "richard.lanham2@gmail.com", "name": "Richard","leadFormId": 3}
    await createEmailHistory({
      variables: {
        email: contact.attributes.email,
        name: contact.attributes.name,
        leadFormId: Number(contact.id),
        info: theme.infoMessage,
        day: theme.infoDay,
      },
    })
      .then((res) => {
        client.refetchQueries({
          include: "active",
        });
      })
      .catch((err) => {});
  };

  const CRMList = ({ info }) => {
    return (
      <div
        style={{
          position: "relative",
          marginTop: 300,
          marginBottom: 300,
          border: "1px solid green",
        }}
      >
        <Controls />
        {
          list.map((contact, key) => {
            // console.log(contact);
            //   if (contact.attributes.email !== "richard.lanham@gmail.com") {
            //     return null;
            //   }
            return (
              <div
                className="contacts"
                key={key}
                style={{
                  ...theme.flexRows,
                  gap: 10,
                  width: "100hw",
                  backgroundColor: theme.palette.grey[200],
                }}
              >
                <div>
                  <Button onClick={() => sendEmail(contact)}>send</Button>
                </div>
                <div className="col">{contact.attributes.name}</div>
                <div className="col">{contact.attributes.email}</div>
                <div
                  style={{
                    ...theme.typography.caption1,
                  }}
                >
                  {contact.attributes.last_email_date !== null && (
                    <div>
                      {new Date(
                        contact.attributes.last_email_date
                      ).toDateString()}
                      &nbsp;
                      {new Date(
                        contact.attributes.last_email_date
                      ).toLocaleTimeString()}
                    </div>
                  )}
                </div>
                <ContactDetail id={key} contact={contact} />
                <pre style={{ display: "none" }}>
                  {JSON.stringify(contact, null, 3)}
                </pre>
              </div>
            );
          })
          //   .sort((a, b) => {
          //     if (a.attributes.name < b.attributes.name) {
          //       return -1;
          //     }
        }
      </div>
    );
  };

  const Sent = () => {
    return (
      <div style={{ position: "absolute", left: "60%", top: 150 }}>
        {emailHistory.map((contact, key) => {
          return <div key={key}>{contact}</div>;
        })}
      </div>
    );
  };

  const Controls = () => {
    const [info, setInfo] = useState("The caller is Vicki Herndon");
    const [day, setDay] = useState("April 8th");
    theme.infoDay = "April 8th";
    theme.infoMessage = "The caller is Vicki Herndon";
    const handleInfo = (e) => {
      console.log(e.target.value);
      setInfo(e.target.value);
      theme.infoMessage = e.target.value;
    };

    const handleDay = (e) => {
      setDay(e.target.value);
      theme.infoDay = e.target.value;
    };

    return (
      <div
        style={{
          marginLeft: 10,
          ...theme.flexRows,
          justifyContent: "left",
          alignItems: "center",
          alignContent: "top",
          gap: 20,
          width: "100vw",
          border: "2px solid purple",
        }}
      >
        <font style={{ ...theme.typography.h5 }}>Message:</font>
        <TextareaAutosize
          style={{ ...theme.typography.h4 }}
          placeholder="DANCE NOTE"
          onChange={handleInfo}
          value={info}
        ></TextareaAutosize>
        <font style={{ ...theme.typography.h5 }}>Dance Day:</font>
        <Input
          variant="outlined"
          style={{
            ...theme.typography.h4,
            backgroundColor: "#fff",
          }}
          value={day}
          onChange={handleDay}
          placeholder="Month Day"
        />
        <Sent />
      </div>
    );
  };
  return (
    <Site title="Unsubscribe">
      <CRMList />
    </Site>
  );
};

export default Crm;
