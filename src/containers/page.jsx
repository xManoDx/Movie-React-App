import withNavbarLayout from '../containers/withNavbarLayout'
import withRouter from '../containers/withRouter'

export const pageWithLayout = Wrapped => withNavbarLayout(Wrapped)
export const pageWithoutLayout = Wrapped => withRouter(Wrapped)

export default pageWithLayout
