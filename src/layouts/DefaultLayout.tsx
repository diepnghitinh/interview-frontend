import React from 'react'
import { Outlet } from 'react-router-dom'
import clsx from 'clsx'
import { useState } from 'react'
import ErrorBoundaryComponent from '@/components/error-boundary-component/ErrorBoundaryComponent'

// Components
import Sidebar from './sidebar/Sidebar'
import Header from './header/Header'

interface Props {
  route?: React.ReactNode
}

const DefaultLayout: React.FC<Props> = ({ route }) => {
  //const user = React.useContext(UserSessionContext)

  //const qc = useQueryClient()
  //const navigate = useNavigate()
  //const setMenuLv = (data: any) => saveSessionData({ curLevel: data }, qc)
  //const _menuProps = { navigate, setMenuLv }

  // NEW SIDE MENU REFACTOR
  const [mobileView, setMobileView] = useState(window.innerWidth < 1280)
  const [visibility, setVisibility] = useState(false)

  const toggleSidebar = (e: any) => {
    e.preventDefault()
    if (visibility === false) {
      setVisibility(true)
    } else {
      setVisibility(false)
    }
  }

  const [themeState] = useState({
    main: 'default',
    sidebar: 'white',
    header: 'white',
    skin: 'light',
  })

  const sidebarClass = clsx({
    'cu-sidebar-mobile': mobileView,
    'cu-sidebar-active': visibility,
  })

  // function to change the design view under 1200 px
  const viewChange = () => {
    if (window.innerWidth < 1280) {
      setMobileView(true)
    } else {
      setMobileView(false)
    }
  }
  window.addEventListener('load', viewChange)
  window.addEventListener('resize', viewChange)

  return (
    <React.Fragment>
      <div className={clsx('cu-app-root')}>
        <div className="cu-main">
          <Sidebar
            sidebarToggle={toggleSidebar}
            fixed
            theme={themeState.sidebar}
            className={sidebarClass}
          />
          {visibility && (
            <div className="cu-sidebar-overlay" onClick={toggleSidebar} />
          )}
          <div className="cu-wrap">
            <Header
              sidebarToggle={toggleSidebar}
              fixed
              theme={themeState.header}
            />
            <ErrorBoundaryComponent>
              <Outlet />
              {route}
            </ErrorBoundaryComponent>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default DefaultLayout
