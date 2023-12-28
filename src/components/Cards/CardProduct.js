import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import "./CardPro.css";
function Card({ img, title, narx, chegirma, kredit, id }) {
  return (
    <div className="Card_main">
      <div className="Card">
        <CiHeart className="heart" />
        <img src={img} alt="" />
        <Link to={`product/detail/${id}`}>
          <p>{title}</p>
        </Link>

        <p className="y">☆☆☆☆☆</p>
        <p className="sum">{kredit}</p>
        <p className="del">
          <del>{chegirma}</del>
        </p>
        <p className="narx">
          {" "}
          <strong> {narx}</strong>{" "}
        </p>
        <FiShoppingCart className="shop" />
      </div>
    </div>
  );
}
export default Card;
