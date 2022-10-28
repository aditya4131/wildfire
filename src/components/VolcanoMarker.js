import { Icon } from "@iconify/react";
import volcano from "@iconify/icons-mdi/volcano";

const VolcanoMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="volcano-marker" onClick={onClick}>
      <Icon icon={volcano} className="volcano-icon"></Icon>
    </div>
  );
};

export default VolcanoMarker;
