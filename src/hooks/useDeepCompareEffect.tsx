import { EffectCallback, useEffect, useRef } from 'react'
import isEqual from 'react-fast-compare'

function useDeepCompareMemoize({ value }: { value: any }) {
  const ref = useRef()

  if (!isEqual(value, ref.current)) {
    ref.current = value
  }

  return ref.current
}

function useDeepCompareEffect(callback: EffectCallback, dependencies: any) {
  useEffect(callback, useDeepCompareMemoize({ value: dependencies }))
}

export default useDeepCompareEffect
