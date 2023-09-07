import { useState } from "react";

import { toast } from "react-toastify";

const useMutation = (mutationFunction, { onSuccess, onError, onCancel }) => {
  const [loading, setLoading] = useState(false);
  const [requestController, setRequestController] = useState(new AbortController())

  const mutate = async (...params) => {
    setLoading(true);
    try {
      const data = await mutationFunction(...params, requestController.signal);
      onSuccess(data);

    } catch (error) {
      if (requestController.signal.aborted) {
        onCancel();
        setRequestController(new AbortController()) // refresh the signal for resending the request
      } else {
        onError ? onError(error) : toast.error(error); // custom error handler or global handler
      }

    } finally {
      setLoading(false);
    }
  };

  const handleCancelRequest = () => {
    requestController.abort();
  };

  return [mutate, loading, handleCancelRequest];
};

export default useMutation;
