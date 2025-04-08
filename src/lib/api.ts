// lib/api.ts
export const submitForm = async (data: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("API submitted:", data);
        resolve(data);
      }, 2000);
    });
  };
  