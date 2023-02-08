import React from "react";
import axios from "axios";
import { useTheme, styled } from "@mui/material/styles";
import { List, Button, Card, FormLabel, Input } from "@mui/material";

const postMessage = (e) => {
  const url = process.env.REACT_APP_STRAPI_API + "/emails";
  axios
    .post(url, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("strapi_jwt")}`,
      },
      data: {
        email: "richard.lanham@gmail.com",
      },
    })
    .then((response) => {
      console.log("Email Response: ", response);
    })
    .catch((error) => {
      console.log("An error occurred:", error.response);
    });
};

const PledgeForm = () => {
  const theme = useTheme();
  return (
    <Card
      style={{
        ...theme.typography.caption,
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
        margin: "auto",
        maxWidth: 500,
      }}
    >
      <div
        id="555028566406362192-form-parent"
        className="wsite-form-container"
        style={{ marginTop: 0 }}
      >
        <ul className="formlist" id="555028566406362192-form-list">
          <h3 className="paragraph" style={{ textAlign: "left" }}>
            ​I want to deepen my relationship with God in Christ through the
            ministry of Grace Church. &nbsp;I commit to give:
          </h3>

          <label
            style={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            }}
          >
            <span className="form-required">*</span> Indicates required field
          </label>
          <div>
            <div style={{ margin: "5px 0px 5px 0px" }}>
              <label
                style={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                }}
                htmlFor="input-644004949887560959"
              >
                Pledge Amount for 2022: <span className="form-required">*</span>
              </label>
              <div>
                <input
                  aria-required="true"
                  id="input-644004949887560959"
                  type="text"
                  name="_u644004949887560959"
                />
              </div>
              <div
                id="instructions-644004949887560959"
                style={{ display: "none" }}
              ></div>
            </div>
          </div>

          <div>
            <div style={{ margin: "5px 0 0 0" }}>
              <label
                style={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                }}
                htmlFor="input-995371033128227175"
              >
                My contribution will be made:
                <span className="form-required">*</span>
              </label>
              <div aria-required="true">
                <span>
                  <input
                    type="radio"
                    id="radio-0-_u995371033128227175"
                    name="_u995371033128227175"
                    value="Lump Sum"
                  />
                  <label
                    style={{
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                    }}
                    htmlFor="radio-0-_u995371033128227175"
                  >
                    Lump Sum
                  </label>
                </span>
                <span>
                  <input
                    type="radio"
                    id="radio-1-_u995371033128227175"
                    name="_u995371033128227175"
                    value="Quarterly"
                  />
                  <label
                    style={{
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                    }}
                    htmlFor="radio-1-_u995371033128227175"
                  >
                    Quarterly
                  </label>
                </span>
                <span>
                  <input
                    type="radio"
                    id="radio-2-_u995371033128227175"
                    name="_u995371033128227175"
                    value="Monthly"
                  />
                  <label
                    style={{
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                    }}
                    htmlFor="radio-2-_u995371033128227175"
                  >
                    Monthly
                  </label>
                </span>
                <span>
                  <input
                    type="radio"
                    id="radio-3-_u995371033128227175"
                    name="_u995371033128227175"
                    value="Weekly"
                  />
                  <label
                    style={{
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                    }}
                    htmlFor="radio-3-_u995371033128227175"
                  >
                    Weekly
                  </label>
                </span>
                <span>
                  <input
                    type="radio"
                    id="radio-4-_u995371033128227175"
                    name="_u995371033128227175"
                    value="Other"
                  />
                  <label
                    style={{
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                    }}
                    htmlFor="radio-4-_u995371033128227175"
                  >
                    Other
                  </label>
                </span>
              </div>
              <div
                id="instructions-My contribution will be made:"
                style={{ display: "none" }}
              ></div>
            </div>
          </div>

          <div>
            <div>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td style={{ width: "25%" }}>
                        <div>
                          <div style={{ margin: "5px 0px 5px 0px" }}>
                            <label
                              style={{
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText,
                              }}
                              htmlFor="input-534511096958335480"
                            >
                              First Name
                              <span className="form-required">*</span>
                            </label>
                            <div>
                              <input
                                aria-required="true"
                                id="input-534511096958335480"
                                type="text"
                                name="_u534511096958335480"
                              />
                            </div>
                            <div
                              id="instructions-534511096958335480"
                              style={{ display: "none" }}
                            ></div>
                          </div>
                        </div>

                        <div>
                          <div style={{ margin: "5px 0px 5px 0px" }}>
                            <label
                              style={{
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText,
                              }}
                              htmlFor="input-953792872225144616"
                            >
                              Last Name
                              <span className="form-not-required">*</span>
                            </label>
                            <div>
                              <input
                                id="input-953792872225144616"
                                type="text"
                                name="_u953792872225144616"
                              />
                            </div>
                            <div
                              id="instructions-953792872225144616"
                              style={{ display: "none" }}
                            ></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div>
            <div style={{ margin: "5px 0px 5px 0px" }}>
              <label
                style={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                }}
                htmlFor="input-843676393306237588"
              >
                Street Address <span className="form-not-required">*</span>
              </label>
              <div>
                <input
                  id="input-843676393306237588"
                  type="text"
                  name="_u843676393306237588"
                />
              </div>
              <div
                id="instructions-843676393306237588"
                style={{ display: "none" }}
              ></div>
            </div>
          </div>

          <div>
            <div style={{ margin: "5px 0px 5px 0px" }}>
              <label
                style={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                }}
                htmlFor="input-192216059976526042"
              >
                Zip Code <span className="form-not-required">*</span>
              </label>
              <div>
                <input
                  id="input-192216059976526042"
                  type="text"
                  name="_u192216059976526042"
                />
              </div>
              <div
                id="instructions-192216059976526042"
                style={{ display: "none" }}
              ></div>
            </div>
          </div>

          <div>
            <div style={{ margin: "5px 0px 5px 0px" }}>
              <label
                style={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                }}
                htmlFor="input-881736960760973023"
              >
                Phone Number <span className="form-required">*</span>
              </label>
              <div>
                <input
                  aria-required="true"
                  id="input-881736960760973023"
                  type="text"
                  name="_u881736960760973023"
                />
              </div>
              <div
                id="instructions-881736960760973023"
                style={{ display: "none" }}
              ></div>
            </div>
          </div>

          <div>
            <div style={{ margin: "5px 0px 5px 0px" }}>
              <label
                style={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                }}
                htmlFor="input-433440178417526089"
              >
                Email Address <span className="form-required">*</span>
              </label>
              <div>
                <input
                  aria-required="true"
                  id="input-433440178417526089"
                  type="text"
                  name="_u433440178417526089"
                />
              </div>
              <div
                id="instructions-433440178417526089"
                style={{ display: "none" }}
              ></div>
            </div>
          </div>

          <div>
            <div style={{ margin: "5px 0px 5px 0px" }}>
              <label
                style={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                }}
                htmlFor="input-800373892837395193"
              >
                Date <span className="form-required">*</span>
              </label>
              <div>
                <input
                  aria-required="true"
                  id="input-800373892837395193"
                  type="text"
                  name="_u800373892837395193"
                />
              </div>
              <div
                id="instructions-800373892837395193"
                style={{ display: "none" }}
              ></div>
            </div>
          </div>

          <div>
            <div style={{ margin: "5px 0px 5px 0px" }}>
              <label
                style={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                }}
                htmlFor="input-948798684563725069"
              >
                Signature <span className="form-required">*</span>
                <span className="wsite-instructions-help"></span>
              </label>
              <div>
                <input
                  aria-required="true"
                  id="input-948798684563725069"
                  type="text"
                  name="_u948798684563725069"
                />
              </div>
              <div
                id="instructions-948798684563725069"
                style={{ display: "none" }}
              >
                * You may sign this form by submitting your initials or by
                writing your full name.
              </div>
            </div>
          </div>

          <div className="paragraph">
            ​* You may sign this form by submitting your initials or by writing
            your full name.
          </div>
        </ul>
      </div>
      <Button variant="primary" onClick={postMessage}>
        Submit
      </Button>
    </Card>
  );
};

export default PledgeForm;
