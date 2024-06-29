export type ExtendedError = Error & {
  source?: {
    errors: Array<GraphQlErrorDetails>;
  };
};

export type GraphQlErrorDetails = {
  message: string;
  locations?: Array<{
    line: number;
    column: number;
  }>;
  path?: string[];
  extensions?: {
    code: string;
    stacktrace?: string[];
    status?: number;
    originalError?: {
      statusCode: number;
      message: string;
      error: string;
    };
  };
};
