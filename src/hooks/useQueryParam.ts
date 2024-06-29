import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo, useState, useRef, useEffect } from 'react';

type toString = {
  toString(): string;
};

export type SetQueryParam<T extends toString> = (
  value: T | null,
  // Set it true on the last param update, and false when you need to update multiple params at once
  updateUrl?: boolean,
  // if prevParams is provided, it will use it instead of current url params
  // this is useful when you want to update multiple params at once
  prevParams?: URLSearchParams
) => URLSearchParams;

/**
 * Hook for replace useState with sync value with url.
 * It uses useState internally to make changes instantly,
 * but also syncs with url in case url is changed (back button clicked, or url changed manually)
 **/
export function useQueryParam<T extends toString>(key: string, validate: (value: string | null) => T) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const queryValueRaw = searchParams.get(key);
  // validate query value
  const queryValue = useMemo(() => validate(queryValueRaw), [queryValueRaw, validate]);

  const [value, setValue] = useState<T>(queryValue);

  const searchParamsRef = useRef(searchParams);

  const setQueryParam: SetQueryParam<T> = useCallback(
    (newValue, updateUrl = true, prevParams?) => {
      const params = prevParams || new URLSearchParams(searchParamsRef.current.toString());
      if (newValue === null) {
        params.delete(key);
      } else {
        const newValueStr = newValue.toString();
        if (newValueStr !== searchParamsRef.current.get(key)) {
          setValue(newValue);
          params.set(key, newValueStr);
        }
      }
      if (updateUrl) {
        router.push(pathname + '?' + params.toString(), { scroll: false });
      }
      return params;
    },
    [key, pathname, router]
  );

  useEffect(() => {
    searchParamsRef.current = searchParams;
  }, [searchParams]);

  // sync value with url, in case url is changed (back button for example)
  useEffect(() => {
    setValue((prevValue) => (queryValueRaw !== prevValue ? queryValue : prevValue));
  }, [queryValue, queryValueRaw]);

  return [value, setQueryParam] as const;
}
