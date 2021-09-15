import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { connect } from 'react-redux';
import CartProduct from '../../actions/cartProduct';
import CardProduct from '../../components/CartProducts';
import HeaderSection from '../../components/HeaderSection/index';
import backgroundImage from '../../../images/background/klusscheviecoworkers.jpg';
import { HELMET_ROUTE_MAP } from '../../constants';


class Cart extends PureComponent {
    static propTypes = {
        getCart: PropTypes.func.isRequired,
        cart: PropTypes.arrayOf(PropTypes.shape({})),
        i18n: PropTypes.shape({
            locale: PropTypes.string,
        }).isRequired,
        res: PropTypes.shape({
            width: PropTypes.number,
        }).isRequired,
    };
    static defaultProps = {
        cart: [],
    };
    componentDidMount() {
        this.props.getCart();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.i18n !== this.props.i18n) {
            this.props.getCart();
        }
    }
    cartProductsBlocks = items => items.map(item => <CardProduct {...item} key={item.title} />);
    render() {
        const staffBlocks = this.cartProductsBlocks(this.props.cart);
        const {
            i18n: { locale },
            res: { width },
        } = this.props;
        return (
            <div>
                <Helmet>
                    <title>{HELMET_ROUTE_MAP[locale].employees}</title>
                </Helmet>
                <HeaderSection
                    title="employees.title"
                    backgroundImage={backgroundImage}
                />
                <div className={width <= 767 ? 'keystaff__staff_container mobile' : 'keystaff__staff_container'}>
                    {staffBlocks}
                </div>
            </div>
        );
    }

}
export default connect(
    store => ({
        cart: store.cart.list,
        fetching_cart: store.cart.fetching,
        i18n: store.i18n,
        res: store.response,
    }),
    dispatch => bindActionCreators({ ...CartProduct }, dispatch),
)(Cart);