import React from 'react';
import { useNavigate } from "react-router-dom";
import componentsData from "../../components/ComponentsData";
import s from "./Home.module.css";
import { useDispatch } from "react-redux";
import { setSelectedComponents } from "../../features/componentsSlice";
import cubeDark from "../../assets/dark_cube.png";
import cubeWhite from "../../assets/white_cube.png";
import Deepcool from "../../assets/deepcool.png";
import fractal from "../../assets/fraaaactol.png";
import Lianli from "../../assets/lianli.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/swiper-bundle.css';




interface Component {
  name: string;
  price: number;
}



interface BuildConfig {
  processor: string;
  video_card: string;
  memory: string;
  storage: string;
  case: string;
  power_supply: string;
  cooling: string;
  motherboard: string;
}

// Тип для сборки
interface Build {
  name: string;
  slogan?: string;
  img_corpus: string;
  config: BuildConfig;
}

export const Home: React.FC = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let categoryLabels: { [key: string]: string } = {
    processor: "Процессор",
    video_card: "Видеокарта",
    memory: "Оперативная память",
    storage: "Жесткий диск",
    case: "Корпус",
    power_supply: "Блок питания",
    cooling: "Охлаждение",
    motherboard: "Материнская плата",
  };

  let builds: Build[] = [
    {
      name: "cube dark ",
      slogan: "Встань на темную сторону силы",
      img_corpus: cubeDark,
      config: {
        processor: componentsData.processor[3].name,
        video_card: componentsData.video_card[0].name,
        memory: componentsData.memory[0].name,
        storage: componentsData.storage[0].name,
        case: componentsData.case[0].name,
        power_supply: componentsData.power_supply[0].name,
        cooling: componentsData.cooling[0].name,
        motherboard: componentsData.motherboard[3].name,
      },
    },
    {
      name: "white cube",
      slogan: "Встань на белую сторону силы",
      img_corpus: cubeWhite,
      config: {
        processor: componentsData.processor[3].name,
        video_card: componentsData.video_card[8].name,
        memory: componentsData.memory[6].name,
        storage: componentsData.storage[6].name,
        case: componentsData.case[5].name,
        power_supply: componentsData.power_supply[6].name,
        cooling: componentsData.cooling[6].name,
        motherboard: componentsData.motherboard[6].name,
      },
    },
  ];

  let buildsByPrice: { [key: string]: Build[] } = {
    under100k: [
      {
        name: "До 100к",
        img_corpus: Deepcool,
        config: {
          processor: componentsData.processor[0].name,
          video_card: componentsData.video_card[0].name,
          memory: componentsData.memory[0].name,
          storage: componentsData.storage[0].name,
          case: componentsData.case[0].name,
          power_supply: componentsData.power_supply[0].name,
          cooling: componentsData.cooling[0].name,
          motherboard: componentsData.motherboard[3].name,
        },
      },
    ],
    under200k: [
      {
        name: "До 200к",
        img_corpus: fractal,
        config: {
          processor: componentsData.processor[2].name,
          video_card: componentsData.video_card[4].name,
          memory: componentsData.memory[2].name,
          storage: componentsData.storage[2].name,
          case: componentsData.case[2].name,
          power_supply: componentsData.power_supply[2].name,
          cooling: componentsData.cooling[2].name,
          motherboard: componentsData.motherboard[3].name,
        },
      },
    ],
    over300k: [
      {
        name: "от 300к",
        img_corpus: Lianli,
        config: {
          processor: componentsData.processor[3].name,
          video_card: componentsData.video_card[8].name,
          memory: componentsData.memory[6].name,
          storage: componentsData.storage[6].name,
          case: componentsData.case[5].name,
          power_supply: componentsData.power_supply[6].name,
          cooling: componentsData.cooling[6].name,
          motherboard: componentsData.motherboard[6].name,
        },
      },
    ],
  };

  let calculateTotalPrice = (config: BuildConfig): number => {
    return Object.entries(config).reduce((total, [key, value]) => {
      let component = (componentsData as unknown as Record<string, Component[]>)[key]?.find(
        (comp) => comp.name === value
      );
      
      return total + (component?.price || 0);
    }, 0);
  };

  let handleBuy = (config: BuildConfig) => {
    let savedBasket = localStorage.getItem("basket");
    let basketItems = savedBasket ? JSON.parse(savedBasket) : {};

    Object.entries(config).forEach(([key, value]) => {
      const component = (componentsData as unknown as Record<string, Component[]>)[key]?.find(
        (comp) => comp.name === value
      );
      
      if (component) {
        basketItems[key] = { name: value, price: component.price };
      }
    });

    localStorage.setItem("basket", JSON.stringify(basketItems));
    navigate("/basket");
  };

  let handleEdit = (config: BuildConfig) => {
    let selectedItems = Object.entries(config).reduce((acc, [key, name]) => {
      let component = (componentsData as unknown as Record<string, Component[]>)[key]?.find((item) => item.name === name);
      if (component) {
        acc[key] = component;
      }
      return acc;
    }, {} as { [key: string]: Component });

    dispatch(setSelectedComponents(selectedItems));
    navigate("/gather");
  };

  let renderComponents = (config: BuildConfig) => (
    <div className={s.componentsList}>
      {Object.entries(config).map(([key, value], index) => (
        <div key={index} className={s.componentItem}>
          <div className={s.containerText}>
            <span className={s.span}>{categoryLabels[key] || key}: {value}</span>
            <div className={s.line}></div>
          </div>
        </div>
      ))}
    </div>
  );

  let renderBuildsByPrice = (builds: Build[]) =>
    builds.map((build, index) => {
      const totalPrice = calculateTotalPrice(build.config);
      return (
        <div key={index} className={s.build}>
          <div className={s.div_opozone}>
            <p className={s.valuable_h4}>{build.name}</p>
            <img src={build.img_corpus} alt={build.name} className={s.buildImage} />
            {renderComponents(build.config)}
            <div className={s.div_knopka}>
              <div className={s.btnBuy}>
                <button onClick={() => handleBuy(build.config)} className={s.buyButton_categories}>
                  Купить
                </button>
                <button onClick={() => handleEdit(build.config)} className={s.editButton}>
                  Изменить
                </button>
              </div>
              <div className={s.totalPrice}>{totalPrice} ₽</div>
            </div>
          </div>
        </div>
      );
    });

  return (
    <div className={s.container}>
      <div className={s.sliderContainer}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {builds.map((build, index) => (
            <SwiperSlide key={index} className={s.slide}>
              <div className={s.containerSlide}>
                <div className={s.textSlide}>
                  <span>{build.name}</span>
                  <h3 className={s.slogab}>{build.slogan}</h3>
                  <button className={s.btnSlide} onClick={() => handleBuy(build.config)}>Купить ПК</button>
                </div>
                <img className={s.imgSlide} src={build.img_corpus} alt={build.name} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={s.priceCategory}>
        <h2 className={s.priceCategoryh2}>Ценовые категории</h2>
        <div className={s.priceRange}>
          <div className={s.priceCategoryItem}>
            {renderBuildsByPrice(buildsByPrice.under100k)}
          </div>
          <div className={s.priceCategoryItem}>
            {renderBuildsByPrice(buildsByPrice.under200k)}
          </div>
          <div className={s.priceCategoryItem}>
            {renderBuildsByPrice(buildsByPrice.over300k)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;