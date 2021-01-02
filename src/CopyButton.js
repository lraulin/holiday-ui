import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

const CopyButton = ({ text }) => {
  const updateClipboard = async (newClip) => {
    try {
      navigator.clipboard.writeText(newClip);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Button
        variant="outline-secondary"
        size="sm"
        onClick={() => updateClipboard(text)}
      >
        <FontAwesomeIcon icon={faClipboard} />
      </Button>
    </>
  );
};

export default CopyButton;

(() => {})();
