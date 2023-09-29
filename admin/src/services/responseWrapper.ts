type ResponseWrapper<T> = {
  errorCode: number;
  message: string;
  data: T;
};
export default ResponseWrapper;
