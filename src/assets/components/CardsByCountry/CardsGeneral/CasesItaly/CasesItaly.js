import React, { useEffect } from "react";
import useFetch from "src/hooks/useFetch";
import { GET_ITALY_TOTAL } from "src/services/api";
import formatNumbers from "../../../../../utils/format_numbers";
import "./css/styles.css";

const FetchCasesItaly = () => {
  const { request, data } = useFetch();

  useEffect(() => {
    const { url } = GET_ITALY_TOTAL();
    request(url);
  }, [request]);

  return (
    <div id="card_italy" style={{ marginRight: "30px" }}>
      <h1>Situação na Itália</h1>
      <p className="mt-4">
        Casos:
        <strong> {formatNumbers(data?.data?.cases)} </strong>
      </p>
      <p className="mt-2">
        Casos confirmados:
        <span style={{ color: "#FFAA00" }}>
          {" "}
          {formatNumbers(data?.data?.confirmed)}
        </span>
      </p>
      <p className="mt-2">
        Casos recuperados:
        <span style={{ color: "#00FF66" }}>
          {" "}
          {formatNumbers(data?.data?.recovered)}
        </span>
      </p>
      <p className="mt-2">
        Óbitos confirmados:
        <span style={{ color: "#FF0000" }}>
          {" "}
          {formatNumbers(data?.data?.deaths)}
        </span>
      </p>
    </div>
  );
};

export default FetchCasesItaly;
