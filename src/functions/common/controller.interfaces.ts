export interface ControllerBase<T>{
  doPost: (filters: any) => Promise<T[]>
  doGet: () => Promise<T[]>
  doPut: (object: T) => Promise<T>
  doPatch: (object: T) => Promise<T>
  doDelete: (object: T) => Promise<{success: boolean, messages: string[]}>
}