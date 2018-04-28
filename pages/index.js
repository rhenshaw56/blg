import stylesheet from 'styles/index.scss'
import withData from '../lib/apollo';


const index = ({data}) => (
    <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <p>Welcome to next</p>
    </div>);

export default withData(index);