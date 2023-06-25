// I am no typescript magician, this is from:
// https://stackoverflow.com/questions/60141960/typescript-key-value-relation-preserving-object-entries-type

// This allows me to have typed returns from Object.entries
type Entries<T> = {
  [K in keyof T]-?: [K, T[K]];
}[keyof T][];

const getTypedEntries = <T extends object>(obj: T) => Object.entries(obj) as Entries<T>;
// --------------------------- ------------------------

export default getTypedEntries;
