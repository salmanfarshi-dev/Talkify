import { useParams } from "react-router-dom";
import Messageing from "./Messageing";

function MobileMessage() {
  const { id } = useParams();

  return <Messageing selectedChat={id} />;
}

export default MobileMessage;