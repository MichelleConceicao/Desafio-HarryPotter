import React from "react";
import * as S from "./HomeStyle.js";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <S.Box>
      <nav>
        <S.Ul>
          <Link
            style={{ textDecoration: "none", color: "#b0c4de" }}
            to="/Casas"
          >
            <li>Casas</li>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#b0c4de" }}
            to="/Historia"
          >
            <li>Historia</li>
          </Link>
        </S.Ul>
      </nav>
    </S.Box>
  );
}
