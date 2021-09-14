/* eslint-disable react/no-array-index-key,react/require-default-props,react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaClose } from 'react-icons/lib/fa';
import companyEventsActions from '../../actions/companyEventsActions';
import '../../../scss/companyBlog.scss';
import BlogCard from '../../components/blogCard/index';
import Button from '../../components/Button';
import { CardCarousel } from '../../components/ResponsibleCarousel/index';
import UIToggler from '../UIToggler';
import { ROUTE_MAP } from '../../constants/index';
import { LocalLinkBtn } from '../../components/LocalLinkBtn/index';

const closeStyle = {
  position: 'absolute',
  top: -16,
  right: -16,
  color: 'white',
  cursor: 'pointer',
};

@withRouter
class CompanyBlog extends PureComponent {
  static propTypes = {
    i18n: PropTypes.shape({}).isRequired,
    getBlog: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
    blogList: PropTypes.array,
  };
  static defaultProps = {};
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
  componentWillReceiveProps(next) {
    if (next.i18n !== this.props.i18n) {
      this.props.getBlog();
    }
  }
  prepareItems = blogList => blogList.slice(0, 3).map((item, index) => (
    <div
      className="blogCel"
      key={index}
    >
      <BlogCard
        item={item}
        key={index}
        onTurnOnVideo={youtubeHash => this.setState({ youtubeHash })}
      />
    </div>
  ));

  prepareItemsForMobile = blogList => blogList.slice(0, 3).map((item, index) => (
    <BlogCard
      key={index}
      item={item}
      hoverEffect={false}
      onTurnOnVideo={youtubeHash => this.setState({ youtubeHash })}
    />
  ));

  prepareBlogList = blogList => (
    <div className="blogList">{blogList}</div>
  );

  redirect = () => {
    document.body.scrollTop = 0;
    this.props.history.push(ROUTE_MAP.companyEvents);
  };

  prepareBtn = () => (<div className="allBlogsCondBtn"><Button text="mainPage.blogBtn" onClick={this.redirect} /></div>);

  render() {
    const blogList = this.prepareItems(this.props.blogList);
    const blogListForMobile = this.prepareItemsForMobile(this.props.blogList);
    return (
      <div className="blogCompanyCont">
        <UIToggler
          desktopComponent={this.prepareBlogList(blogList)}
          tabletComponent={this.prepareBlogList(blogList)}
          mobileComponent={<CardCarousel itemArr={blogListForMobile} />}
        />
        {
          this.state.youtubeHash !== ''
            ?
              <div className="youTubeVideoBackground" onClick={() => this.setState({ youtubeHash: '' })}>
                <div className="closeYoutubeVideo" onClick={() => this.setState({ youtubeHash: '' })} ><span>&times;</span></div>
                <div className="youTubeVideo">
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
        <UIToggler
          desktopComponent={this.prepareBtn()}
          tabletComponent={this.prepareBtn()}
          mobileComponent={(
            <LocalLinkBtn
              linkTo={ROUTE_MAP.companyEvents}
              text="mainPage.blogBtn"
              whiteArrow={false}
              className="arrowBlog"
            />
          )}
        />


      </div>
    );
  }
}

export default connect(
  store => ({
    blogList: store.eventStore.data,
    res: store.response,
    i18n: store.i18n,
  }),
  dispatch => bindActionCreators({ ...companyEventsActions }, dispatch),
)(CompanyBlog);

