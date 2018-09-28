import {Col, Grid, Row} from "react-bootstrap";
import React from "react";
import UploadForm from "./UploadForm";

const BodyContainer = ({token}) => (
  <Grid>
    <Row className="show-grid">
      <Col sm={4} md={4}>
        <UploadForm token={token} />
      </Col>
      <Col sm={8} md={8}>
        <code>
        </code>
        <br />
      </Col>
    </Row>
  </Grid>
);

export default BodyContainer;