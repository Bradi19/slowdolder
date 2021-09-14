/* eslint-disable react/prop-types,import/prefer-default-export,max-len */

import React, { Component } from 'react';
import moment from 'moment';
import RichTextEditor from 'react-rte';
import Calendar from 'react-calendar';
import { filterItems } from '../../config/filterItems';
import './vacanceEditor.scss';
import { VacanceCard } from '../VacanceCardNew/index';
import Button from '../newButton';
import { MessageBlock } from '../messageBlock/index';

const toolbarConfig = {
  // Optionally specify the groups to display (displayed in the order listed).
  display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
  INLINE_STYLE_BUTTONS: [
    { label: 'Bold', style: 'BOLD' },
    { label: 'Italic', style: 'ITALIC' },
    { label: 'Underline', style: 'UNDERLINE' },
  ],
  BLOCK_TYPE_DROPDOWN: [
    { label: 'Normal', style: 'unstyled' },
    { label: 'Heading Medium', style: 'header-two' },
    { label: 'Heading Small', style: 'header-three' },
  ],
  BLOCK_TYPE_BUTTONS: [
    { label: 'UL', style: 'unordered-list-item' },
    // { label: 'OL', style: 'ordered-list-item' },
  ],
};
const toolbarConfig2 = {
  // Optionally specify the groups to display (displayed in the order listed).
  display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'HISTORY_BUTTONS'],
  INLINE_STYLE_BUTTONS: [
    { label: 'Bold', style: 'BOLD' },
    { label: 'Italic', style: 'ITALIC' },
    { label: 'Underline', style: 'UNDERLINE' },
  ],
  BLOCK_TYPE_BUTTONS: [
    { label: 'UL', style: 'unordered-list-item' },
  ],
};

const initialState = {
  descriptionRU: RichTextEditor.createValueFromString('', 'html'),
  descriptionUA: RichTextEditor.createValueFromString('', 'html'),
  descriptionEN: RichTextEditor.createValueFromString('', 'html'),
  bodyRU: RichTextEditor.createValueFromString('', 'html'),
  bodyUA: RichTextEditor.createValueFromString('', 'html'),
  bodyEN: RichTextEditor.createValueFromString('', 'html'),
  longTitleRU: '',
  longTitleUA: '',
  longTitleEN: '',
  specialty: 'Frontend',
  level: 'Trainee',
  titleRU: '',
  titleUA: '',
  titleEN: '',
  publishedAt: new Date(),
  openCalendar: false,
  showFullDescription: false,
  showDescription: false,
  showMessage: false,
  message: '',
  successMessage: true,
};

export class VacanceEditor extends Component {
    static defaultProps = {
      itemProps: {
        description: {
          ru: '',
          ua: '',
          en: '',
        },
        longTitle: {
          ru: '',
          ua: '',
          en: '',
        },
        body: {
          ru: '',
          ua: '',
          en: '',
        },
        specialty: 'Front-end',
        level: 'Trainee',
        title: {
          ru: '',
          ua: '',
          en: '',
        },
        publishedAt: new Date(),
      },
      openCalendar: false,
      showFullDescription: false,
      showDescription: false,
    };
    constructor(props) {
      super(props);
      const {
        description, body, longTitle, specialty, level, title, publishedAt,
      } = this.props.itemProps;
      const {
        openCalendar,
      } = this.props;
      this.state = {
        descriptionRU: RichTextEditor.createValueFromString(description.ru, 'html'),
        descriptionUA: RichTextEditor.createValueFromString(description.ua, 'html'),
        descriptionEN: RichTextEditor.createValueFromString(description.en || '', 'html'),
        bodyRU: RichTextEditor.createValueFromString(body.ru, 'html'),
        bodyUA: RichTextEditor.createValueFromString(body.ua, 'html'),
        bodyEN: RichTextEditor.createValueFromString(body.en || '', 'html'),
        longTitleRU: longTitle.ru,
        longTitleUA: longTitle.ua,
        longTitleEN: longTitle.en || '',
        specialty,
        level,
        titleRU: (typeof title === 'string') ? title : title.ru,
        titleUA: (typeof title === 'string') ? title : title.ua,
        titleEN: (typeof title === 'string') ? title : title.en,
        publishedAt: publishedAt instanceof Date ? publishedAt : new Date(publishedAt),
        openCalendar,
        showFullDescription: body.ru.length > 0 && body.ua.length > 0,
        showDescription: description.ru.length > 0 && description.ua.length > 0,
        showMessage: false,
        message: '',
        successMessage: true,
      };
    }

    componentWillReceiveProps(next) {
      if (next.error) {
        this.setState({ showMessage: !this.state.showMessage, message: 'Возникли проблемы с сервером попробуйте еще раз!', successMessage: false });
      } else {
        if (this.props.reset !== next.reset) {
          this.setState(initialState);
          this.setState({ showMessage: !this.state.showMessage, message: 'Вакансия добавленна успешно!', successMessage: true });
        }
        if (this.props.successEditing !== next.successEditing) {
          this.setState({ showMessage: !this.state.showMessage, message: 'Вакансия изменена успешно!', successMessage: true });
        }
      }
    }


    onSubmit= () => {
      const validator = this.validator();
      if (validator.success) {
        this.props.onSubmit({
          specialty: this.state.specialty,
          level: this.state.level,
          title: {
            ru: this.state.titleRU,
            ua: this.state.titleUA,
            en: this.state.titleEN,
          },
          longTitle: {
            ru: this.state.longTitleRU,
            ua: this.state.longTitleUA,
            en: this.state.longTitleEN,
          },
          body: {
            ru: this.state.bodyRU.toString('html'),
            ua: this.state.bodyUA.toString('html'),
            en: this.state.bodyEN.toString('html'),
          },
          description: {
            ru: this.state.descriptionRU.toString('html'),
            ua: this.state.descriptionUA.toString('html'),
            en: this.state.descriptionEN.toString('html'),
          },
          publishedAt: this.state.publishedAt.getTime(),
        });
      } else {
        this.setState({ showMessage: !this.state.showMessage, message: validator.message, successMessage: false });
      }
    };


  onChangeDate = publishedAt => this.setState({ publishedAt, openCalendar: !this.state.openCalendar });
  showDescription = () => this.setState({ showDescription: !this.state.showDescription });
  dataClick = () => this.setState({ openCalendar: !this.state.openCalendar });
  showFullDescription = () => this.setState({ showFullDescription: !this.state.showFullDescription });
  // eslint-disable-next-line react/no-danger
  prepareDescriptionForVacanCardRU = () => <div className="vacanceCardLongDescrAdm" onClick={this.showDescription} dangerouslySetInnerHTML={{ __html: this.state.descriptionRU.toString('html') }} />
  validator = () => {
    const {
      titleRU, bodyRU, descriptionRU, titleUA, bodyUA, descriptionUA,
    } = this.state;
    if (titleRU && bodyRU.toString('html') && descriptionRU.toString('html') && titleUA && bodyUA.toString('html') && descriptionUA.toString('html')) {
      return { message: '', success: true };
    }
    return { message: 'Вы не заполнели все поля (на русском и украинском)!', success: false };
  };


  render() {
    const { activeLang } = this.props;
    const descriptionForVacanCardRU = this.prepareDescriptionForVacanCardRU();
    // console.log(this.state.publishedAt, moment(this.state.publishedAt).format('DD.MM.YYYY'), Date.parse(this.state.publishedAt), this.state.publishedAt instanceof Date);
    return (
      <div className="addNewVacanceContAdm">
        <MessageBlock
          text={this.state.message}
          show={this.state.showMessage}
          success={this.state.successMessage}
        />

        {activeLang === 'ru'
          ?
            <div className="vacanceCardContMainAdm">
              <VacanceCard
                itemProps={{
                level: this.state.level,
                title: this.state.titleRU,
                publishedAt: this.state.publishedAt,
              }}
              >
                <div>
                  { this.state.showDescription ?
                  descriptionForVacanCardRU
                  :
                  <div className="richTextEditorCont inerBodyContCard">
                    <RichTextEditor
                      placeholder="Краткое описание вакансии"
                      toolbarConfig={toolbarConfig2}
                      value={this.state.descriptionRU}
                      onChange={e => this.setState({ descriptionRU: e })}
                    />
                    <button className="showResultBtn2" onClick={this.showDescription}>Show result</button>
                  </div>
                }
                </div>
              </VacanceCard>
            </div>
          :
            <div className="vacanceCardContMainAdm">
              <VacanceCard
                itemProps={{
                level: this.state.level,
                title: this.state.titleUA,
                publishedAt: this.state.publishedAt,
              }}
              >
                <div>
                  { this.state.showDescription ?
                  descriptionForVacanCardRU
                  :
                  <div className="richTextEditorCont inerBodyContCard">
                    <RichTextEditor
                      placeholder="Краткое описание вакансии"
                      toolbarConfig={toolbarConfig2}
                      value={this.state.descriptionUA}
                      onChange={e => this.setState({ descriptionUA: e })}
                    />
                    <button className="showResultBtn2" onClick={this.showDescription}>Show result</button>
                  </div>
                }
                </div>
              </VacanceCard>
            </div>
        }


        <div className="VacanceHeaderAdm">
          <div className="VacanceHeaderContAdm">
            <div className="VacanceHeaderTextAdm">
              {activeLang === 'ru'
                ?
                  <input
                    className="VacaneHeaderInputAdm"
                    type="text"
                    value={this.state.titleRU}
                    onChange={e => this.setState({ titleRU: e.target.value })}
                    placeholder="Введите название вакансии"
                  />
                :
                  <input
                    className="VacaneHeaderInputAdm"
                    type="text"
                    value={this.state.titleUA}
                    onChange={e => this.setState({ titleUA: e.target.value })}
                    placeholder="Введите название вакансии"
                  />
              }
              <div className="dateCont">
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
              <div className="filterCont">
                <p>Выберите специализацию:</p>
                <select
                  value={this.state.specialty}
                  onChange={e => this.setState({ specialty: e.target.value })}
                >
                  {filterItems.specialty.map(item => <option key={item} value={item} >{item}</option>)}
                </select>
                <p>Выберите уровень: </p>
                <select
                  value={this.state.level}
                  onChange={e => this.setState({ level: e.target.value })}
                >
                  {filterItems.level.map(item => <option key={item} value={item} >{item}</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>

        {activeLang === 'ru'
          ?
            <div className="bodyVacanceCont">
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
                  placeholder="Описание вакансии"
                  toolbarConfig={toolbarConfig}
                  value={this.state.bodyRU}
                  onChange={(e) => { this.setState({ bodyRU: e }); }}
                />
              }
                {!this.state.showFullDescription && this.state.bodyRU.toString('html') !== '' && <button className="showResultBtn" onClick={this.showFullDescription}>Show result</button> }
              </div>
            </div>
          :
            <div className="bodyVacanceCont">
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
                  placeholder="Описание вакансии"
                  toolbarConfig={toolbarConfig}
                  value={this.state.bodyUA}
                  onChange={(e) => { this.setState({ bodyUA: e }); }}
                />
              }
                {!this.state.showFullDescription && this.state.bodyUA.toString('html') !== '' && <button className="showResultBtn" onClick={this.showFullDescription}>Show result</button> }
              </div>
            </div>
        }
        <div className="ButtonContEditVacance"><Button onClick={this.onSubmit}>Добавить вакансию</Button></div>

      </div>
    );
  }
}
