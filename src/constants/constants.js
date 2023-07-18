const large = [
    {
      brand: "Mercedes-Benz S-Class",
      price: 300,
      imgUrl: "https://media.ed.edmunds-media.com/mercedes-benz/s-class/2023/oem/2023_mercedes-benz_s-class_sedan_s-580e-4matic_fq_oem_1_1280.jpg"
    },
    {
      brand: "BMW 7 Series",
      price: 280,
      imgUrl: "https://www.motortrend.com/uploads/sites/5/2019/04/2020-BMW-7-Series.jpg"
    },
    {
      brand: "Audi A8",
      price: 260,
      imgUrl: "https://static.wixstatic.com/media/8e5854_53ff7bc32e08447eb829ab1b32db48d7~mv2_d_2560_1600_s_2.jpg/v1/fill/w_640,h_430,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8e5854_53ff7bc32e08447eb829ab1b32db48d7~mv2_d_2560_1600_s_2.jpg"
    },
    {
      brand: "Lexus LS",
      price: 250,
      imgUrl: "https://hips.hearstapps.com/hmg-prod/images/2023-lexus-ls-101-1670276038.jpg?crop=0.612xw:0.459xh;0.0881xw,0.425xh&resize=1200:*"
    },
    {
      brand: "Cadillac CT6",
      price: 240,
      imgUrl: "https://cdn.carbuzz.com/gallery-images/840x560/737000/100/737140.jpg"
    },
    {
      brand: "Jaguar XJ",
      price: 230,
      imgUrl: "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2015/12/2016-Jaguar-XJ-101.jpg?crop=0.480xw:0.588xh;0.225xw,0.412xh&resize=640:*"
    },
    {
      brand: "Volvo S90",
      price: 220,
      imgUrl: "https://i.gaw.to/content/photos/55/39/553927-volvo-s90-recharge-2023-limousine-suedoise.jpeg"
    },
    {
      brand: "Lincoln Continental",
      price: 210,
      imgUrl: "https://www.autotrader.com/wp-content/uploads/2020/02/2020-Lincoln-Continental-.1..jpg"
    }
  ];
 
  const small = [
    {
      brand: "Toyota Corolla",
      price: 120,
      imgUrl: "https://media.ed.edmunds-media.com/toyota/corolla/2023/oem/2023_toyota_corolla_sedan_xse_fq_oem_1_1600.jpg"
    },
    {
      brand: "Honda Civic",
      price: 110,
      imgUrl: "https://www.cnet.com/a/img/resize/5ca0202a0dbf516b48a775dae4a940d7d6631f07/hub/2022/10/25/d7877a73-eae0-4ede-8d28-0bcab16a5620/2023-honda-civic-type-r-promo.jpg?auto=webp&width=1920"
    },
    {
      brand: "Volkswagen Golf",
      price: 100,
      imgUrl: "https://media.ed.edmunds-media.com/volkswagen/golf-r/2023/oem/2023_volkswagen_golf-r_4dr-hatchback_20th-anniversary-edition_fq_oem_1_1600.jpg"
    },
    {
      brand: "Ford Focus",
      price: 90,
      imgUrl: "https://www.completecar.ie/img/galleries/10235/2020_ford_focus_st_12.jpg"
    },
    {
      brand: "Chevrolet Cruze",
      price: 80,
      imgUrl: "https://img.motoryracing.com/noticias/portada/30000/30513-n.jpg"
    },
    {
      brand: "Hyundai Elantra",
      price: 75,
      imgUrl: "https://cdn.wheel-size.com/thumbs/90/3b/903b53fbe37264831b445186c011ffc6.jpg"
    },
    {
      brand: "Kia Forte",
      price: 70,
      imgUrl: "https://www.kbb.com/wp-content/uploads/2022/08/2023-kia-forte-front-3qtr.jpg"
    },
    {
      brand: "Mazda3",
      price: 65,
      imgUrl: "https://www.mazdausa.com/siteassets/vehicles/2023/mazda3-sedan/build-and-price/trims/ext.-360s/2.5/black/e360-my22-mazda3-sedan-fwd-2-5s-jetblackmica-000.jpg"
    }
  ];

  const exclusive = [
    {
      brand: "Ferrari 488",
      price: 1500,
      imgUrl: "https://images.carexpert.com.au/crop/800/500/vehicles/source-g/8/b/8b4fd1b7.jpg"
    },
    {
      brand: "Lamborghini Aventador",
      price: 2000,
      imgUrl: "https://www.tuningblog.eu/wp-content/uploads/2023/05/Strasse-Wheels-Carbon-Felgen-Lamborghini-Aventador-SVJ-2.jpg"
    },
    {
      brand: "Bugatti Chiron",
      price: 5000,
      imgUrl: "https://www.thedrive.com/uploads/2022/09/07/2022-Bugatti-Chiron-Super-Sport_BI_8.jpg?auto=webp&crop=16%3A9&auto=webp&optimize=high&quality=70&width=1440"
    },
    {
      brand: "Rolls-Royce Phantom",
      price: 3000,
      imgUrl: "https://m.atcdn.co.uk/vms/media/%7Bresize%7D/d945eb9d576348c3824d48dc5fc9abd7.jpg"
    },
    {
      brand: "Bentley Continental GT",
      price: 2500,
      imgUrl: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Bentley/Continental/7771/1676965640042/front-left-side-47.jpg"
    },
    {
      brand: "Aston Martin DB11",
      price: 1800,
      imgUrl: "https://www.topgear.com/sites/default/files/cars-car/image/2019/07/aston_martin_db11_amr_china_grey_23945.jpg"
    },
    {
      brand: "Porsche 911 Turbo S",
      price: 1600,
      imgUrl: "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMHIspMtwZaiEt5yPew9uRCvNzxvYIGXoq1srOJUPYwgzTBsN5xsy2dEhev5HFhLHnd7pQXqZYoOaD8JiXvBC5"
    },
    {
      brand: "McLaren 720S",
      price: 1700,
      imgUrl: "https://www.clinkardcars.co.uk/blobs/Images/Stock/257/a07f13a4-bbe7-41c8-ad8e-367c0e5dee03.JPG?width=2000&height=1333"
    }
  ];

  const popular = [
    {
      brand: "Toyota Camry",
      price: 150,
      imgUrl: "https://d2ivfcfbdvj3sm.cloudfront.net/7fc965ab77efe6e0fa62e4ca1ea7673bb65b4454021e3d8e88cb10/stills_0640_png/MY2023/51559/51559_st0640_116.png"
    },
    {
      brand: "Honda Accord",
      price: 140,
      imgUrl: "https://acnews.blob.core.windows.net/imgnews/medium/NAZ_82bcc7fe2a3442b7896b64eac194af83.jpg"
    },
    {
      brand: "Nissan Altima",
      price: 130,
      imgUrl: "https://www.autotrader.com/wp-content/uploads/2020/10/2021-nissan-altima-front-3qtr.jpg"
    },
    {
      brand: "Ford Mustang",
      price: 180,
      imgUrl: "https://www.mustangspecs.com/wp-content/uploads/2020/06/1969-Ford-Mustang-GT.jpg"
    },
    {
      brand: "Chevrolet Camaro",
      price: 170,
      imgUrl: "https://bringatrailer.com/wp-content/uploads/2021/05/1970_chevrolet_camaro_16237733312edfc1b2cabC9D09045-00B7-485E-837C-694CD561E7AF.jpeg?fit=940%2C626"
    },
    {
      brand: "Hyundai Sonata",
      price: 120,
      imgUrl: "https://i.gaw.to/vehicles/photos/40/33/403308-2023-hyundai-sonata.jpg"
    },
    {
      brand: "Kia Optima",
      price: 110,
      imgUrl: "https://i.gaw.to/content/photos/35/64/356406_2018_Kia_Optima.jpg?1024x640"
    },
    {
      brand: "Mazda6",
      price: 100,
      imgUrl: "https://www.automotiveaddicts.com/wp-content/uploads/2021/05/2021-mazda6-signature.jpg"
    }
  ];

const comments =  [
    {
      "comment": "Great service! The car was in excellent condition and the staff was friendly and helpful.",
      "imgUrl": "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmV0cmF0b3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      "rating": 5,
      "fullName": "John Smith",
      "location": "Los Angeles, CA"
    },
    {
      "comment": "I had an amazing experience with this rent-a-car company. The car was clean and comfortable, and the pickup and drop-off process was smooth.",
      "imgUrl": "https://images.unsplash.com/photo-1687360440101-739008e55576?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8cmV0cmF0b3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      "rating": 4.5,
      "fullName": "Sarah Johnson",
      "location": "New York City, NY"
    },
    {
      "comment": "Highly recommended! The rental process was quick and hassle-free. The car performed well, and the customer service was top-notch.",
      "imgUrl": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmV0cmF0b3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      "rating": 5,
      "fullName": "Michael Thompson",
      "location": "Chicago, IL"
    },
    {
      "comment": "I rented a car for a weekend trip, and I'm extremely satisfied. The vehicle was spacious and clean. Will definitely use this car service again.",
      "imgUrl": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmV0cmF0b3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      "rating": 4,
      "fullName": "Emily Davis",
      "location": "San Francisco, CA"
    },
    {
      "comment": "Fantastic experience! The car exceeded my expectations, and the staff went above and beyond to ensure a smooth rental process.",
      "imgUrl": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmV0cmF0b3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      "rating": 5,
      "fullName": "David Anderson",
      "location": "Miami, FL"
    },
    {
      "comment": "I had a great time renting a car from this company. The vehicle was clean, comfortable, and fuel-efficient. The rates were reasonable too.",
      "imgUrl": "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmV0cmF0b3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      "rating": 4.5,
      "fullName": "Jennifer Wilson",
      "location": "Seattle, WA"
    },
    {
      "comment": "Exceptional service! The car was in perfect condition, and the entire rental process was seamless. I'll definitely be a repeat customer.",
      "imgUrl": "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJldHJhdG98ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
      "rating": 5,
      "fullName": "Robert Thompson",
      "location": "Houston, TX"
    },
    {
      "comment": "I had a wonderful experience with this rent-a-car service. The car was clean, comfortable, and well-maintained. The staff was friendly and professional.",
      "imgUrl": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmV0cmF0b3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      "rating": 4,
      "fullName": "Jessica Brown",
      "location": "Boston, MA"
    },
    {
      "comment": "Great value for money! The car I rented was reliable and helped me navigate the city with ease. Highly recommend this rent-a-car company.",
      "imgUrl": "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldHJhdG98ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
      "rating": 4.5,
      "fullName": "Matthew Davis",
      "location": "Atlanta, GA"
    },
    {
      "comment": "Outstanding service! The car was clean, comfortable, and equipped with all the necessary features. The staff was friendly and accommodating.",
      "imgUrl": "https://plus.unsplash.com/premium_photo-1668896123808-cd4f065911fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0cmF0b3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      "rating": 5,
      "fullName": "Olivia Johnson",
      "location": "Denver, CO"
    },
    {
      "comment": "I had a great experience renting a car from this company. The vehicle was in excellent condition, and the customer service was exceptional.",
      "imgUrl": "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJldHJhdG98ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
      "rating": 4,
      "fullName": "Daniel Wilson",
      "location": "Phoenix, AZ"
    },
    {
      "comment": "Wonderful service! The car was clean, comfortable, and reliable. The staff was courteous and made the entire rental process hassle-free.",
      "imgUrl": "https://images.unsplash.com/photo-1687360441063-27492a092519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8cmV0cmF0b3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      "rating": 4.5,
      "fullName": "Sophia Garcia",
      "location": "Dallas, TX"
    }
  ]
  

export {small, large, exclusive, popular, comments}