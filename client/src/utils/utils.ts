import { formatDistanceToNow } from "date-fns";
import jwt_decode, { JwtPayload } from "jwt-decode";

export const handlePrecision = (val: any, len: number) => {
  const testVal = String(val);
  if (testVal.length >= len) {
    return `${testVal.slice(0, len)}...`;
  }
  return testVal;
};

export const decodeToken = (token: string) => {
  const decodedToken = jwt_decode<JwtPayload>(token);
  const exp = decodedToken.exp;
  const expirationTime = Number(exp) * 1000;
  const currentTime = Date.now();
  const relativeTime = formatDistanceToNow(expirationTime, { addSuffix: true });
  return { expirationTime, currentTime, relativeTime, decodedToken };
};

export const debounce = (fn: any, delay: number) => {
  let timer: any;

  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
