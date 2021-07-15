import React from 'react';
import '../assets/scss/style.scss';
import Address from '../components/Address';
import Checkout_item from '../components/Checkout_item';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Tablenumber from '../components/Tablenumber';
import Totalbill from '../components/Totalbill';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { resetSelectedItems } from '../services/actions/action';
import ProviderIntl from '../intl/ProviderIntl';
import translate from '../intl/Translate';

const Order = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleOnclick = () => {
    dispatch(resetSelectedItems());
    history.push('/categories');
  };

  const order = useSelector((state) => state.foodDetails.order);
  const totalBill = useSelector((state) => state.foodDetails.totalBill);
  const locale = useSelector((state) => state.lan.locale);

  return (
    <div className="checkout-container">
      <ProviderIntl locale={locale}>
        <Header title={translate('order_confirmed')} backicon={false} />
        <Address
          title={'Kempston Hammers Sports & Social Club'}
          center={false}
        />
        <div className="checkout-selected-items">
          <b>{translate('ordered_items')}</b>

          {order.map((items, index) => (
            <Checkout_item
              abc={index}
              key={index * 2}
              numberOfItems={items.numberOfItems}
              itemname={items.itemname}
              ingredients={items.extras}
              price={items.price}
              variantName={items.variantName}
              deleteicon={false}
            />
          ))}
        </div>
        <hr className="Line"></hr>
        <Totalbill bill={totalBill} />
        <hr className="Line"></hr>
        <Tablenumber showTablenumber={true} />
        <Footer
          title={translate('back_to_menu')}
          sl={false}
          handleOnclick={handleOnclick}
        />
      </ProviderIntl>
    </div>
  );
};

export default Order;
