import React from 'react';
import { Translate } from 'react-redux-i18n';

export default function GraduatesTable({
  people, click, openModal, groupNumber, sertificateNumber, images, course
}) {
  return (
    <React.Fragment>
      <p className="graduated-year"><Translate value={`certificates.group_number${groupNumber}`} /></p>

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col" className="graduated-certeficates"><div className="graduated-table-header"><Translate value="certificates.certificate_number" /></div></th>
            <th scope="col" className="graduated-certeficates"><div className="graduated-table-header"><Translate value="certificates.graduates" /></div></th>
            <th scope="col" className="graduated-certeficates"><div>Курс</div></th>
            <th scope="col" className="graduated-certeficates"><div className="graduated-table-header"><Translate value="certificates.certificate" /></div></th>
          </tr>
        </thead>
        <tbody>
          {people.map((man, i) => {
            return (
              <tr>
                <th scope="row" className="graduated-text">{sertificateNumber + i}</th>
                <td className="graduated-text">{man}</td>
                <td className="graduated-text">{course}</td>
                <td>
                  <div className="graduated-table-btn-container">
                    <i className="fas fa-eye graduated-eye-btn" onClick={() => openModal({ man, images })}></i>
                    <a href={click(man, images)} download={`Cetrificate of ${man}`}><i className="fas fa-cloud-download-alt graduated-download-btn"></i></a>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
}
