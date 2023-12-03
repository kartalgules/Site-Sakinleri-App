import { NavLink } from "react-router-dom";

function BadRequest() {
  return (
    <div>
      <h2>404 Sayfa Bulunamadı</h2>
      <NavLink to={'/'}>Anasayfa&apos;ya dön</NavLink>
    </div>
  );
}

export default BadRequest;
