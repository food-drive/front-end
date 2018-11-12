import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setSelectedRoute } from '../components/navigation/NavigationActions'

class Page extends React.Component {
  componentDidMount () {
    const {setSelectedRoute, location: {pathname}} = this.props
    setSelectedRoute(pathname)
  }
  render () {
    const {children} = this.props
    return (
      <Fragment>
        {
          children
        }
      </Fragment>
    )
  }
}

const mapStateToProps = ({user}) => ({user})

const mapDispatchToProps = () => ({
  setSelectedRoute: pathname => setSelectedRoute(pathname)
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Page))
