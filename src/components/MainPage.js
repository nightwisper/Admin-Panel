import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import PropTypes from 'prop-types';

import LoginForm from './LoginForm';
import Home from './Home';
import EmpCreationForm from './employee/EmpCreationForm';

import Header from './Header'
import SideMenu from './SideMenu'
import Footer from './Footer'

class MainPage extends Component {
    render() {

        if (this.props.login_status) {
            return (
                <div>
                    <Header />
                    <main>
                        <div className="row">
                            <SideMenu />
                            <Route exact path="/" component={Home} />
                            <Route exact path="/employees/create" component={EmpCreationForm} />
                        </div>
                    </main>
                    <Footer />
                </div>
            )
        }

        return (
            <div>
                <LoginForm />
            </div>
        )
    }
}

MainPage.propTypes = {
    login_status:PropTypes.bool.isRequired,
    userName:PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
    login_status: state.login.login_status,
    userName: state.login.userName
});

export default connect(mapStateToProps, {})(MainPage);