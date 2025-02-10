
interface Component {
    name: string;
    price: number;
    brand?: string; 
    socket?: string; 
  }
  
  interface ComponentsData {
    processor: Component[];
    video_card: Component[];
    memory: Component[];
    case: Component[];
    power_supply: Component[];
    cooling: Component[];
    storage: Component[];
    motherboard: Component[];
  }
  
  // Основной объект с данными
  const componentsData: ComponentsData = {
    processor: [
      {
        name: "Intel Core i3-13100 [до 4.4GHz, 4 ядра]",
        price: 15000,
        brand: "Intel",
        socket: "LGA 1700",
      },
      {
        name: "AMD Ryzen 5 7600X [до 5.3GHz, 6 ядер]",
        price: 40000,
        brand: "AMD",
        socket: "Socket AM5",
      },
      {
        name: "Intel Core i5-13600K [до 5.1GHz, 14 потоков]",
        price: 50000,
        brand: "Intel",
        socket: "LGA 1700",
      },
      {
        name: "Intel Core i7-13700K [до 5.4GHz, 16 потоков]",
        price: 70000,
        brand: "Intel",
        socket: "LGA 1700",
      },
      {
        name: "AMD Ryzen 7 7800X3D [до 5.0GHz, 8 ядер]",
        price: 55000,
        brand: "AMD",
        socket: "Socket AM5",
      },
      {
        name: "Intel Core i9-13900K [до 5.8GHz, 24 потока]",
        price: 90000,
        brand: "Intel",
        socket: "LGA 1700",
      },
      {
        name: "AMD Ryzen 9 5900X [до 4.8GHz, 12 ядер]",
        price: 75000,
        brand: "AMD",
        socket: "Socket AM4",
      },
      {
        name: "AMD Ryzen 9 7950X3D [до 5.7GHz, 16 ядер]",
        price: 80000,
        brand: "AMD",
        socket: "Socket AM5",
      },
      {
        name: "AMD Ryzen 9 9950Х [до 5.7GHz, 16 ядер]",
        price: 100000,
        brand: "AMD",
        socket: "Socket AM5",
      },
    ],
    video_card: [
      {
        name: "GIGABYTE GeForce GTX 1660 SUPER",
        price: 25000,
      },
      {
        name: "MSI GeForce RTX 3050 VENTUS 2X",
        price: 35000,
      },
      {
        name: "MSI GeForce RTX 4060 Ti TUF GAMING",
        price: 70000,
      },
      {
        name: "ASUS GeForce RTX 4060 Ti TUF GAMING",
        price: 70000,
      },
      {
        name: "ZOTAC GeForce RTX 3060 Twin Edge OC",
        price: 55000,
      },
      {
        name: "MSI GeForce RTX 3070 SUPRIM X",
        price: 95000,
      },
      {
        name: "EVGA GeForce RTX 3070 XC3 Ultra Gaming",
        price: 80000,
      },
      {
        name: "MSI GeForce RTX 4080 SUPER GAMING SLIM WHITE",
        price: 120000,
      },
      {
        name: "MSI GeForce RTX 4090 SUPRIM",
        price: 250000,
      },
    ],
    memory: [
      {
        name: "8GB HyperX Fury DDR4",
        price: 6000,
      },
      {
        name: "16GB Corsair Vengeance LPX DDR4",
        price: 10000,
      },
      {
        name: "16GB Corsair Vengeance RGB Pro DDR4",
        price: 12000,
      },
      {
        name: "32GB Kingston Fury Beast RGB",
        price: 20000,
      },
      {
        name: "32GB G.Skill Trident Z Royal DDR4",
        price: 25000,
      },
      {
        name: "32GB TEAMGROUP T-Force Delta RGB White",
        price: 30000,
      },
      {
        name: "64GB Crucial Ballistix RGB DDR4",
        price: 35000,
      },
      {
        name: "64GB Corsair Vengeance LPX DDR4",
        price: 32000,
      },
      {
        name: "64GB G.Skill Ripjaws V DDR5",
        price: 45000,
      },
    ],
    case: [
      {
        name: "Cooler Master MasterBox Q300L",
        price: 8000,
      },
      {
        name: "Phanteks Eclipse P400A",
        price: 12000,
      },
      {
        name: "NZXT H7 Elite",
        price: 15000,
      },
      {
        name: "Be Quiet! Pure Base 500DX",
        price: 14000,
      },
      {
        name: "Lian Li PC-O11 Dynamic",
        price: 19000,
      },
      {
        name: "Corsair 5000D AIRFLOW",
        price: 18000,
      },
      {
        name: "Fractal Design Meshify 2",
        price: 22000,
      },
      {
        name: "Thermaltake H200 TG",
        price: 11000,
      },
      {
        name: "Cooler Master HAF 700",
        price: 25000,
      },
    ],
    power_supply: [
      {
        name: "Cooler Master MWE Gold 650W",
        price: 7500,
      },
      {
        name: "XPG Core Reactor 750W",
        price: 9500,
      },
      {
        name: "Corsair RM750x",
        price: 8500,
      },
      {
        name: "SilverStone Strider 750W",
        price: 8500,
      },
      {
        name: "EVGA SuperNOVA 750 G5",
        price: 10000,
      },
      {
        name: "Thermaltake Toughpower GF1 850W",
        price: 12000,
      },
      {
        name: "Corsair RM1000x",
        price: 12000,
      },
      {
        name: "Seasonic PRIME TX-850",
        price: 14000,
      },
      {
        name: "be quiet! Dark Power Pro 12 850W",
        price: 18000,
      },
    ],
    cooling: [
      {
        name: "be quiet! Pure Rock 2",
        price: 5000,
      },
      {
        name: "Arctic Freezer 34 eSports",
        price: 6000,
      },
      {
        name: "Cooler Master Hyper 212 Black Edition",
        price: 4000,
      },
      {
        name: "NZXT Kraken X53",
        price: 15000,
      },
      {
        name: "be quiet! Dark Rock Pro 4",
        price: 9000,
      },
      {
        name: "Cooler Master MasterLiquid ML360R",
        price: 15000,
      },
      {
        name: "Noctua NH-D15",
        price: 20000,
      },
      {
        name: "Corsair iCUE H150i ELITE CAPELLIX",
        price: 20000,
      },
      {
        name: "NZXT Kraken Z73",
        price: 25000,
      },
    ],
    storage: [
      {
        name: "Seagate BarraCuda 2TB HDD",
        price: 5000,
      },
      {
        name: "ADATA XPG SX8200 Pro 512GB SSD",
        price: 7000,
      },
      {
        name: "Western Digital Blue 500GB SSD",
        price: 6000,
      },
      {
        name: "Kingston NV2 1TB NVMe SSD",
        price: 8000,
      },
      {
        name: "Crucial P3 1TB NVMe SSD",
        price: 9000,
      },
      {
        name: "Samsung 980 PRO 1TB NVMe SSD",
        price: 12000,
      },
      {
        name: "Samsung 870 QVO 2TB SATA SSD",
        price: 14000,
      },
      {
        name: "Western Digital Black SN850 1TB NVMe SSD",
        price: 20000,
      },
      {
        name: "Toshiba X300 4TB HDD",
        price: 15000,
      },
    ],
    motherboard: [
      {
        name: "ASUS TUF Gaming B450-PLUS",
        price: 15000,
        socket: "Socket AM4",
      },
      {
        name: "Gigabyte AORUS B550 Elite",
        price: 25000,
        socket: "Socket AM4",
      },
      {
        name: "Gigabyte Z490 AORUS Elite AC",
        price: 27000,
        socket: "LGA 1200",
      },
      {
        name: "MSI MAG B660M Mortar WiFi DDR4",
        price: 20000,
        socket: "LGA 1700",
      },
      {
        name: "ASRock Z590 Steel Legend",
        price: 28000,
        socket: "LGA 1200",
      },
      {
        name: "MSI MAG Z690 TOMAHAWK",
        price: 35000,
        socket: "LGA 1700",
      },
      {
        name: "ASUS ROG Z790 Hero",
        price: 50000,
        socket: "LGA 1700",
      },
      {
        name: "MSI MPG B550 Gaming Edge WiFi",
        price: 28000,
        socket: "Socket AM4",
      },
      {
        name: "ASUS ROG Crosshair X670E Hero",
        price: 50000,
        socket: "Socket AM5",
      },
    ],
  };
  
  export default componentsData;