//Product class definition
class Product {
    constructor(category, product, brand, price, description, image1, image2, image3, image4, image5) {
        this.category = category;
        this.product = product;
        this.brand = brand;
        this.price = price;
        this.description = description;
        this.image1 = image1;
        this.image2 = image2;
        this.image3 = image3;
        this.image4 = image4;
        this.image5 = image5;
    }
}

// Sample product data (Mock API response)
const products = [
    // new Product("Laptops", "ThinkPad P1 Gen 7", "Lenovo", "KES 309,136", "High-performance workstation laptop.",
    //     "img/thinkpad_p1_gen_7.avif", "img/thinkpad_p1_side.jpg", "img/thinkpad_p1_back.jpg", "img/thinkpad_p1_open.jpg", "img/thinkpad_p1_closed.jpg"),

    // new Product("Servers", "ThinkSystem ST45 V3 Server", "Lenovo", "KES 415,800", "Powerful and reliable server.",
    //     "img/lenovo_thinksystem_st45_v3.jpg", "img/server_angle1.jpg", "img/server_angle2.jpg", "img/server_angle3.jpg", "img/server_angle4.jpg"),

    // new Product("Gaming Laptops", "Legion Pro 7i Gen 9", "Lenovo", "KES 245,800", "High-performance gaming laptop.",
    //     "img/legion_pro_7i_gen_9.jpg", "img/legion_side.jpg", "img/legion_back.jpg", "img/legion_open.jpg", "img/legion_closed.jpg"),

    // new Product("Accessories", "Logitech Wireless Mouse M330", "Logitech", "KES 3,800", "Silent and smooth wireless mouse.",
    //     "img/logitec_wireless_mouse.jpg", "img/mouse_side.jpg", "img/mouse_top.jpg", "img/mouse_back.jpg", "img/mouse_box.jpg"),

    new Product("Computers", "HP Spectre x360 2-in-1 14Th Gen", "HP", "KES 190,000", "HP Spectre X360 2-in-1 Laptop Comes installed with Windows 11 which provides a calm and creative space where you can pursue your passions through a fresh experience. From a rejuvenated Start menu, to new ways to connect to your favorite people, news, games, and content—Windows 11 is the place to think, express, and create in a natural way.",
        "img/hp spectre x360 2-in-1 1.webp", "img/hp spectre x360 2-in-1 1.webp", "img/hp spectre x360 2-in-1 2.webp", "img/hp spectre x360 2-in-1 3.webp", "img/hp spectre x360 2-in-1 4.webp"),

    new Product("Computers", "HP Elitebook 840 G3 Core i5", "HP", "KES 20,000", "HP 840 G3 laptop also looks stunning with its thin and light structure. This HP EliteBook packs 256GB SSD and 8GB RAM for fast operations. Integrated with Intel Core i5-6300U processor, it makes sure your toughest of work tasks get done quickly without hitting roadblocks in the process. This HP EliteBook 840 G3 combines high-performance technology and long battery life with 6th Gen Intel Core processors. Drive performance with DDR4 memory, for your most demanding business applications and fast access to data.",
        "img/HP-EliteBook-840-G3-Intel-Core-i5-6th-Gen-8GB-A 1.jpg", "img/HP-EliteBook-840-G3-Intel-Core-i5-6th-Gen-8GB-A 1.jpg", "img/HP-EliteBook-840-G3-Intel-Core-i5-6th-Gen-8GB-2.jpg", "img/HP-EliteBook-840-G3-Intel-Core-i5-6th-Gen-8GB-3.jpg", "img/HP-EliteBook-840-G3-Intel-Core-i5-6th-Gen-8GB-A 1.jpg"),

    new Product("Computers", "HP Envy X360 2-in-1", "HP", "KES 103,000", "The HP ENVY x360 14-inch 2-in-1 Laptop PC 14-es1023dx is designed for productivity and entertainment. Featuring the latest Intel Core Ultra 7 processor, this versatile device allows you to seamlessly switch between laptop and tablet modes. The 14-inch Full HD IPS TouchScreen offers vibrant visuals and a responsive touch experience, making it perfect for both work and play.",
        "img/HP Envy x360 2-in-1 Laptop 16z-ad000 1.webp", "img/HP Envy x360 2-in-1 Laptop 16z-ad000 1.webp", "img/HP Envy x360 2-in-1 Laptop 16z-ad000 2.webp", "img/HP Envy x360 2-in-1 Laptop 16z-ad000 3.webp", "img/HP Envy x360 2-in-1 Laptop 16z-ad000 4.webp"),

    new Product("Tablets", "Lenovo Tab M11", "Lenovo", "KES 35,000", "The Lenovo Tab M11 with Pen & Folio Case (Grey) is the all-in-one bundle you need for entertainment, creativity, and everyday tasks. This sleek and powerful tablet delivers smooth performance, stunning visuals, and long battery life, making it a reliable companion for students, professionals, and families.",
        "img/Lenovo tab m11 1.webp", "img/Lenovo tab m11 1.webp", "img/Lenovo tab m11 2.webp", "img/Lenovo tab m11 3.webp", "img/Lenovo tab m11 4.webp"),

    new Product("Computers", "Lenovo Flex 5 Core i3 Touch", "Lenovo", "KES 72,000", "The Lenovo IdeaPad Flex 5 is a 2-in-1 convertible laptop designed to provide flexibility, performance, and convenience in one sleek package. Whether you're working, watching movies, or video conferencing, this laptop adapts to your needs with its versatile design and powerful features. Perfect for students, professionals, and home users, the IdeaPad Flex 5 combines a high-performance processor with a touchscreen display and a 360-degree hinge for maximum usability.",
        "img/Lenovo-Flex-5-core-i3 1.webp", "img/Lenovo-Flex-5-core-i3 1.webp", "img/Lenovo-Flex-5-core-i3 2.webp", "img/Lenovo-Flex-5-core-i3 3.webp", "img/Lenovo-Flex-5-core-i3 1.webp"),

    new Product("Computers", "Victus HP Gaming Laptop", "HP", "KES 145,000", "The HP Victus 15-FA1059DX i7 is a gaming laptop designed to balance powerful performance with accessibility. Targeted at gamers who demand high-quality gameplay and multitasking capabilities, this laptop delivers robust specs, a high-refresh-rate display, and cutting-edge connectivity, all wrapped in a sleek, portable design. Saruk praises this model for its competitive pricing and performance, making it a compelling option in the mid-range gaming laptop market. HP also highlights the Victus 15-FA1059DX's durability and the overall gaming experience it provides, focusing on its ability to handle modern titles with ease.",
        "img/victus hp gaming laptop 1.webp", "img/victus hp gaming laptop 1.webp", "img/victus hp gaming laptop 2.webp", "img/victus hp gaming laptop 3.webp", "img/victus hp gaming laptop 4.webp"),

    new Product("Computers", "Lenovo Ideapad Flex 5 i7", "Lenovo", "KES 45,000", "The Lenovo IdeaPad Flex 5 is a 2-in-1 convertible laptop designed to provide flexibility, performance, and convenience in one sleek package. Whether you're working, watching movies, or video conferencing, this laptop adapts to your needs with its versatile design and powerful features. Perfect for students, professionals, and home users, the IdeaPad Flex 5 combines a high-performance processor with a touchscreen display and a 360-degree hinge for maximum usability.",
        "img/lenovo ideapad flex 5 core i7 1.webp", "img/lenovo ideapad flex 5 core i7 1.webp", "img/lenovo ideapad flex 5 core i7 2.webp", "img/lenovo ideapad flex 5 core i7 3.webp", "img/lenovo ideapad flex 5 core i7 4.webp"),

    new Product("Computers", "HP 250 G10", "HP", "KES 70,000", "The HP Notebook 250 G10 is designed for business users looking for a reliable and efficient laptop. It features an Intel Core i7-1355U processor, 8GB of RAM, and a large 512GB SSD, providing ample storage space and smooth performance for multitasking. The 15.6-inch Full HD display ensures clear visuals for productivity tasks.",
        "img/HP 250 G10 1.webp", "img/HP 250 G10 1.webp", "img/HP 250 G10 2.webp", "img/HP 250 G10 3.webp", "img/HP 250 G10 5.webp"),

    new Product("Tablets", "Lenovo Tab P11", "Lenovo", "KES 52,000", "The Lenovo Tab P11 (2nd Gen) with Keyboard & Pen is the perfect bundle for those who demand both entertainment and productivity from their tablet. This powerful and versatile device seamlessly transitions from a captivating entertainment hub to a productive workhorse, making it ideal for students, professionals, and anyone who wants to do more on the go.",
        "img/lenovo-tab-p11-plus-bundle 2.webp", "img/lenovo-tab-p11-plus-bundle 2.webp", "img/lenovo-tab-p11-plus-bundle 3.webp", "img/lenovo-tab-p11-plus-bundle 4.webp", "img/lenovo-tab-p11-plus-bundle 5.webp"),

    new Product("Computers", "HP Dragonfly X360 i7", "HP", "KES 62,000", "The HP Elite Dragonfly is a beautifully designed, ultralight, 2 in 1 laptop that provides a stunning collaboration experience with AI-driven crystal-clear audio and a high definition display. Drive productivity with a powerful Intel® Core processor, a Wi-Fi 6 connection, strong security, and privacy features.",
        "img/dragonfly core i7 x360 1.webp", "img/dragonfly core i7 x360 1.webp", "img/dragonfly core i7 x360 2.webp", "img/dragonfly core i7 x360 3.webp", "img/dragonfly core i7 x360 4.webp"),

    new Product("Computers", "HP Elitebook 830 G6 i5", "HP", "KES 26,000", "The HP EliteBook 830 G6 with an Intel Core i5-8365U processor is a high-performance, business-class laptop designed for professionals who need reliability and efficiency. It features a 13.3-inch diagonal FHD IPS touchscreen display with a resolution of 1920 x 1080, offering clear and vibrant visuals. The laptop is equipped with 8 GB of DDR4-2400 SDRAM, providing smooth multitasking and responsive performance, and a 256 GB PCIe NVMe Value M.2 TLC SSD for fast storage and quick access to files. This model, available at Saruk, is a versatile and efficient choice for professionals who need reliable performance on the go.",
        "img/elitebook 830 g6 1.webp", "img/elitebook 830 g6 1.webp", "img/elitebook 830 g6 2.webp", "img/elitebook 830 g6 3.webp", "img/elitebook 830 g6 1.webp"),

    new Product("Computers", "HP Elitebook 830 G8 i7 11Th Gen", "HP", "KES 67,500", "The HP EliteBook 830 G8 with an Intel Core i5-8365U processor is a high-performance, business-class laptop designed for professionals who need reliability and efficiency. It features a 13.3-inch diagonal FHD IPS touchscreen display with a resolution of 1920 x 1080, offering clear and vibrant visuals. The laptop is equipped with 8 GB of DDR4-2400 SDRAM, providing smooth multitasking and responsive performance, and a 256 GB PCIe NVMe Value M.2 TLC SSD for fast storage and quick access to files. This model, available at Saruk, is a versatile and efficient choice for professionals who need reliable performance on the go.",
        "img/elitebook 830 g8 11 1.webp", "img/elitebook 830 g8 11 1.webp", "img/elitebook 830 g8 11 2.webp", "img/elitebook 830 g8 11 3.webp", "img/elitebook 830 g8 11 4.webp"),

    new Product("Computers", "HP Elitebook 1030 G3 X360 8Th Gen", "HP", "KES 43,000", "Express yourself in almost any light using the optional ultra-bright outdoor viewable display with anti-glare and ambient light sensors on the precision crafted Refurbished HP EliteBook x360 1030 G3 featuring four inspiring use modes with remarkable audio.",
        "img/HP-EliteBook-x360-1030-G3 1.jpg", "img/HP-EliteBook-x360-1030-G3 1.jpg", "img/HP-EliteBook-x360-1030-G3 1.jpg", "img/HP-EliteBook-x360-1030-G3 1.jpg", "img/HP-EliteBook-x360-1030-G3 1.jpg"),

    new Product("Computers", "HP Elitebook 840 G8 i7", "HP", "KES 53,000", "The HP EliteBook 840 G8 is built for how you work with a new AI-based audio experience. This easy-to-carry ultralight and thin business laptop comes with an 85-percent screen-to-body ratio and a quiet, comfortable keyboard to work on.",
        "img/elitebook 840 g8 1.jpg", "img/elitebook 840 g8 1.jpg", "img/elitebook 840 g8 2.jpg", "img/elitebook 840 g8 3.jpg", "img/elitebook 840 g8 1.jpg"),

    new Product("Computers", "HP Elitebook 1030 G8 11Th Gen i7", "HP", "KES 70,000", "HP EliteBook 1030 G7 x360 stands out as a premium 2-in-1 laptop designed for professionals seeking performance and flexibility. With its compact design and high-end specifications, it caters to users who require a powerful device for work and creativity.",
        "img/elitebook 840 g8 1.jpg", "img/elitebook 840 g8 1.jpg", "img/elitebook 840 g8 2.jpg", "img/elitebook 840 g8 3.jpg", "img/elitebook 840 g8 1.jpg"),

    new Product("Computers", "Dell 7280 i5 6Th Gen", "Dell", "KES 20,000", "Dell Latitude 7280 is equipped with an Intel Core i5-6200U processor, a mid-range dual-core CPU from Intel’s 6th generation. This processor offers decent performance for typical office tasks, web browsing, and light multitasking.",
        "img/dell 7280 core i5 6th 1.png", "img/dell 7280 core i5 6th 1.png", "img/dell 7280 core i5 6th 2.png", "img/dell 7280 core i5 6th 3.png", "img/dell 7280 core i5 6th 1.png"),

    // new Product("Computers", "Dell Optiplex 5260 A10 i5 8Th Gen", "Dell", "KES XX0,000", "",
    //     "img/dell 7280 core i5 6th 1.png", "img/dell 7280 core i5 6th 1.png", "dell 7280 core i5 6th 2.png", "img/dell 7280 core i5 6th 3.png", "img/dell 7280 core i5 6th 1.png"),

    // new Product("Computers", "HP Zbook Firefly 10Th Gen", "Dell", "KES XX0,000", "",
    //     "img/dell 7280 core i5 6th 1.png", "img/dell 7280 core i5 6th 1.png", "dell 7280 core i5 6th 2.png", "img/dell 7280 core i5 6th 3.png", "img/dell 7280 core i5 6th 1.png"),

    // new Product("Computers", "Product", "Brand", "KES XX0,000", "",
    //     "img/dell 7280 core i5 6th 1.png", "img/dell 7280 core i5 6th 1.png", "dell 7280 core i5 6th 2.png", "img/dell 7280 core i5 6th 3.png", "img/dell 7280 core i5 6th 1.png"),

    // new Product("Computers", "Product", "Brand", "KES XX0,000", "",
    //     "img/dell 7280 core i5 6th 1.png", "img/dell 7280 core i5 6th 1.png", "dell 7280 core i5 6th 2.png", "img/dell 7280 core i5 6th 3.png", "img/dell 7280 core i5 6th 1.png"),

    // new Product("Computers", "Dell Optiplex 7020 Plus i7", "Dell", "KES 100,000", "The Dell Optiplex 7020 Microtower is a high-performance desktop designed for demanding productivity tasks. Powered by the advanced Intel Core i7-14700 processor, this desktop delivers exceptional speed and efficiency, ideal for multitasking and running resource-intensive applications. The 8GB RAM ensures smooth operation for daily workflows, while the 512GB SSD provides lightning-fast boot times and rapid data access for improved productivity.Pre-installed with Free DOS, the Optiplex 7020 allows users the flexibility to install their preferred operating system, catering to their unique needs. Its microtower design offers expandability while saving space in your workspace. With an included keyboard and backed by a 1-year warranty, this desktop ensures convenience, reliability, and long-term support for professionals and businesses alike.",
    //     "img/desktop-optiplex-7020-mff-plus-black-gallery-1.webp", "img/desktop-optiplex-7020-mff-plus-black-gallery-1.webp", "img/desktop-optiplex-7020-mff-plus-black-gallery-2.webp", "desktop-optiplex-7020-mff-plus-black-gallery-3.webp", "desktop-optiplex-7020-mff-plus-black-gallery-4.webp"),
];

// Sample accessories data (Mock API response)
const accessories = [
    new Product("Accessories", "Logitech M185 Mouse", "Logitech", "KES 19,000", "Comfortable, compact, and easy to use, the Wireless Mouse M185 enables you to work anywhere.",
        "img/logitech m185 mouse 1.webp", "img/logitech m185 mouse 1.webp", "img/logitech m185 mouse 2.webp", "img/logitech m185 mouse 3.webp", "img/logitech m185 mouse 4.webp"),

    new Product("Accessories", "Dannio Electric Blower", "Dannio", "KES 6,500", "",
        "img/lenovo_thinksystem_st45_v3.jpg", "img/server_angle1.jpg", "img/server_angle2.jpg", "img/server_angle3.jpg", "img/server_angle4.jpg"),

    new Product("Accessories", "Walkie Talkie 888s double", "Baofeng", "KES 5,000", "Unleash the power of instant communication with the Baofeng BF-888S Walkie-Talkie. Engineered for reliability and performance, this compact device is your ultimate companion for staying connected on outdoor adventures, during emergencies, or in professional settings.",
        "img/baofeng walkie talkie 888s double 2.webp", "img/baofeng walkie talkie 888s double 1.webp", "img/baofeng walkie talkie 888s double 2.webp", "img/baofeng walkie talkie 888s double 1.webp", "img/baofeng walkie talkie 888s double 2.webp"),

    new Product("Accessories", "145 Piece Computer Repair Kit", "XSTEK", "KES 18,500", "145 pcs Pieces Computer Maintainance  Tool Kit is an all in one tool kit for all your electrical needs, it comes equipped with all tool to enable the user repair computers and other electrical.",
        "img/stek 145 piece rapair kit 2.webp", "img/stek 145 piece rapair kit 1.webp", "img/stek 145 piece rapair kit 2.webp", "img/stek 145 piece rapair kit 1.webp", "img/stek 145 piece rapair kit 2.webp"),

    new Product("Accessories", "Portable Monitors 15.6' ", "ARZOPA", "KES 39,500", "Arzopa A1 Portable Monitor 15.6'' FHD 1080P - Ultra-Slim Portable Laptop Monitor with Kickstand - IPS Display for PC, MAC, Phone, Xbox, PS5 - USB C & HDMI Connectivity.",
        "img/arzopa portable monitor 1.webp", "img/arzopa portable monitor 2.webp", "img/arzopa portable monitor 3.webp", "img/arzopa portable monitor 4.webp", "img/arzopa portable monitor 4.webp"),

    new Product("Accessories", "Starlink Mini", "Starlink", "KES 31,000", "Starlink Mini Kit provides satellite internet access in remote and underserved areas. It connects users to SpaceX’s low Earth orbit (LEO) satellites. The kit delivers fast speeds and low latency, offering a reliable solution for homes, businesses, and recreational vehicles.",
        "img/starlink mini 1.webp", "img/starlink mini 2.webp", "img/starlink mini 3.webp", "img/starlink mini 4.webp", "img/starlink mini 4.webp"),

    new Product("Accessories", "Starlink Gen 3 Kit ", "Starlink", "KES 50,000", "The Starlink Gen 3 WIFI router offers improved performance and range over the Gen 2 router. It features a WIFI 6 chipset for faster speeds and better performance in congested environments, as well as Tri-band radios for enhanced mesh performance. The router includes two ethernet ports, an LED indicator, a factory reset button, and comes with a Starlink cable, power cable, power supply, and water-resistant port covers.",
        "img/starlik-kit-gen-3.webp", "img/starlik-kit-gen-3.webp", "img/starlik-kit-gen-3.webp", "img/starlik-kit-gen-3.webp", "img/starlik-kit-gen-3.webp"),

    new Product("Accessories", "APC UPS 1200Va ", "APC", "KES 23,500", "The APC BACK-UPS 1200VA is designed to provide reliable power backup and protection for your electronic devices, ensuring they stay powered and protected during power outages or voltage fluctuations. APC BACK-UPS 1200VA AVR feature helps stabilize the voltage output, while the surge protection safeguards your devices against power surges.",
        "img/apc ups 1200kva 1.webp", "img/apc ups 1200kva 2.webp", "img/apc ups 1200kva 3.webp", "img/apc ups 1200kva 1.webp", "img/apc ups 1200kva 2.webp"),

    new Product("Accessories", "Atlas Paper Shredder AF 150 ", "Atlas", "KES 38,000", "The Atlas AF150 Paper Shredder is designed to provide reliable, high-performance shredding for both personal and professional use. With its advanced shredding capabilities, this device ensures that your sensitive documents are securely destroyed, safeguarding your information from unauthorized access.",
        "img/atlas paper shredder 1.webp", "img/atlas paper shredder 2.webp", "img/atlas paper shredder 3.webp", "img/atlas paper shredder 4.webp", "img/atlas paper shredder 1.webp"),

    new Product("Accessories", "Smart APC SM C1500IC", "APC", "KES 83,000", "Make sure your critical business operations remain uninterrupted with the APC Smart-UPS C 1500VA LCD 230V with SmartConnect (SMC1500IC), available exclusively at Almiria Limited in Nairobi, Kenya. Designed for demanding environments, this rackmount UPS offers unparalleled power protection, intelligent management, and exceptional efficiency, making it the ideal choice for servers, network devices, and essential electronics in small to medium-sized businesses.",
        "img/apc smart ups smc1500ic 1.webp", "img/apc smart ups smc1500ic 2.webp", "img/apc smart ups smc1500ic 3.webp", "img/apc smart ups smc1500ic 4.webp", "img/apc smart ups smc1500ic 1.webp"),

    new Product("Accessories", "Kesington Nano-locks", "Kesington", "KES 5,000", "The Kensington Slim Nano Saver Portable Laptop Combination Lock (K60627WW) is designed to provide robust security for your laptop and other devices while maintaining a compact and portable profile. This lock features a 4-digit combination mechanism, which is resettable to offer customizable security, and a durable steel cable with a length of 4.5 feet (1.4 meters), allowing for flexible attachment options.",
        "img/kesington nano lock 1.webp", "img/kesington nano lock 2.webp", "img/kesington nano lock 1.webp", "img/kesington nano lock 2.webp", "img/kesington nano lock 1.webp"),

    new Product("Accessories", "Canon Link 490", "Canon", "KES 2,500", "Get sharp text and improved durability with this 135 ml bottle of high-yield black pigment ink for your Canon PIXMA G-series printer. This cost-effective genuine Canon black ink refill lets you print up to 6000 A4 pages",
        "img/Canon Link 490 1.webp", "img/Canon Link 490 2.webp", "img/Canon Link 490 3.webp", "img/Canon Link 490 4.webp", "img/Canon Link 490 1.webp"),

    new Product("Accessories", "Logitech C270 HD Webcam", "Logitech", "KES 4,500", "The C270 HD Webcam gives you sharp, smooth conference calls in a widescreen format. Automatic light correction shows you in lifelike, natural colors.",
        "img/logitech c270 hd webcam 1.webp", "img/logitech c270 hd webcam 2.webp", "img/logitech c270 hd webcam 3.webp", "img/logitech c270 hd webcam 4.webp", "img/logitech c270 hd webcam 1.webp"),

    new Product("Accessories", "Lenovo G34W-30 Curved Monitor", "Lenovo", "KES 83,000", "Step up your game with the feature-loaded Lenovo G34w-30 WQHD Monitor. Its gentle 1500R curvature accommodates your natural field of view so you see things even at the edges without shifting your focus. The monitor’s 34-inch ultra-wide WQHD (3440 x 1440) screen has a 21:9 aspect ratio that gives you a winning edge through an expanded field of view and sharper, precise visual details. Let its 170Hz high overclock refresh rate help you keep pace with all the in-game movements.",
        "img/lenovo g34w-30 curverd monitor 1.webp", "img/lenovo g34w-30 curverd monitor 2.webp", "img/lenovo g34w-30 curverd monitor 3.webp", "img/lenovo g34w-30 curverd monitor 4.webp", "img/lenovo g34w-30 curverd monitor 1.webp"),

    new Product("Accessories", "Mecer 1Kva", "Mecer", "KES 17,500", "MECER 1KVA Line Interactive UPS) uninterruptible power supply ensures your PC stays safe and sound during times of power surges. Supporting a wide range of operating systems, a microprocessor that ensures you’ll never have to worry about is reliability and a built in surge protector, this UPS is both cost-efficient and an essential item for anyone needing to keep their electronics safe.",
        "img/mecer 1kva 1.webp", "img/mecer 1kva 2.webp", "img/mecer 1kva 3.webp", "img/mecer 1kva 1.webp", "img/mecer 1kva 2.webp"),

    new Product("Accessories", "Mecer 2Kva", "Mecer", "KES 25,500", "MECER 2KVA Line Interactive UPS uninterruptible power supply ensures your PC stays safe and sound during times of power surges. Supporting a wide range of operating systems, a microprocessor that ensures you’ll never have to worry about is reliability and a built in surge protector, this UPS is both cost-efficient and an essential item for anyone needing to keep their electronics safe.",
        "img/mecer 1kva 1.webp", "img/mecer 1kva 2.webp", "img/mecer 1kva 3.webp", "img/mecer 1kva 1.webp", "img/mecer 1kva 2.webp"),


    // new Product("Accessories", "Mecer 3Kva", "Mecer", "KES 36,500", "",
    //     "img/logitec_wireless_mouse.jpg", "img/mouse_side.jpg", "img/mouse_top.jpg", "img/mouse_back.jpg", "img/mouse_box.jpg"),

    // new Product("Accessories", "Mecer 3Kva", "Mecer", "KES 36,500", "",
    //     "img/logitec_wireless_mouse.jpg", "img/mouse_side.jpg", "img/mouse_top.jpg", "img/mouse_back.jpg", "img/mouse_box.jpg"),

    // new Product("Accessories", "Mecer 3Kva", "Mecer", "KES 36,500", "",
    //     "img/logitec_wireless_mouse.jpg", "img/mouse_side.jpg", "img/mouse_top.jpg", "img/mouse_back.jpg", "img/mouse_box.jpg"),

];

// Sample accessories data (Mock API response)
const catalogue = [
    // new Product("Computers", "HP Spectre x360 2-in-1 14Th Gen", "HP", "KES 190,000", "HP Spectre X360 2-in-1 Laptop Comes installed with Windows 11 which provides a calm and creative space where you can pursue your passions through a fresh experience. From a rejuvenated Start menu, to new ways to connect to your favorite people, news, games, and content—Windows 11 is the place to think, express, and create in a natural way.",
    //     "img/hp spectre x360 2-in-1 1.webp", "img/hp spectre x360 2-in-1 1.webp", "img/hp spectre x360 2-in-1 2.webp", "img/hp spectre x360 2-in-1 3.webp", "img/hp spectre x360 2-in-1 4.webp"),

    // new Product("Computers", "HP Elitebook 840 G3 Core i5", "HP", "KES 20,000", "HP 840 G3 laptop also looks stunning with its thin and light structure. This HP EliteBook packs 256GB SSD and 8GB RAM for fast operations. Integrated with Intel Core i5-6300U processor, it makes sure your toughest of work tasks get done quickly without hitting roadblocks in the process. This HP EliteBook 840 G3 combines high-performance technology and long battery life with 6th Gen Intel Core processors. Drive performance with DDR4 memory, for your most demanding business applications and fast access to data.",
    //     "img/HP-EliteBook-840-G3-Intel-Core-i5-6th-Gen-8GB-A 1.jpg", "img/HP-EliteBook-840-G3-Intel-Core-i5-6th-Gen-8GB-A 1.jpg", "img/HP-EliteBook-840-G3-Intel-Core-i5-6th-Gen-8GB-2.jpg", "img/HP-EliteBook-840-G3-Intel-Core-i5-6th-Gen-8GB-3.jpg", "img/HP-EliteBook-840-G3-Intel-Core-i5-6th-Gen-8GB-A 1.jpg"),

    // new Product("Computers", "HP Envy X360 2-in-1", "HP", "KES 103,000", "The HP ENVY x360 14-inch 2-in-1 Laptop PC 14-es1023dx is designed for productivity and entertainment. Featuring the latest Intel Core Ultra 7 processor, this versatile device allows you to seamlessly switch between laptop and tablet modes. The 14-inch Full HD IPS TouchScreen offers vibrant visuals and a responsive touch experience, making it perfect for both work and play.",
    //     "img/HP Envy x360 2-in-1 Laptop 16z-ad000 1.webp", "img/HP Envy x360 2-in-1 Laptop 16z-ad000 1.webp", "img/HP Envy x360 2-in-1 Laptop 16z-ad000 2.webp", "img/HP Envy x360 2-in-1 Laptop 16z-ad000 3.webp", "img/HP Envy x360 2-in-1 Laptop 16z-ad000 4.webp"),

    // new Product("Tablets", "Lenovo Tab M11", "Lenovo", "KES 35,000", "The Lenovo Tab M11 with Pen & Folio Case (Grey) is the all-in-one bundle you need for entertainment, creativity, and everyday tasks. This sleek and powerful tablet delivers smooth performance, stunning visuals, and long battery life, making it a reliable companion for students, professionals, and families.",
    //     "img/Lenovo tab m11 1.webp", "img/Lenovo tab m11 1.webp", "img/Lenovo tab m11 2.webp", "img/Lenovo tab m11 3.webp", "img/Lenovo tab m11 4.webp"),

    new Product("Computers", "Lenovo Flex 5 Core i3 Touch", "Lenovo", "KES 72,000", "The Lenovo IdeaPad Flex 5 is a 2-in-1 convertible laptop designed to provide flexibility, performance, and convenience in one sleek package. Whether you're working, watching movies, or video conferencing, this laptop adapts to your needs with its versatile design and powerful features. Perfect for students, professionals, and home users, the IdeaPad Flex 5 combines a high-performance processor with a touchscreen display and a 360-degree hinge for maximum usability.",
        "img/Lenovo-Flex-5-core-i3 1.webp", "img/Lenovo-Flex-5-core-i3 1.webp", "img/Lenovo-Flex-5-core-i3 2.webp", "img/Lenovo-Flex-5-core-i3 3.webp", "img/Lenovo-Flex-5-core-i3 1.webp"),

    new Product("Computers", "Victus HP Gaming Laptop", "HP", "KES 145,000", "The HP Victus 15-FA1059DX i7 is a gaming laptop designed to balance powerful performance with accessibility. Targeted at gamers who demand high-quality gameplay and multitasking capabilities, this laptop delivers robust specs, a high-refresh-rate display, and cutting-edge connectivity, all wrapped in a sleek, portable design. Saruk praises this model for its competitive pricing and performance, making it a compelling option in the mid-range gaming laptop market. HP also highlights the Victus 15-FA1059DX's durability and the overall gaming experience it provides, focusing on its ability to handle modern titles with ease.",
        "img/victus hp gaming laptop 1.webp", "img/victus hp gaming laptop 1.webp", "img/victus hp gaming laptop 2.webp", "img/victus hp gaming laptop 3.webp", "img/victus hp gaming laptop 4.webp"),

    new Product("Computers", "Lenovo Ideapad Flex 5 i7", "Lenovo", "KES 45,000", "The Lenovo IdeaPad Flex 5 is a 2-in-1 convertible laptop designed to provide flexibility, performance, and convenience in one sleek package. Whether you're working, watching movies, or video conferencing, this laptop adapts to your needs with its versatile design and powerful features. Perfect for students, professionals, and home users, the IdeaPad Flex 5 combines a high-performance processor with a touchscreen display and a 360-degree hinge for maximum usability.",
        "img/lenovo ideapad flex 5 core i7 1.webp", "img/lenovo ideapad flex 5 core i7 1.webp", "img/lenovo ideapad flex 5 core i7 2.webp", "img/lenovo ideapad flex 5 core i7 3.webp", "img/lenovo ideapad flex 5 core i7 4.webp"),

    new Product("Computers", "HP 250 G10", "HP", "KES 70,000", "The HP Notebook 250 G10 is designed for business users looking for a reliable and efficient laptop. It features an Intel Core i7-1355U processor, 8GB of RAM, and a large 512GB SSD, providing ample storage space and smooth performance for multitasking. The 15.6-inch Full HD display ensures clear visuals for productivity tasks.",
        "img/HP 250 G10 1.webp", "img/HP 250 G10 1.webp", "img/HP 250 G10 2.webp", "img/HP 250 G10 3.webp", "img/HP 250 G10 5.webp"),

    new Product("Tablets", "Lenovo Tab P11", "Lenovo", "KES 52,000", "The Lenovo Tab P11 (2nd Gen) with Keyboard & Pen is the perfect bundle for those who demand both entertainment and productivity from their tablet. This powerful and versatile device seamlessly transitions from a captivating entertainment hub to a productive workhorse, making it ideal for students, professionals, and anyone who wants to do more on the go.",
        "img/lenovo-tab-p11-plus-bundle 2.webp", "img/lenovo-tab-p11-plus-bundle 2.webp", "img/lenovo-tab-p11-plus-bundle 3.webp", "img/lenovo-tab-p11-plus-bundle 4.webp", "img/lenovo-tab-p11-plus-bundle 5.webp"),

    new Product("Computers", "HP Dragonfly X360 i7", "HP", "KES 62,000", "The HP Elite Dragonfly is a beautifully designed, ultralight, 2 in 1 laptop that provides a stunning collaboration experience with AI-driven crystal-clear audio and a high definition display. Drive productivity with a powerful Intel® Core processor, a Wi-Fi 6 connection, strong security, and privacy features.",
        "img/dragonfly core i7 x360 1.webp", "img/dragonfly core i7 x360 1.webp", "img/dragonfly core i7 x360 2.webp", "img/dragonfly core i7 x360 3.webp", "img/dragonfly core i7 x360 4.webp"),

    new Product("Computers", "HP Elitebook 830 G6 i5", "HP", "KES 26,000", "The HP EliteBook 830 G6 with an Intel Core i5-8365U processor is a high-performance, business-class laptop designed for professionals who need reliability and efficiency. It features a 13.3-inch diagonal FHD IPS touchscreen display with a resolution of 1920 x 1080, offering clear and vibrant visuals. The laptop is equipped with 8 GB of DDR4-2400 SDRAM, providing smooth multitasking and responsive performance, and a 256 GB PCIe NVMe Value M.2 TLC SSD for fast storage and quick access to files. This model, available at Saruk, is a versatile and efficient choice for professionals who need reliable performance on the go.",
        "img/elitebook 830 g6 1.webp", "img/elitebook 830 g6 1.webp", "img/elitebook 830 g6 2.webp", "img/elitebook 830 g6 3.webp", "img/elitebook 830 g6 1.webp"),

    new Product("Computers", "HP Elitebook 830 G8 i7 11Th Gen", "HP", "KES 67,500", "The HP EliteBook 830 G8 with an Intel Core i5-8365U processor is a high-performance, business-class laptop designed for professionals who need reliability and efficiency. It features a 13.3-inch diagonal FHD IPS touchscreen display with a resolution of 1920 x 1080, offering clear and vibrant visuals. The laptop is equipped with 8 GB of DDR4-2400 SDRAM, providing smooth multitasking and responsive performance, and a 256 GB PCIe NVMe Value M.2 TLC SSD for fast storage and quick access to files. This model, available at Saruk, is a versatile and efficient choice for professionals who need reliable performance on the go.",
        "img/elitebook 830 g8 11 1.webp", "img/elitebook 830 g8 11 1.webp", "img/elitebook 830 g8 11 2.webp", "img/elitebook 830 g8 11 3.webp", "img/elitebook 830 g8 11 4.webp"),

    new Product("Computers", "HP Elitebook 1030 G3 X360 8Th Gen", "HP", "KES 43,000", "Express yourself in almost any light using the optional ultra-bright outdoor viewable display with anti-glare and ambient light sensors on the precision crafted Refurbished HP EliteBook x360 1030 G3 featuring four inspiring use modes with remarkable audio.",
        "img/HP-EliteBook-x360-1030-G3 1.jpg", "img/elitebook 1030 g3 i7 1.webp", "img/elitebook 1030 g3 i7 2.webp", "img/elitebook 1030 g3 i7 3.webp", "img/elitebook 1030 g3 i7 4.webp"),

    new Product("Computers", "HP Elitebook 840 G8 i7", "HP", "KES XX,000", "",
        "img/elitebook 840 g8 1.jpg", "img/elitebook 840 g8 1.jpg", "img/elitebook 840 g8 2.jpg", "img/elitebook 840 g8 3.jpg", "img/elitebook 840 g8 1.jpg"),

    new Product("Computers", "HP Elitebook 1030 G8 11Th Gen i7", "HP", "KES XX0,000", "",
        "img/elitebook 840 g8 1.jpg", "img/elitebook 840 g8 1.jpg", "img/elitebook 840 g8 2.jpg", "img/elitebook 840 g8 3.jpg", "img/elitebook 840 g8 1.jpg"),
    
        new Product("Printers", "Epson M3170 Monochrome", "Epson", "KES 50,000", "",
        "img/elitebook 840 g8 1.jpg", "img/elitebook 840 g8 1.jpg", "img/elitebook 840 g8 2.jpg", "img/elitebook 840 g8 3.jpg", "img/elitebook 840 g8 1.jpg"),

];

// Function to display products in the pro-container
function displayProducts() {
    const container = document.getElementById("pro-container");

    if (!container) {
        console.error("pro-container not found!");
        return;
    }

    container.innerHTML = ""; // Clear existing products

    products.forEach((product, index) => {
        // Create a product div
        const productDiv = document.createElement("div");
        productDiv.classList.add("pro");
        productDiv.setAttribute("onclick", `goToProductDetails(${index})`); // Click event

        // Set inner HTML
        productDiv.innerHTML = `
            <img src="${product.image1}" alt="${product.product}">
            <div class="des">
                <span>${product.brand}</span>
                <h5>${product.product}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>${product.price}</h4>
            </div>
        `;

        container.appendChild(productDiv); // Add to container
    });
}
// Function to display accessories in the accessorise
function displayAccessories() {
    const container = document.getElementById("accessorise");

    if (!container) {
        console.error("pro-container not found!");
        return;
    }

    container.innerHTML = ""; // Clear existing products

    accessories.forEach((product, index) => {
        // Create a product div
        const productDiv = document.createElement("div");
        productDiv.classList.add("pro");
        productDiv.setAttribute("onclick", `goToAccessoryDetails(${index})`); // Click event

        // Set inner HTML
        productDiv.innerHTML = `
            <img src="${product.image1}" alt="${product.product}">
            <div class="des">
                <span>${product.brand}</span>
                <h5>${product.product}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>${product.price}</h4>
            </div>
        `;

        container.appendChild(productDiv); // Add to container
    });
}

// Function to display all products in the catalogue
function displayCatalogue() {
    const container = document.getElementById("catalogue");

    if (!container) {
        console.error("pro-container not found!");
        return;
    }

    container.innerHTML = ""; // Clear existing products

    catalogue.forEach((product, index) => {
        // Create a product div
        const productDiv = document.createElement("div");
        productDiv.classList.add("pro");
        productDiv.setAttribute("onclick", `goToProductDetails(${index})`); // Click event

        // Set inner HTML
        productDiv.innerHTML = `
            <img src="${product.image1}" alt="${product.product}">
            <div class="des">
                <span>${product.brand}</span>
                <h5>${product.product}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>${product.price}</h4>
            </div>
        `;

        container.appendChild(productDiv); // Add to container
    });
}

// Function to navigate to product details page
function goToProductDetails(index) {
    const selectedProduct = products[index];
    localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct)); // Store product data
    window.location.href = "product.html"; // Navigate to details page
}
// Function to navigate to product details page
function goToAccessoryDetails(index) {
    const selectedProduct = accessories[index];
    localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct)); // Store product data
    window.location.href = "product.html"; // Navigate to details page
}

// Ensure products load after the DOM is ready
document.addEventListener("DOMContentLoaded", displayProducts);

// Ensure accessories load after the DOM is ready
document.addEventListener("DOMContentLoaded", displayAccessories);


// Ensure catalogue load after the DOM is ready
document.addEventListener("DOMContentLoaded", displayCatalogue);

// Ensure catalogue load after the DOM is ready
document.addEventListener("DOMContentLoaded", fetchProductDetails);


function fetchProductDetails() {

    // Retrieve product data
    const product = JSON.parse(localStorage.getItem("selectedProduct"));

    const container = document.getElementById("prodetails").innerHTML = `
   <div class="single-pro-img">
            <img src="${product.image1}" id="main-image" alt="">
            <div class="small-img-group">
                <div class="small-img-col">
                    <img src="${product.image1}" class="small-img" alt="">
                </div>
                <div class="small-img-col">
                    <img src="${product.image2}" class="small-img" alt="">
                </div>
                <div class="small-img-col">
                    <img src="${product.image3}" class="small-img"  alt="">
                </div>
                <div class="small-img-col">
                    <img src="${product.image4}" class="small-img" alt="">
                </div>
            </div>
        </div>

        <div class="single-pro-details" id="single-pro-details">
            <h6>SHOP/ ${product.category}</h6>
            <h4>${product.product}</h4>
            <h2>${product.price}</h2>
            <h4>Product Details</h4>
            <span>${product.description}</span>
        </div>
`;
}


// document.addEventListener("DOMContentLoaded", function () {
//     // Retrieve product details from local storage
//     const product = JSON.parse(localStorage.getItem("selectedProduct"));

//     // Check if product exists in local storage
//     if (product) {
//         // Update main product image
//         document.getElementById("main-image").src = product.image1;
//         document.getElementById("image-1").src = product.image1;
//         document.getElementById("image-2").src = product.image2;
//         document.getElementById("image-3").src = product.image3;
//         document.getElementById("image-4").src = product.image4;



//         // Update small images
//         const smallImages = document.querySelectorAll(".small-img");
//         smallImages[0].src = product.image1;
//         smallImages[1].src = product.image2;
//         smallImages[2].src = product.image3;
//         smallImages[3].src = product.image4;

//         // Update product details
//         // document.querySelector(".single-pro-details h6").textContent = `SHOP/ ${product.category.toUpperCase()}`;
//         // document.querySelector(".single-pro-details h4").textContent = product.product;
//         // document.querySelector(".single-pro-details h2").textContent = `KES ${product.price}`;
//         // document.querySelector(".single-pro-details span").textContent = product.description;

//         document.getElementById("category").textContent = `SHOP/ ${product.category.toUpperCase()}`;
//         document.getElementById("product").textContent = `${product.product}`;
//         document.getElementById("price").textContent = `${product.price}`;
//         document.getElementById("desc").textContent = `${product.description}`;
//     } else {
//         console.error("No product found in local storage!");
//     }
// });



console.log(localStorage.getItem("selectedProduct"));

