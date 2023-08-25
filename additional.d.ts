declare global {
    namespace NodeJS {
      interface ProcessEnv {
        EMAIL_SERVICE_HOST: string;
        EMAIL_SERVICE_PASS: string;
      }
    }
  }
  
  export {};