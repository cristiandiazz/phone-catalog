import { useState } from "react"
import useFetch from "./useFetch"

const userServices = (path) => {
  const { loading, error } = useFetch(getPets, path, setPets)
  return { pets, setPets, loading, error }
}

export default usePets
