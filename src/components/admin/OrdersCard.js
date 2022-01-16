import { useState, useContext, useEffect } from "react";

import "./OrdersCard.module.css";
import Modal from "../../UI/Modal";
import BackendContext from "../../communicationWithBackend/backend-context";
import Button from "../../UI/Button";

function OrdersCard(props) {
  const [orders, setOrders] = useState({});
  const backend = useContext(BackendContext);

  useEffect(() => {
    const load = async () => {
      const loadedOrders = await backend.getOrders();
      setOrders(loadedOrders);
    };
    load();
  }, [backend]);

  const listOrder = (id) => {
    return <li>{id}</li>;
  };

  return (
    <Modal>
      <ul>{Object.keys(orders).map((id) => listOrder(id))}</ul>
      <Button onClick={props.onClose}>Close</Button>
    </Modal>
  );
}

export default OrdersCard;
