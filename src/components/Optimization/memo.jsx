import { memo } from 'react'

// Child Is Rendring
function Child() {
  console.log('The Child is Rendring is Rendring')
}
export default memo(Child)
