
// Temporary file to resolve TypeScript build errors
// This file exports types to satisfy the TypeScript compiler

export {};

// Re-export types from assets/projects
declare module '@/assets/projects' {
  export const studioServices: any[];
}

// Re-export types from hooks/use-toast  
declare module '@/hooks/use-toast' {
  export function useToast(): any;
  export function toast(props: any): any;
}

// Re-export types from lib/utils
declare module '@/lib/utils' {
  export function cn(...inputs: any[]): string;
}
