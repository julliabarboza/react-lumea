import banner_1 from "../assets/banner.png";
import banner_2 from "../assets/banner2.png";
import banner_3 from "../assets/banner3.png";

export default function Carrossel() {
  return (
    <div>
      id="carouselExampleAutoplaying" className="carousel slide carousel_personalizado" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={banner_1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={banner_2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={banner_3} className="d-block w-100" alt="..." />
        </div>
    </div>
  )
}
