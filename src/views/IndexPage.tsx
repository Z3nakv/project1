import { useAppStore } from "../stores/useAppStore"


export const IndexPage = () => {

  useAppStore((state) => state.categories)
  return (
    <div>indexPage</div>
  )
}

export default IndexPage