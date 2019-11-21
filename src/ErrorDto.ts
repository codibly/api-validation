import { ErrorCode } from "./ErrorCode";

export interface ErrorDto extends ErrorDto.Response {
  violations: ErrorDto.Violation[];
}

export namespace ErrorDto {
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
  ): error is ErrorDto {
    return !!error && error.errorCode === errorCode;
  }
}
