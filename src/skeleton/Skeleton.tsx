

export const Skeleton = ({ design } : { design: string }) => {
  return (
    <span className={`animate-pulse ${design}`}></span>
  )
}

export default Skeleton