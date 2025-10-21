import OrderFAQ from "../components/home-order/OrderFAQ";
import OrderHero from "../components/home-order/OrderHero";
import OrderPayment from "../components/home-order/OrderPayment";
import OrderSteps from "../components/home-order/OrderSteps";
import OrderSustain from "../components/home-order/OrderSustain";
import OrderZones from "../components/home-order/OrderZones";
import "../components/home-order/HomeOrder.css";

const HomeOrder = () => {
  return (
    <main role="order-page" aria-label="Home delivery information">
      <OrderHero />
      <OrderSteps />
      <OrderPayment />
      <OrderZones />
      <OrderSustain />
      <OrderFAQ />
    </main>
  );
};

export default HomeOrder;
