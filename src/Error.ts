import { ErrorCode } from "./ErrorCode";

export interface Error extends Error.Response {
  violations: Error.Violation[];
}

export namespace Error {
  export interface Response<TErrorCode extends ErrorCode = ErrorCode> {
    errorCode: TErrorCode;
    message: string;
  }

  export interface Violation {
    message: string;
    property: string;
    meta?: ViolationMeta;
  }

  export interface ViolationMeta {
    template: string;
    params: {
      [key: string]: string;
    };
  }

  export function isError(
    errorCode: ErrorCode,
    error: Response | undefined
  ): error is Error {
    return !!error && error.errorCode === errorCode;
  }
}
