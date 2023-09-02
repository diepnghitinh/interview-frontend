import React from 'react'
import clsx from 'clsx'

interface Props {
  page?: React.ReactNode
  children?: React.ReactNode
  floating?: React.ReactNode
  className?: string
}

const ContentAlt: React.FC<Props> = ({ className, ...props }) => {
  return (
    <div className="cu-content">
      <div className="container-fluid">
        <div className="cu-content-inner">
          <div
            className={clsx('cu-content-body tw-flex tw-flex-row', {
              [`${className}`]: className,
            })}
          >
            {!props.page ? props.children : null}
            {props.page === 'component' ? (
              <div className="components-preview wide-md mx-auto">
                {props.children}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContentAlt
