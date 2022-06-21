import { GoBackProps } from ".";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export default function GoBack({ path, title }: GoBackProps) {
  return (
    <div className="goback">
      <Link to={path}>
        <BsFillArrowLeftCircleFill size="24px" />
        <span>&nbsp; Back to {title}</span>
      </Link>
    </div>
  );
}
