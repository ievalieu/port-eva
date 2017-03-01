<<<<<<< HEAD
import React, { Component, PropTypes } from 'react';

class PortfolioItem extends Component {
    render() {
        return <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
                <img src={this.props.imgSource} alt={this.props.title}/>
                <div className="caption">
                    <h3>{this.props.title}</h3>
                    <p><a href="#" className="btn btn-primary" role="button">See More</a></p>
                    <p>{this.props.description}</p>
                </div>
            </div>
        </div>;
    }
}

PortfolioItem.propTypes = {
    imgSource: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

=======
import React, { Component, PropTypes } from 'react';

class PortfolioItem extends Component {
    render() {
        return <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
                <img src={this.props.imgSource} alt={this.props.title}/>
                <div className="caption">
                    <h3>{this.props.title}</h3>
                    <p><a href="#" className="btn btn-primary" role="button">See More</a></p>
                    <p>{this.props.description}</p>
                </div>
            </div>
        </div>;
    }
}

PortfolioItem.propTypes = {
    imgSource: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

>>>>>>> 2ed716a9767afa7bce4de636ad515aa1c99cbf13
export default PortfolioItem;