import React, { Component } from 'react';

class DetailComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          isSelectedData: false,
          selectedData: ''
        };
    };
    
    renderPlanetData(data) {
        let list = [];
        for (let i = 0; i < data.length; i++) {
            list.push(<tr onClick={e => this.renderSelectedData(e,data[i])} className={i == 0 ? 'bold':''}>
                        <td>{data[i].name}</td>
                        <td>{data[i].population}</td>
                    </tr>);
        }
        return list;
            
    }
    renderContentSelectedData(data) {
        let list = [];
        let key = Object.keys(data);
        for (let i = 0; i < 8; i++) {
            list.push(<tr>
                        <td className='bold'>{key[i]}</td>
                        <td>{data[key[i]]}</td>
                    </tr>);
        }
        return list;
    }
    renderSelectedData(e, data) {
        this.setState({
            isSelectedData: true,
            selectedData: data
        });
        this.props.toggleResetDetailsPage();
    }
    render() {
        if (!this.props.isLoginShow) {
            return (
                <div>
                    <input type="button"
                            className="button logout"
                            value="Logout"
                            onClick={this.props.handleLogout}/>
                    <h2>Welcome to Details Page</h2>
                    <span className="TextLabel bold">Search Planet:  </span>
                    <input type="text"
                            className="LoginInput"
                            value={this.props.planetName}
                            onChange={this.props.handleSearch} />
                    
                    {this.props.data.length > 0 &&
                    <div className="tableContainer">
                    <table className="table">
                        <thead>
                            <tr>
                                <th><a href="#" className="bold">Planetname</a></th>
                                <th><a href="#" className="bold">Population</a></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderPlanetData(this.props.data)}
                        </tbody>
                    </table>
                    {this.state.isSelectedData && !this.props.resetDetailsPage &&
                    <table className="table">
                        <tbody>
                            {this.renderContentSelectedData(this.state.selectedData)}
                        </tbody>
                    </table>
                    }
                    </div>
                    }
                </div>
            );
        } else {
            return <div className="LoginContainer"></div>
        }
    }
}

export default DetailComponent;
