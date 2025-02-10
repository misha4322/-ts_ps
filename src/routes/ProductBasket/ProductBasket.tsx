import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import s from "./ProductBasket.module.css";
import trash from "../../assets/icons8-мусорка-100 1.svg";
import fractal from "../../assets/Fractal-Design.png";
import componentsData from "../../components/ComponentsData"; // Убедитесь, что путь правильный
import { nanoid } from "@reduxjs/toolkit";
import { IMaskInput } from 'react-imask';

interface Component {
  name: string;
  price?: number;
}


interface BasketItem {
  name: string;
  price?: number;
}

interface BasketItems {
  [key: string]: BasketItem;
}

interface OrderSuccessInfo {
  phoneNumber: string;
  totalPrice: number;
}

export const ProductBasket: React.FC = () => {
  const [basketItems, setBasketItems] = useState<BasketItems>({});
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [orderSuccess, setOrderSuccess] = useState<boolean>(false);
  const [orderSuccessInfo, setOrderSuccessInfo] = useState<OrderSuccessInfo>({ phoneNumber: "", totalPrice: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const savedBasket = localStorage.getItem("basket");
    if (savedBasket) {
      const items: BasketItems = JSON.parse(savedBasket);
      setBasketItems(items);
      setTotalPrice(calculateTotalPrice(items));
    }
  }, []);

  const calculateTotalPrice = (items: BasketItems): number => {
    return Object.entries(items).reduce((total, [category, item]) => {
      const componentList = (componentsData as unknown as Record<string, Component[]>)[category];
      const component = componentList?.find((comp) => comp.name === item.name);
      return total + (component?.price || 0);
    }, 0);
  };

  const handleOrder = () => {
    if (phoneNumber.length === 11) {
      setOrderSuccessInfo({ phoneNumber, totalPrice });
      setOrderSuccess(true);
      setBasketItems({});
      setTotalPrice(0);
      localStorage.removeItem("basket");
    } else {
      alert("Пожалуйста, введите корректный номер телефона (11 цифр)." );
    }
  };

  const handleClearBasket = () => {
    setBasketItems({});
    setTotalPrice(0);
    localStorage.removeItem("basket");
  };

  const handleClose = () => {
    setOrderSuccess(false);
    navigate("/");
  };

  const isBasketEmpty = Object.keys(basketItems).length === 0;

  const getCategoryName = (category: string): string => {
    const categoryNames: { [key: string]: string } = {
      processor: "Процессор",
      video_card: "Видеокарта",
      memory: "Оперативная память",
      case: "Корпус",
      power_supply: "Блок питания",
      cooling: "Охлаждение",
      storage: "Накопитель (SSD/HDD)",
      motherboard: "Материнская плата",
    };
    return categoryNames[category] || category;
  };

  return (
    <div className={s.basketContainer}>
      {!orderSuccess ? (
        <>
          <div className={s.div_basket}>
            {isBasketEmpty ? (
              <p className={s.trash_zero}>Корзина пуста</p>
            ) : (
              <ul className={s.spisok}>
                {Object.entries(basketItems).map(([category, item]) => (
                  <li key={category} className={s.component}>
                    <strong>{getCategoryName(category)}:</strong> {item.name}
                  </li>
                ))}
              </ul>
            )}
            <div className={s.tovar}>
              <img src={fractal} alt="Fractal Design" />
              <h3 className={s.itogo}>Итог: {totalPrice} р</h3>
              <div className={s.inputContainer}>
                <IMaskInput
                  className={s.inputTel}
                  type="tel"
                  inputMode="numeric"
                  placeholder="Введите номер телефона"
                  value={phoneNumber}
                  onAccept={(value: string) => setPhoneNumber(value.replace(/\D/g, ""))}
                  mask={'+7 (000) 000-00-00'}
                />
                <div className={s.btnDelY}>
                  <button onClick={handleOrder} className={s.orderButton} disabled={isBasketEmpty || phoneNumber.length !== 11}>
                    Заказать
                  </button>
                  <button onClick={handleClearBasket} className={s.clearButton}>
                    <img src={trash} alt="Очистить корзину" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className={s.orderSuccess}>
          <div className={s.f}>
            <h2>Спасибо за ваш заказ!</h2>
            <p>Ваш заказ успешно оформлен, и мы рады сообщить, что он уже в обработке.</p>
            <p>Мы позвоним по этому номеру для подтверждения заказа: {orderSuccessInfo.phoneNumber}</p>
            <p>Номер вашего заказа: {nanoid(6)} <br />Сумма заказа: {orderSuccessInfo.totalPrice} рублей</p>
            <p>Если у вас возникнут вопросы, обращайтесь в службу поддержки.</p>
            <button onClick={handleClose} className={s.closeButton}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
};