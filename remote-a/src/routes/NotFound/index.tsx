import React from "react";
import { Link } from "react-router-dom";
import { pathRouting } from "../navigation";

function NotFound() {
  return (
    <div>
      <h1>404 - Pagina non trovata</h1>
      <p>Ops! La pagina che cerchi non esiste.</p>
      <Link to={pathRouting.home}>Torna alla home</Link>
    </div>
  );
}

export default React.memo(NotFound);
