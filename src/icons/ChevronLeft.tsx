import { Icon } from "../types.d"

export const ChevronLeft = ({ size }: Icon) => {
  return (
    <svg width={size}  height={size}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M15 6l-6 6l6 6" />
    </svg>
  )
}