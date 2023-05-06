export interface ValidationErrorsResponse<T> {
  response: T;
}
export interface ValidationError {
  field: string;
  errors: ErrorItem[];
}
interface ErrorItem {
  text: string;
}


