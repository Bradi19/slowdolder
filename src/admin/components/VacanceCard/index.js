/* eslint-disable import/prefer-default-export,react/prefer-stateless-function,react/forbid-prop-types,max-len,react/require-default-props,jsx-a11y/anchor-is-valid,react/prop-types,react/no-danger */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './vacanceCard.scss';

@withRouter
export class VacanceCard extends Component {
    static defaultProps = {
      itemProps: {
        title: 'Frontend',
        longTitle: {
          ru: 'Frontend',
          ua: 'Frontend',
          en: 'Frontend',
        },
        description: {
          ru: 'We are looking for an experienced and responsible engineer',
          ua: 'We are looking for an experienced and responsible engineer',
          en: 'We are looking for an experienced and responsible engineer',
        },
      },
      activeLang: 'ru',
    };

    redirect = path => () => {
      window.scrollTo(0, 0);
      this.props.history.push(path);
    };

    render() {
      const {
        title,
        longTitle,
        description,
      } = this.props.itemProps;
      const { activeLang, deleteVacance } = this.props;
      const vacancieUrlName = title.split(' ').join('-');
      return (
        <div className="vacanceCardCont">
          <div className="vacanceCardHeadre">
            <div className="titleContainer">{title}</div>
            <div className="ButtonContainer">
              <button
                onClick={this.redirect(`/vacancies/${vacancieUrlName}/edit`)}
              >Edit
              </button>
              <button
                onClick={this.redirect(`/vacancies/${vacancieUrlName}`)}
              >Show
              </button>
              <button
                onClick={deleteVacance}
              >Delete
              </button>
            </div>
          </div>
          <div className="vacanceCardTitle">
            {longTitle[activeLang]}
          </div>
          <div className="vacanceCardTitle" dangerouslySetInnerHTML={{ __html: description[activeLang] }} />
        </div>
      );
    }
}
