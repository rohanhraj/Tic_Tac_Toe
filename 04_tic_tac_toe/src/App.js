import React, { useState } from "react";
import Icon from "./components/Icon";

import { Card, CardBody, Container, Col, Row, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const itemsArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setIsWinner] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setIsWinner("");
    itemsArray.fill("empty");
  };

  const checkIsWinner = () => {
    if (
      itemsArray[0] !== "empty" &&
      itemsArray[0] === itemsArray[1] &&
      itemsArray[1] === itemsArray[2]
    ) {
      setIsWinner(`${itemsArray[0]} wins`);
    }
    if (
      itemsArray[3] !== "empty" &&
      itemsArray[3] === itemsArray[4] &&
      itemsArray[4] === itemsArray[5]
    ) {
      setIsWinner(`${itemsArray[3]} wins`);
    }
    if (
      itemsArray[6] !== "empty" &&
      itemsArray[6] === itemsArray[7] &&
      itemsArray[7] === itemsArray[8]
    ) {
      setIsWinner(`${itemsArray[6]} wins`);
    }
    if (
      itemsArray[0] !== "empty" &&
      itemsArray[0] === itemsArray[3] &&
      itemsArray[3] === itemsArray[6]
    ) {
      setIsWinner(`${itemsArray[0]} wins`);
    }
    if (
      itemsArray[1] !== "empty" &&
      itemsArray[1] === itemsArray[4] &&
      itemsArray[4] === itemsArray[7]
    ) {
      setIsWinner(`${itemsArray[1]} wins`);
    }
    if (
      itemsArray[2] !== "empty" &&
      itemsArray[2] === itemsArray[5] &&
      itemsArray[5] === itemsArray[8]
    ) {
      setIsWinner(`${itemsArray[2]} wins`);
    }
    if (
      itemsArray[0] !== "empty" &&
      itemsArray[0] === itemsArray[4] &&
      itemsArray[4] === itemsArray[8]
    ) {
      setIsWinner(`${itemsArray[0]} wins`);
    }
    if (
      itemsArray[2] !== "empty" &&
      itemsArray[2] === itemsArray[4] &&
      itemsArray[4] === itemsArray[6]
    ) {
      setIsWinner(`${itemsArray[2]} wins`);
    }
  };

  const changeItems = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }
    if (itemsArray[itemNumber] === "empty") {
      itemsArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("already filled", { type: "error" });
    }

    checkIsWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-sucess text-uppercase text-center">
                {winMessage}
              </h1>
              <Button color="success" block onClick={reloadGame}>
                Reload the Game
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isCross ? "cross" : "circle"} turns
            </h1>
          )}
          <div className="grid">
            {itemsArray.map((item, index) => (
              <Card color="warning" onClick={() => changeItems(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
