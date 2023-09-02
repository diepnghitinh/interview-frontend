import Head from '@/layouts/head/Head'
import Content from '@/layouts/content/Content'
import React from 'react'
import { ETSVG } from '@/components/Svg/ETSVG'
import NoResult from '@/assets/icons/errors/no-result.svg'

const NoResultClassic = () => {
  return (
    <React.Fragment>
      <Head title="Không có kết quả"></Head>
      <Content>
        <div className="tw-h-screen tw-flex cu-padding-header">
          <div className="tw-m-auto tw-flex tw-flex-col tw-text-center">
            <ETSVG
              path={NoResult}
              style={{ width: '371px', height: '297.08px' }}
            />
            <span className="tw-cu-text-display-38 tw-mt-[34px] tw-text-primary-light">
              Không có kết quả
            </span>
            <span className="tw-cu-text-label-16-semi tw-text-ink-80">
              Rất tiếc, kết quả bạn tìm kiếm không có thông tin phù hợp
            </span>
          </div>
        </div>
      </Content>
    </React.Fragment>
  )
}

export default NoResultClassic
