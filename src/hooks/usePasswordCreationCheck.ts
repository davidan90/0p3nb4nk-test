import { useEffect, useState } from "react";
import { submitForm as passwordManagerService } from "services/api";

export function usePasswordCreationCheck(password: string) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setLoading(true);
    passwordManagerService(password)
      .then((r) => {
        setData(r);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [password]);

  return {
    loading,
    data,
    error,
  };
}
