import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CartProduct from '../../actions/cartProduct';
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
}
export default connect(
    store => ({
        cart: store.cart.list,
        fetching_cart: store.cart.fetching,
        i18n: store.i18n,
        res: store.response,
    }),
    dispatch => ({ ...CartProduct }, dispatch),
)(Cart);