import React from 'react'

// Image
import MenuCollapse from '@/assets/icons/menu/menu-collapse.svg'
import MenuExpand from '@/assets/icons/menu/menu-expand.svg'

const Toggle: React.FC<any> = ({
  icon,
  className,
  collapseSidebar,
  click,
  ...props
}) => {
  return (
    <a
      href="#toggle"
      className={className ? className : ''}
      onClick={(ev) => {
        ev.preventDefault()
        click(ev)
      }}
    >
      {props.children ? (
        props.children
      ) : (
        // <ETSVG
        //   path={collapseSidebar ? MenuCollapse : MenuExpand}
        //   svgClassName="!tw-fill-white"
        // />
          <>Toggle</>
      )}
    </a>
  )
}
export default Toggle
