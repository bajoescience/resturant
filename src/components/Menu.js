import { useState } from "react";

const Menu = ({menu}) => {

  // Bool to choose to show all menu details or short form
  const [showFull, setShowFull] = useState(false)

  const handleMenuclick = (e) => {
    setShowFull(!showFull)
  }

  // Set the more part display to zero
  const style = {display: showFull ? '' : 'none'}

  return (
    <>
      <div>
        {/** Display the menu of the appropiate route */}
        <p>name: {menu.name}</p>
        <p>price: {menu.price}</p>
        <p onClick={handleMenuclick}>show more...</p>
        <div style={style}>
          This is the more part of {menu.name}
        </div>
      </div>
      <br></br>
    </>
  )
}

export default Menu