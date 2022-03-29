import React from 'react';
// 라이브러리를 해당 이름으로 임포트
import PropTypes from 'prop-types';

class PropsComponent extends React.Component {
    render() {
        return (
            <div className='message-container'>
                {this.props.name}
            </div>
        )
    }
}

// 특수 변수 선언
PropsComponent.propTypes = {
    name: PropTypes.string
};

export default PropsComponent;