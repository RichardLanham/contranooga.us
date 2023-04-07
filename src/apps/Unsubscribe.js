import { useEffect, useState } from "react";
import { useTheme, styled } from "@mui/material/styles";
import Site from "../Site";
import { useSearchParams, useParams } from "react-router-dom";
import { DELETE_LEADFORM } from "../gql/leadForm";
import { GET_LEADFORM } from "../gql/leadForm";
import { useMutation, useQuery } from "@apollo/client";

import { StyledPage, StyledBody } from "../styles/ComponentStyles";

const Unsubscribe = () => {
  const { id } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();

  const [deleteLeadform] = useMutation(DELETE_LEADFORM);

  const [message, setMessage] = useState("looking ...");

  const theme = useTheme();

  const { data, loading, error } = useQuery(GET_LEADFORM, {
    variables: { id: id },
  });

  useEffect(async () => {
    const email = searchParams.get("email");
    if (!error) {
      if (data) {
        const _email = data?.leadFormSubmission?.data.attributes.email;
        console.log(_email);
        if (_email === email) {
          await deleteLeadform(
            {
              variables: {
                id: id,
              },
            },
            []
          )
            .then((res) => {
              console.log(res);
              setMessage(`Your email ${email} is unsubscribed Thanks.`);
            })
            .catch((err) => {
              // console.log(err.message);\
              setMessage(err.message);
            });
        } else {
          setMessage("Email does not exist. It may have already been deleted");
        }
      }
    }
  }, [data, error, loading]);

  const StyledAnchor = styled("a")(({ theme }) => ({
    // backgroundColor: theme.palette.background.default,
    ...theme.typography.overline,
    margin: 3,
    backgroundColor: theme.palette.info.dark,
    color: theme.palette.info.contrastDark,
    textDecoration: "none",
    padding: 1,
    [theme.breakpoints.down("md")]: {},
  }));

  return (
    <Site title="Unsubscribe">
      <StyledPage>
        <StyledBody style={{ textAlign: "left" }}>
          <div
            style={{
              ...theme.typography.h4,
              textAlign: "center",
              marginTop: 300,
            }}
          >
            {message}
          </div>
        </StyledBody>
      </StyledPage>
    </Site>
  );
};

export default Unsubscribe;
