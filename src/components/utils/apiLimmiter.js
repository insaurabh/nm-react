import { useState } from "react";

import { useState } from "react";

function useApiRateLimiter() {
  const [isRateLimited, setIsRateLimited] = useState(false);

  const executeApiCall = async (apiFunction, ...args) => {
    if (isRateLimited) {
      console.log(
        "Rate limit exceeded. Please wait before making another API call."
      );
      return;
    }

    setIsRateLimited(true);

    try {
      const result = await apiFunction(...args);
      return result;
    } catch (error) {
      console.error("Error in API call:", error);
      return null;
    } finally {
      setTimeout(() => {
        setIsRateLimited(false);
      }, 3000); // Wait for 3 seconds before allowing the next API call
    }
  };

  return executeApiCall;
}
export default useApiRateLimiter;

// Example usage:
// Suppose you have an API function like this:
// async function fetchData() {
//   // API fetching logic here
// }

// Wrap your API function using the rate limiter:
// const executeLimitedApiCall = useApiRateLimiter();

// Use executeLimitedApiCall to make the API call:
// executeLimitedApiCall(fetchData);
