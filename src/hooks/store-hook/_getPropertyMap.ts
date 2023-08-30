/* eslint-disable no-return-assign */
import { TObject } from "./types";

export type PropertyMap<T> = {
  [P in keyof T]: P;
};

export function getPropertyMap<T extends TObject>(object: T): PropertyMap<T> {
  const result = {} as PropertyMap<T>;
  const keys: Array<keyof T> = Object.keys(object);

  keys.forEach((key) => result[key] = key);

  return result;
}

export default getPropertyMap;
