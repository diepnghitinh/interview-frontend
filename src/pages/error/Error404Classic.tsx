import Head from '@/layouts/head/Head'
import Content from '@/layouts/content/Content'
import React from 'react'

const Error404Classic = () => {
  return (
    <React.Fragment>
      <Head title="Error 404"></Head>
      <Content>
        <div className="tw-flex tw-justify-center">
          <div className="tw-flex tw-flex-col tw-text-center">
            <span className="tw-cu-text-display-38 tw-mt-[45px] tw-text-primary-light">Không tìm thấy trang</span>
            <span className="tw-cu-text-label-16-semi tw-text-ink-80">
              Rất tiếc, trang bạn tìm hiện không tồn tại
            </span>
          </div>
        </div>
      </Content>
    </React.Fragment>
  )
}

export default Error404Classic
