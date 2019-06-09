import React from 'react';
import { node, shape, object } from 'prop-types';
import { withRouter } from 'react-router-dom'
// import { setSelectedRoute } from '../components/navigation/NavigationActions'

// class Page extends React.Component {
//   componentDidMount () {
//     const {setSelectedRoute, location: {pathname}} = this.props
//     setSelectedRoute(pathname)
//   }
//   render () {
//     const {children} = this.props
//     return (
//       <Fragment>
//         {
//           children
//         }
//       </Fragment>
//     )
//   }
// }

// export default Page

const Page = (props) => {
  console.log(props);
  return (
    <div>Page</div>
  );
  // return (
  //   <>
  //     {
  //       children
  //     }
  //   </>
  // );
}

Page.propTypes = {
  children: node.isRequired,
  location: shape({
    pathName: object.isRequired,
  }).isRequired,
};

export default withRouter(Page);
