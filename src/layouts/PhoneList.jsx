import React, { useEffect, useState } from "react";
import PhoneCard from "../components/PhoneCard";
import Spinner from "react-spinkit";
import { useAxios } from "use-axios-client";

const PhoneList = () => {
  const { data, error, loading } = useAxios({
    url: "http://localhost:3001/phones",
  });

  return (
    <>
      {loading && <Spinner className="spinner" name="ball-scale-ripple-multiple" />}
      {error && <div>{error.message}</div>}
      {data &&
        data.phones.map((phone) => <PhoneCard phone={phone} key={phone.id} />)}
    </>
  );
};

export default PhoneList;
