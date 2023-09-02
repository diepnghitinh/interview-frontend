import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className="tw-flex tw-flex-col tw-place-items-center tw-m-auto">
      <span className="tw-cu-text-paragraph-14 tw-text-ink-80">
        copyright by ABC
      </span>
    </div>
  )
}

export default Footer
