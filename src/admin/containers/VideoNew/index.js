/* eslint-disable react/sort-comp,no-underscore-dangle,react/prop-types,max-len,no-useless-escape */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { FaClose } from 'react-icons/lib/fa';
import { bindActionCreators } from 'redux';
import HeaderSection from '../../components/HeaderSectionAdmin';
import BlogForm from '../../components/BlogForm';
import * as videoActions from '../../actions/videoActions';
import { VideoCard } from '../../components/VideoCardNew/index';
import Modal from '../../components/Modal';
import './videoAdm.scss';
import Loader from '../../components/LoaderAdm';


class VideoContainerNew extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      youtubeHash: '',
      video: '',
      open: false,
    };
  }

  componentWillMount() {
    this.props.actions.fetchVideoList();
  }

  turnOnVideo = (youtubeHash) => {
    this.setState({ youtubeHash });
  };

  prepareItems = () => {
    const {
      video,
    } = this.props;
    const items = video.map(item =>
      (
        <div className="videoAdminCell" key={item.id}>
          <VideoCard
            itemProps={item}
            onDelete={hash => this.props.actions.deleteVideo(hash)}
            onTurnVideo={hash => this.turnOnVideo(hash)}
          />
        </div>
      ));
    return items;
  };

  // Save value from input, when we trying add new video
  onChangeInput = (e) => {
    const url = e.target.value;
    const YoutubeVideoID = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);
    this.setState({
      video: YoutubeVideoID[1],
    });

    const lastIndex = url.lastIndexOf('/');
    if (lastIndex === -1) {
      this.setState({
        video: url,
      });
    } else {
      this.setState({
        video: url.substring(lastIndex + 1),
      });
    }
  };


  // Open modal
  onOpenModal = () => this.setState({ open: true });

  // Close modal
  onCloseModal = () => this.setState({ open: false });

  // Render Close Icon to close modal
  renderModalCloseIcon = () => (
    <FaClose
      onClick={this.onCloseModal}
      style={{ color: '#44A6F6', cursor: 'pointer' }}
      size={30}
    />
  );
  // Function onClick on icon of modal
  onCancelModalVideoAdd = () => {
    if (this.state.video === '') {
      this.onCloseModal();
    } else {
      this.setState({ video: '' });
    }
  };

  // Save video on server, dispatch here action to save it!
  onSaveActionForModal = () => {
    this.props.actions.saveVideo(this.state.video);
    this.onCancelModalVideoAdd();
  };

  // render Button controls when we trying add one more video
  renderModalControlsForAddVideo = () => ([
    <button
      className="buttonModal"
      onClick={this.onSaveActionForModal}
      key={1}
    >
      Сохранить
    </button>,
    <button
      className="buttonModal"
      color="red"
      type="border"
      onClick={this.onCancelModalVideoAdd}
      key={2}
    >
      Отменить
    </button>,
  ]);

  // render body when we trying add one more video
  renderModalBodyForAddVideo = () => (
    <div className="ModalBodyContainer" >
      {
        this.state.video === '' ?
          <input type="text" onChange={this.onChangeInput} value={this.state.video} placeholder="Скопируйте ссылку на youTube видео и вставте в поле" />
          :
          <div className="iframeCont">
            <Loader />
            <iframe
              style={{ zIndex: 10 }}
              title="youTubeVideo"
              height="100%"
              width="100%"
              src={`https://www.youtube.com/embed/${this.state.video}`}
              frameBorder="0"
              allowFullScreen
            />
          </div>
      }
    </div>
  );

  render() {
    const { youtubeHash, open } = this.state;
    const body = this.renderModalBodyForAddVideo();

    return (
      <div>
        <HeaderSection
          className="VideoAdmHeader"
          title="Блог"
        />
        <div className="videoAdminMainCont">
          {this.prepareItems()}
          <div className="videoAdminCell">
            <div className="emptyCard" onClick={this.onOpenModal} ><h3>Добавить видео</h3></div>
          </div>
        </div>
        {
          youtubeHash !== ''
            ?
            <div className="youTubeVideoBackground" onClick={() => this.setState({ youtubeHash: '' })}>
              <div className="youTubeVideo">
                <iframe title="youTubeVideo" height="100%" width="100%" src={`https://www.youtube.com/embed/${youtubeHash}?autoplay=1`} frameBorder="0" allowFullScreen />
              </div>
            </div>
            :
            null
        }
        <Modal open={open}>
          {body}
          <BlogForm
            closeIcon={this.renderModalCloseIcon()}
            controls={this.renderModalControlsForAddVideo()}
          />
        </Modal>
      </div>
    );
  }
}

export default connect(
  store => ({
    video: store.video.data,
  }),
  dispatch => ({
    actions: bindActionCreators({ ...videoActions }, dispatch),
  }),
)(VideoContainerNew);
