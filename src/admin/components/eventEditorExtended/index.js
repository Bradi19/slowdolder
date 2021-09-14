/* eslint-disable react/prop-types,import/prefer-default-export,max-len,jsx-a11y/img-redundant-alt,jsx-a11y/alt-text */

import React, { Component } from 'react';
import moment from 'moment';
import RichTextEditor from 'react-rte';
import Calendar from 'react-calendar';
import { Uploader } from '../Uploader';
import { UploaderSinglePhoto } from '../UploaderSinglePhoto/index';
import { PreviewImages } from '../PreviewPictures/index';
import { toolbarConfig } from '../eventEditor/index';
import Button from '../newButton';
import { MessageBlock } from '../messageBlock/index';

export class EventEditorExtended extends Component {
    static defaultProps = {
      itemProps: {
        description: {
          ru: '',
          ua: '',
          en: '',
        },
        title: {
          ru: '',
          ua: '',
          en: '',
        },
        body: {
          ru: '',
          ua: '',
          en: '',
        },
        thumbnail: '',
        gallery: [],
        publishedAt: new Date(),
      },
      activeLang: 'ru',
    };
    constructor(props) {
      super(props);
      const {
        description, body, title, thumbnail, gallery, publishedAt,
      } = this.props.itemProps;
      this.state = {
        descriptionRU: description.ru,
        descriptionUA: description.ua,
        descriptionEN: description.en || '',
        bodyRU: RichTextEditor.createValueFromString(body.ru, 'html'),
        bodyUA: RichTextEditor.createValueFromString(body.ua, 'html'),
        bodyEN: RichTextEditor.createValueFromString(body.en || '', 'html'),
        titleRU: title.ru,
        titleUA: title.ua,
        titleEN: title.en || '',
        thumbnail,
        showFullDescription: body.ru.length > 0 && body.ua.length > 0,
        publishedAt: new Date(publishedAt),
        gallery,
        showMessage: false,
        message: '',
        successMessage: true,
      };
    }

    componentWillReceiveProps(next) {
      if (next.error) {
        this.setState({ showMessage: !this.state.showMessage, message: 'Возникли проблемы с сервером попробуйте еще раз!', successMessage: false });
      } else {
        if (this.props.editingEvent !== next.editingEvent) {
          this.setState({ showMessage: !this.state.showMessage, message: 'Мероприятие изменено успешно!', successMessage: true });
        }
        if (this.props.delitingPhotos !== next.delitingPhotos) {
          this.setState({ showMessage: !this.state.showMessage, message: 'Выбранные фото мероприятия удалены!', successMessage: true });
        }
      }
    }

    onSubmit=() => {
      const validator = this.validator();
      if (validator.success) {
        const formData = new FormData();
        formData.append('data', JSON.stringify({
          title: {
            ru: this.state.titleRU,
            ua: this.state.titleUA,
            en: this.state.titleEN,
          },
          body: {
            ru: this.state.bodyRU.toString('html'),
            ua: this.state.bodyUA.toString('html'),
            en: this.state.bodyEN.toString('html'),
          },
          description: {
            ru: this.state.descriptionRU,
            ua: this.state.descriptionUA,
            en: this.state.descriptionEN,
          },
          publishedAt: this.state.publishedAt.getTime(),
        }));
        formData.append('thumbnail', window.location.origin + this.state.thumbnail);
        this.props.onSubmit(formData);
        if (this.state.gallery.length !== 0) {
          const formDataGallery = new FormData();
          this.state.gallery.forEach((item) => {
            formDataGallery.append('gallery', item);
          });
          this.props.onSubmitGallery(formDataGallery);
        }
      } else {
        this.setState({ showMessage: !this.state.showMessage, message: validator.message, successMessage: false });
      }
    };

    onChangeDate = publishedAt => this.setState({ publishedAt, openCalendar: !this.state.openCalendar });
    dataClick = () => this.setState({ openCalendar: !this.state.openCalendar });
    showFullDescription = () => this.setState({ showFullDescription: !this.state.showFullDescription });
    validator = () => {
      const { titleRU, titleUA } = this.state;
      if (titleRU && titleUA) {
        return { message: '', success: true };
      }
      return { message: 'Введите название мероприятия на русском и украинском!', success: false };
    };

    render() {
      const { activeLang } = this.props;
      return (
        <div className="addNewVacanceCont">
          <MessageBlock
            text={this.state.message}
            show={this.state.showMessage}
            success={this.state.successMessage}
          />
          <div className="HeadreEventAdminCont">
            <UploaderSinglePhoto
              pictureSrc={this.state.thumbnail}
              onSubmit={(data) => {
                    this.setState({ thumbnail: data });
                }}
            >
              <div className="titleEventAdmin">
                {activeLang === 'ru' ?
                  <input
                    className="titleInput"
                    type="text"
                    value={this.state.titleRU}
                    onChange={(e) => {
                      if (e.target.value.length <= 100) this.setState({ titleRU: e.target.value });
                    }}
                    placeholder="Введите название"
                  />
                  :
                  <input
                    className="titleInput"
                    type="text"
                    value={this.state.titleUA}
                    onChange={(e) => {
                      if (e.target.value.length <= 100) this.setState({ titleUA: e.target.value });
                    }}
                    placeholder="Введите название"
                  />
                }
                <div className="dateContEventAdmin">
                  <p onClick={this.dataClick} className="dateText">{moment(this.state.publishedAt).format('DD.MM.YYYY')}</p>
                  <div className="calendarCont">
                    {
                      this.state.openCalendar &&
                      <Calendar
                        onChange={this.onChangeDate}
                        value={this.state.publishedAt}
                      />
                    }
                  </div>
                </div>
                {activeLang === 'ru' ?

                  <input
                    className="descriptionInput"
                    type="text"
                    value={this.state.descriptionRU}
                    onChange={(e) => {
                      if (e.target.value.length <= 100) this.setState({ descriptionRU: e.target.value });
                    }}
                    placeholder="Введите краткое описание"
                  />
                  :
                  <input
                    className="descriptionInput"
                    type="text"
                    value={this.state.descriptionUA}
                    onChange={(e) => {
                      if (e.target.value.length <= 100) this.setState({ descriptionUA: e.target.value });
                    }}
                    placeholder="Введите краткое описание"
                  />
                }
              </div>
            </UploaderSinglePhoto>
          </div>
          {activeLang === 'ru' ?
            <div className="bodyEventContAdm">
              {this.state.showFullDescription &&
              <div
                onClick={this.showFullDescription}
                className="resultDescription"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: this.state.bodyRU.toString('html') }}
              />
              }
              <div className="richTextEditorCont">
                {!this.state.showFullDescription &&
                <RichTextEditor
                  placeholder="Полное описание мероприятия"
                  toolbarConfig={toolbarConfig}
                  value={this.state.bodyRU}
                  onChange={(e) => { this.setState({ bodyRU: e }); }}
                />
                }
                {!this.state.showFullDescription && this.state.bodyRU.toString('html') !== '' && <button className="showResultBtn" onClick={this.showFullDescription}>Show result</button> }
              </div>
            </div>
            :
            <div className="bodyEventContAdm">
              {this.state.showFullDescription &&
              <div
                onClick={this.showFullDescription}
                className="resultDescription"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: this.state.bodyUA.toString('html') }}
              />
              }
              <div className="richTextEditorCont">
                {!this.state.showFullDescription &&
                <RichTextEditor
                  placeholder="Полное описание мероприятия"
                  toolbarConfig={toolbarConfig}
                  value={this.state.bodyUA}
                  onChange={(e) => { this.setState({ bodyUA: e }); }}
                />
                }
                {!this.state.showFullDescription && this.state.bodyUA.toString('html') !== '' && <button className="showResultBtn" onClick={this.showFullDescription}>Show result</button> }
              </div>
            </div>
          }
          <div className="uplouderContEventEditor">
            <p>Новые фото</p>
            <Uploader
              reset={this.props.reloadUplouder}
              onSubmit={(data) => {
                this.setState({ gallery: data });
              }}
            />
          </div>

          <div className="previewContEventEditor">
            <PreviewImages
              pictures={this.props.itemProps.gallery}
              onCheckUp={data => this.props.onDeletePictures(data.map(item => item.replace(/(.*)\/(.+)$/, '$2')))}
            />
          </div>
          <div className="ButtonContEditVacance"><Button onClick={this.onSubmit}>Сохранить изменение</Button></div>
        </div>
      );
    }
}
