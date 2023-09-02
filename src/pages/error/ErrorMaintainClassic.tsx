import Head from '@/layouts/head/Head'
import Content from '@/layouts/content/Content'
import React from 'react'
import ErrorMaintain from '@/assets/icons/errors/error-maintain.svg'

const ErrorMaintainClassic = () => {
  return (
    <React.Fragment>
      <Head title="Coming soon - Under construction"></Head>
      <Content>
        <div className="tw-h-screen tw-flex cu-padding-header">
          <div className="tw-m-auto tw-flex tw-flex-col tw-text-center">
            <span className="tw-cu-text-display-38 tw-mt-[34px] tw-text-primary-light">Sắp có!</span>
            <span className="tw-cu-text-label-16-semi tw-text-ink-80">
              Chúng tôi đang nỗ lực để tính năng <br /> được ra mắt sớm nhất
            </span>
          </div>
        </div>
      </Content>
    </React.Fragment>
  )
}

export default ErrorMaintainClassic
