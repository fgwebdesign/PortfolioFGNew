import { useTransform } from 'framer-motion'

export function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance])
} 