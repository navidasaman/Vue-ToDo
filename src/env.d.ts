// env.d.ts
interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  // add more environment variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
