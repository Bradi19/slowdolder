/* eslint-disable react/no-array-index-key,react/forbid-prop-types,react/require-default-props */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { FaClose } from 'react-icons/lib/fa';
import LoaderDelay from '../../components/LoaderDelay/index';
import companyEventsActions from '../../actions/companyEventsActions';
import HeaderSection from '../../components/HeaderSection/index';
import BlogCard from '../../components/blogCard/index';
import '../../../scss/companyBlogPage.scss';
import { HELMET_ROUTE_MAP } from '../../constants';
import events from './events';
import backgroundImage from '../../../images/background/Blog.jpg';

const closeStyle = {
  position: 'absolute',
  top: -16,
  right: -16,
  color: 'white',
  cursor: 'pointer',
};

class CompanyContainer extends PureComponent {
  static propTypes = {
    getBlog: PropTypes.func.isRequired,
    i18n: PropTypes.shape({
      locale: PropTypes.string,
    }).isRequired,
    res: PropTypes.shape({
      width: PropTypes.number,
    }).isRequired,
    fetching: PropTypes.bool.isRequired,
    // blogList: PropTypes.array,
  };
  constructor(props) {
    super(props);
    this.state = {
      youtubeHash: '',
      youTubeLoad: false,
    };
  }

  componentWillMount() {
    this.props.getBlog();
  }
  componentDidMount() {
    document.body.scrollTop = 0;
  }
  componentWillReceiveProps(next) {
    if (next.i18n !== this.props.i18n) {
      this.props.getBlog();
    }
  }
  prepareItems = blogList => blogList.map((item, index) => (
    <div
      className={this.props.res.width >= 2000 ? 'blog-cel-cont super-large' : 'blog-cel-cont'}
      key={index}
    >
      <BlogCard
        item={item}
        onTurnOnVideo={youtubeHash => this.setState({ youtubeHash })}
      />
    </div>
  ));

  render() {
    const {
      fetching, res: { width }, i18n: { locale },
    } = this.props;
    const blogs = this.prepareItems(events);
    return (
      <div className="blog-main-page">
        <Helmet>
          <title>{HELMET_ROUTE_MAP[locale].companyEvents}</title>
        </Helmet>
        <HeaderSection
          backgroundImage={backgroundImage}
          title="blog.title"
        />
        {
          fetching ?
            <LoaderDelay /> :
            <div className={width <= 767 ? 'blog-main-cont-translate mobile' : 'blog-main-cont-translate'}>
              <div className="blog-main-cont">
                {blogs}
              </div>
            </div>

        }
        {
          this.state.youtubeHash !== ''
            ?
              <div className="youTubeVideoBackground" onClick={() => this.setState({ youtubeHash: '' })}>
                <div className="youTubeVideo">
                  <div className="closeYoutubeVideo" onClick={() => this.setState({ youtubeHash: '' })} ><span>&times;</span></div>
                  {this.state.youTubeLoad && <FaClose style={closeStyle} size={20} />}
                  <iframe
                    title="youTubeVideo"
                    height="100%"
                    width="100%"
                    src={`https://www.youtube.com/embed/${this.state.youtubeHash}?autoplay=1`}
                    frameBorder="0"
                    allowFullScreen
                    onLoad={() => this.setState({ ...this.state, youTubeLoad: true })}
                  />
                </div>
              </div>
            :
            null
        }
      </div>
    );
  }
}

export default connect(
  store => ({
    blogList: store.eventStore.data,
    fetching: store.eventStore.fetching,
    error: store.eventStore.error,
    res: store.response,
    i18n: store.i18n,
  }),
  dispatch => bindActionCreators({ ...companyEventsActions }, dispatch),
)(CompanyContainer);
