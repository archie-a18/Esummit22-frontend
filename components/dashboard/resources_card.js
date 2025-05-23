import React, { Component } from 'react';
export class ResourcesCard extends Component {
  constructor(props) {
    super(props);
    this.state = { pdfFile: null, fileName: '' };
  }
  componentDidMount() {
    if (this.props.file_) {
      this.setState({
        pdfFile: this.props.file_,
        fileName: this.props.fileName_,
      });
    } else {
      if (this.props.nonca) {
        this.setState({
          pdfFile: '/brochure.pdf',
          fileName: 'E-Summit Brochure.pdf',
        });
      } else {
        this.setState({
          pdfFile: '/ca-rulebook.pdf',
          fileName: 'CA-Rulebook.pdf',
        });
      }
    }
  }

  render() {
    return (
      <div className='resource-Card-container'>
        <img src='/CA-Resources/pdf.svg' className='pdf-img' alt='sorry' />

        <div className='resource-pdf-name'>{this.state.fileName}</div>
        <a href={this.state.pdfFile} target='_blank' rel='noreferrer'>
          {' '}
          <div className=' resource-view'>View</div>
        </a>
        <a
          href={this.state.pdfFile}
          className=' resource-download'
          download='brochure.pdf'
        >
          Download
        </a>
      </div>
    );
  }
}

export default ResourcesCard;
