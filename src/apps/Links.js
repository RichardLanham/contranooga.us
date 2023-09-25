import { useEffect, useState } from "react";
import { useTheme, styled } from "@mui/material/styles";
import Site from "../Site";
import { Button, TextareaAutosize, Input } from "@mui/material";

import { GET_LINKS, UPDATE_LINK } from "../gql/links";

import { useMutation, useQuery } from "@apollo/client";
import client from "../apollo/client";

import LinkDetail from "../components/crm/LinkDetail";

import LinkAdd from "../components/crm/LinkAdd";

require("./css/links.css");

const Links = () => {
  const theme = useTheme();
  const [updateLink] = useMutation(UPDATE_LINK);

  const { data, loading, error } = useQuery(GET_LINKS);

  const [list, setList] = useState([]);

  const [show, setShow] = useState(false);

  const [url, setUrl] = useState("");

  useEffect(() => {
    if (!loading) {
      if (!error) {
        if (data) {
          console.log(data.links.data.attributes);
          const d = JSON.parse(JSON.stringify(data));
          //   console.log(d);
          setList(
            d?.links?.data.sort((a, b) => {
              if (
                a?.attributes?.text.toLowerCase() <
                b?.attributes?.text.toLowerCase()
              ) {
                return -1;
              }
            })
          );
          console.log(list);
        }
      }
    }
  }, [data, error, loading]);

  const update_Link = async (info, day) => {
    await updateLink({
      variables: {
        // dance_day: day,
        // message: info,
      },
    })
      .then((res) => {
        console.log(res);
        client.refetchQueries({
          include: "active",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const LinkList = () => {
    if (!show)
      return (
        <div
          style={{
            display: "flex",
            marginTop: 300,
            width: "100%",
            backgroundColor: "green",
          }}
        >
          <div style={{ width: "90%" }}>&nbsp;</div>
          <div
            onDoubleClick={() => setShow(!show)}
            style={{ width: "10%", backgroundColor: "yellow" }}
          >
            &nbsp;
          </div>
        </div>
      );

    return (
      <div
        style={{
          position: "relative",
          marginTop: 300,
          marginBottom: 300,
          border: "1px solid green",
        }}
      >
        <LinkAdd />
        <div
          onClick={() => setShow(!show)}
          style={{
            display: "inline-block",
            width: 100,
            backgroundColor: "yellow",
          }}
        >
          &nbsp;
        </div>

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
                <div
                  style={{
                    backgroundColor:
                      url === contact.attributes.url ? "red" : "",
                  }}
                  className="col"
                >
                  <a
                    target="_new"
                    onClick={() => setUrl(contact.attributes.url)}
                    href={contact.attributes.url}
                  >
                    {contact.attributes.text}
                  </a>
                </div>
                <div
                  style={{
                    ...theme.typography.caption1,
                  }}
                ></div>

                <LinkDetail id={key} contact={contact} />
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

  return (
    <Site title="links">
      <LinkList />
    </Site>
  );
};

export default Links;
