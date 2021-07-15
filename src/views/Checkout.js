import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../assets/scss/style.scss';
import Addnotes from '../components/Addnotes';
import Address from '../components/Address';
import Checkout_item from '../components/Checkout_item';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Popup from '../components/Popup';
import Tablenumber from '../components/Tablenumber';
import ProviderIntl from '../intl/ProviderIntl';
import translate from '../intl/Translate';

const Checkout = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const order = useSelector((state) => state.foodDetails.order);
  const totalBill = useSelector((state) => state.foodDetails.totalBill);
  const locale = useSelector((state) => state.lan.locale);

  return (
    <div className="checkout-container">
      <ProviderIntl locale={locale}>
        <Header title={translate('checkout')} backicon={true} />
        <Address
          title={'Kempston Hammers Sports & Social Club'}
          center={false}
        />
        <div className="checkout-selected-items">
          {order.map((items, index) => (
            <div key={index}>
              <Checkout_item
                orderIndex={index}
                numberOfItems={items.numberOfItems}
                itemname={items.itemname}
                ingredients={items.extras}
                price={items.price}
                variantName={items.variantName}
                deleteicon={true}
              />
            </div>
          ))}
        </div>
        <hr className="Line"></hr>
        <Addnotes />
        <hr className="Line"></hr>
        <Tablenumber />
        <Footer
          title={translate('confirm_order')}
          value={totalBill}
          itemCount={order.length}
          handleOnclick={handleShow}
          sl={true}
        />
        {show && <Popup handleShow={handleShow} />}
      </ProviderIntl>
    </div>
  );
};

export default Checkout;
