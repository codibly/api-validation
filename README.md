# @codibly/api-validation

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

[![npm version](https://img.shields.io/npm/v/@codibly/api-validation.svg)](https://www.npmjs.com/package/@codibly/api-validation)
[![npm license](https://img.shields.io/npm/l/@codibly/api-validation.svg)](https://www.npmjs.com/package/@codibly/api-validation)
[![npm downloads](https://img.shields.io/npm/dt/@codibly/api-validation.svg)](https://www.npmjs.com/package/@codibly/api-validation)
[![npm types](https://img.shields.io/npm/types/@codibly/api-validation.svg)](https://www.npmjs.com/package/@codibly/api-validation)

## Installation

This package is available as an [npm package](https://www.npmjs.com/package/@codibly/api-validation).

```
npm install --save @codibly/api-validation
```

or

```
yarn add @codibly/api-validation
```

## Usage

The main gola of this library is to help is easy way handle api validation.
####Error Code

- VALIDATION_ERROR - validation form error code
  ####Check error code
  To check if error has valid error code we use function `isError`

```
function isError(ErrorCode, Response | undefined): error is Error {}
```

####Get form errors
To get validation form errors we have to functions which reducer array of errors to simple object where key is a filed name and value is a string or object.

```
- ValidationErrorMapper.toFormError(error: Error): FormError
- ValidationErrorMapper.toFormErrorsWithSheetCells(error: Error, sheetField: string[]): FormError
```

## License

MIT
