const paramsToQuery = (
  params: Record<string, string | number | boolean>,
): string => {
  const queryStringParts: string[] = [];
  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      const value = params[key];
      if (value === true) {
        queryStringParts.push(key);
      } else if (value !== undefined && value !== null) {
        queryStringParts.push(
          `${encodeURIComponent(key)}=${encodeURIComponent(value.toString())}`,
        );
      }
    }
  }
  return queryStringParts.join('&');
};

export default paramsToQuery;
