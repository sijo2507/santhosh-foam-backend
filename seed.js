const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("MongoDB connected"))
 .catch((err)=>{console.log(err)});

const products = [
    {
        name: "Back Magic Orthopedic Coir Mattress",
        description: "Experience superior comfort with doctor-recommended, firm mattress featuring naturally cooling coir, signature quilted fabric, and durability backed by a 7-year warranty—Best choice for restful nights. Available in white and blue colors.",
        image: "https://www.duroflexworld.com/cdn/shop/files/1_7.jpg?v=1749639390&width=990",
        sizes: [
            {
                size: "Single",
                subsizes: [
                    {dimension: '72x36x6"', price: 14292},
                    {dimension: '75x36x6"', price: 14887}
                ]
            },
            {
                size: "Double",
                subsizes: [
                    {dimension: '72x48x6"', price: 19055},
                    {dimension: '75x48x6"', price: 19849}
                ]
            },
            {
                size: "Queen",
                subsizes: [
                    {dimension: '72x60x6"', price: 23819},
                    {dimension: '75x60x6"', price: 24811},
                    {dimension: '78x60x6"', price: 25803}
                ]
            },
            {
                size: "King",
                subsizes: [
                    {dimension: '75x72x6"', price: 29773},
                    {dimension: '78x72x6"', price: 30965}
                ]
            }
        ],
        category: "Mattress",
        brand: "Duroflex"
    },
    {
        name: "Durobond Pro Dual Side Coir Mattress",
        description: "Enjoy dual side usage and lasting firmness with our naturally cooling coir mattress, engineered for superior back support. Features anti-piling, anti-sagging fabric for a refreshing, long-lasting sleep experience—ideal for those seeking durable comfort and enhanced support.",
        image: "https://www.duroflexworld.com/cdn/shop/files/1_43e8cc02-6b06-43a1-aacd-112bf7df0b7f.png?v=1749639374&width=990",
        sizes: [
            {
                size: "Single",
                subsizes: [
                    {dimension: '72x36x5"', price: 7862},
                    {dimension: '72x36x6"', price: 9505},
                    {dimension: '75x36x5"', price: 9827},
                    {dimension: '75x36x6"', price: 11880}
                ]
            },
            {
                size: "Double",
                subsizes: [
                    {dimension: '72x48x5"', price: 12579},
                    {dimension: '72x48x6"', price: 15207},
                    {dimension: '75x48x5"', price: 13103},
                    {dimension: '75x48x6"', price: 15840}
                ]
            },
            {
                size: "Queen",
                subsizes: [
                    {dimension: '72x60x5"', price: 15724},
                    {dimension: '72x60x6"', price: 19008},
                    {dimension: '75x60x5"', price: 16379},
                    {dimension: '75x60x6"', price: 19800},
                    {dimension: '78x60x5"', price: 17034},
                    {dimension: '78x60x6"', price: 20592}
                ]
            },
            {
                size: "King",
                subsizes: [
                    {dimension: '75x72x5"', price: 19655},
                    {dimension: '75x72x6"', price: 23760},
                    {dimension: '78x72x5"', price: 20441},
                    {dimension: '78x72x6"', price: 24710}
                ]
            }
        ],
        category: "Mattress",
        brand: "Duroflex"
    },
    {
        name: "Strength Memory Foam Coir Orthopedic Mattress",
        description: "Discover doctor-recommended comfort with 5 zone orthopedic support and naturally cooling coir that refreshes every night. Our signature quilted fabric ensures true coziness, while durability is backed by a 7-year warranty—perfect for lasting support and restful sleep.",
        image: "https://www.duroflexworld.com/cdn/shop/files/1_e2b015b1-5d1a-4e42-986a-d7a482d19130.png?v=1755864195&width=990",
        sizes: [
            {
                size: "Single",
                subsizes: [
                    {dimension: '72x36x7"', price: 19031},
                    {dimension: '75x36x7"', price: 20272},
                ]
            },
            {
                size: "Double",
                subsizes: [
                    {dimension: '72x48x7"', price: 25948},
                    {dimension: '75x48x7"', price: 27030},
                ]
            },
            {
                size: "Queen",
                subsizes: [
                    {dimension: '72x60x7"', price: 32436},
                    {dimension: '75x60x7"', price: 33786},
                    {dimension: '78x60x7"', price: 35138},                
                ]
            },
            {
                size: "King",
                subsizes: [
                    {dimension: '75x72x7"', price: 40544},
                    {dimension: '78x72x7"', price: 42166},                
                ]
            }
        ],
        category: "Mattress",
        brand: "Duroflex"
    },
    {
        name: "Balance Plus Orthopedic Memory Foam Mattress With Euro Top",
        description: "Experience doctor-recommended comfort with 5 zone orthopedic support and plush Euro top design. Memory foam cradles your body, releasing pressure points for restful sleep. Cozy up with our signature quilted fabric, all backed by a durable 10-year warranty for lasting reliability and support",
        image: "https://www.duroflexworld.com/cdn/shop/files/1_28ee3962-7616-452a-a411-581fcd7e2484.png?v=1749639380&width=990",
        sizes: [
            {
                size: "Single",
                subsizes: [
                    {dimension: '72x36x6"+2"', price: 24519},
                    {dimension: '75x36x6"+2"', price: 25540}
                ]
            },
            {
                size: "Double",
                subsizes: [
                    {dimension: '72x48x6"+2"', price: 32691},
                    {dimension: '75x48x6"+2"', price: 34054}
                ]
            },
            {
                size: "Queen",
                subsizes: [
                    {dimension: '72x60x6"+2"', price: 40863},
                    {dimension: '75x60x6"+2"', price: 42567},
                    {dimension: '78x60x6"+2"', price: 44271}
                ]
            },
            {
                size: "King",
                subsizes: [
                    {dimension: '75x72x6"+2"', price: 51081},
                    {dimension: '78x72x6"+2"', price: 53124}
                ]
            }
        ],
        category: "Mattress",
        brand: "Duroflex"
    },
    {
        name: "Propel Pocket Spring Mattress",
        description: "Enjoy plush comfort and advanced support with our 3 zone copper-infused NRG layer, designed for zero motion transfer and undisturbed sleep. Experience anti-stress fabric that shields from electromagnetic rays, plus eco-friendly construction with 40% recycled yarns. Durability is backed by a 10-year warranty for lasting luxury and wellness.",
        image: "https://www.duroflexworld.com/cdn/shop/files/1new.jpg?v=1749639368&width=990",
        sizes: [
            {
                size: "Single",
                subsizes: [
                    {dimension: '72x36x7"', price: 13244},
                    {dimension: '75x36x7"', price: 13796}
                ]
            },
            {
                size: "Double",
                subsizes: [
                    {dimension: '72x48x7"', price: 17658},
                    {dimension: '75x48x7"', price: 18394}
                ]
            },
            {
                size: "Queen",
                subsizes: [
                    {dimension: '72x60x7"', price: 22073},
                    {dimension: '75x60x7"', price: 22993},
                    {dimension: '78x60x7"', price: 23913}
                ]
            },
            {
                size: "King",
                subsizes: [
                    {dimension: '75x72x7"', price: 27591},
                    {dimension: '78x72x7"', price: 28696}
                ]
            }
        ],
        category: "Mattress",
        brand: "Duroflex"
    },
    {
        name: "Propel Plus Pocket Spring Mattress With Euro Top",
        description: "Experience extra plushness with a luxurious Euro Top and advanced 3 zone copper-infused NRG layer for targeted support. Enjoy zero motion transfer for uninterrupted sleep, anti-stress fabric that shields against electromagnetic rays, and eco-conscious comfort with 40% recycled yarns. Reliable durability comes backed by a 10-year warranty for long-lasting peace of mind.",
        image: "https://www.duroflexworld.com/cdn/shop/files/1_6eb681a3-5281-4f5c-8d57-35a90d3a0d5b.jpg?v=1749639370&width=990",
        sizes: [
            {
                size: "Single",
                subsizes: [
                    {dimension: '72x36x8"', price: 15368},
                    {dimension: '75x36x8"', price: 16008}
                ]
            },
            {
                size: "Double",
                subsizes: [
                    {dimension: '72x48x8"', price: 20490},
                    {dimension: '75x48x8"', price: 21344}
                ]
            },
            {
                size: "Queen",
                subsizes: [
                    {dimension: '72x60x8"', price: 25613},
                    {dimension: '75x60x8"', price: 26680},
                    {dimension: '78x60x8"', price: 27747}
                ]
            },
            {
                size: "King",
                subsizes: [
                    {dimension: '75x72x8"', price: 32016},
                    {dimension: '78x72x8"', price: 33297}
                ]
            }
        ],
        category: "Mattress",
        brand: "Duroflex"
    },
    {
        name: "Boltt Spring Mattress",
        description: "Experience plush comfort with advanced 3 zone copper-infused NRG support and calming anti-stress technology for deeper relaxation. Eco-friendly fabric made from 40% recycled yarns combines sustainability with luxury, all backed by a durable 10-year warranty for lasting peace of mind.",
        image: "https://www.duroflexworld.com/cdn/shop/files/1_3e0f34d2-b56f-43d7-b3ed-abb400b79d19.jpg?v=1749639364&width=990",
        sizes: [
            {
                size: "Single",
                subsizes: [
                    {dimension: '72x36x7"', price: 12156},
                    {dimension: '75x36x7"', price: 12662}
                ]
            },
            {
                size: "Double",
                subsizes: [
                    {dimension: '72x48x7"', price: 16207},
                    {dimension: '75x48x7"', price: 16882}
                ]
            },
            {
                size: "Queen",
                subsizes: [
                    {dimension: '72x60x7"', price: 20259},
                    {dimension: '75x60x7"', price: 21103},
                    {dimension: '78x60x7"', price: 21947}
                ]
            },
            {
                size: "King",
                subsizes: [
                    {dimension: '75x72x7"', price: 25324},
                    {dimension: '78x72x7"', price: 26337}
                ]
            }
        ],
        category: "Mattress",
        brand: "Duroflex"
    },
    {
        name: "Boltt Plus Spring Mattress with Euro Top",
        description: "Experience extra plushness with a Euro Top and restful support from a 3 zone copper-infused NRG layer for optimal comfort and cooling. Keep calm all night with our anti stress technology, sleep sustainably on fabric made of 40% recycled yarns, and enjoy reliable durability backed by a 10-year warranty.",
        image: "https://www.duroflexworld.com/cdn/shop/files/1_be2214b9-ae86-4417-bb21-4192a09be532.jpg?v=1749639366&width=990",
        sizes: [
            {
                size: "Single",
                subsizes: [
                    {dimension: '72x36x8"', price: 14195},
                    {dimension: '75x36x8"', price: 15141}
                ]
            },
            {
                size: "Double",
                subsizes: [
                    {dimension: '72x48x8"', price: 19381},
                    {dimension: '75x48x8"', price: 20188}
                ]
            },
            {
                size: "Queen",
                subsizes: [
                    {dimension: '72x60x8"', price: 24226},
                    {dimension: '75x60x8"', price: 25236},
                    {dimension: '78x60x8"', price: 26245}
                ]
            },
            {
                size: "King",
                subsizes: [
                    {dimension: '75x72x8"', price: 30283},
                    {dimension: '78x72x8"', price: 31494}
                ]
            }
        ],
        category: "Mattress",
        brand: "Duroflex"
    },
    {
        name: "PU Rest Foam Mattress",
        description: "Enjoy peace of mind with a 25-year full replacement guarantee against manufacturing defects. Sleep healthier on CertiPUR certified foam made from eco-friendly, non-toxic materials, ensuring durability, comfort, and safety. The ContourNest Airflow Layer enhances breathability, keeping your mattress fresh and comfortable. Experience soft yet supportive firmness for restful sleep, while Centuary Protect antimicrobial shield maintains a clean, healthier sleep environment. High-quality foam construction ensures lasting durability and shape retention for years of comfort.",
        image: "https://m.media-amazon.com/images/I/51rBCH1qcNL._SX679_.jpg",
        sizes: [
            {
                size: "Single",
                subsizes: [
                    {dimension: '72x36x6"', price: 10954},
                    {dimension: '75x36x6"', price: 11411}
                ]
            },
            {
                size: "Double",
                subsizes: [
                    {dimension: '72x48x6"', price: 14139},
                    {dimension: '75x48x6"', price: 14729}
                ]
            },
            {
                size: "Queen",
                subsizes: [
                    {dimension: '72x60x6"', price: 17674},
                    {dimension: '75x60x6"', price: 18411},
                    {dimension: '78x60x6"', price: 19147}
                ]
            },
            {
                size: "King",
                subsizes: [
                    {dimension: '75x72x6"', price: 22095},
                    {dimension: '78x72x6"', price: 22977}
                ]
            }
        ],
        category: "Mattress",
        brand: "Centuary"
    },
    {
        name: "Ortho Active",
        description: "Memory Foam adapts to your body shape for personalized comfort and effective pressure relief. Copper Gel Foam provides cooling benefits by dissipating heat and offers antimicrobial properties to maintain a fresher, healthier sleep environment. Rebonded Foam enhances body support and durability for lasting comfort. Rubberized Coir promotes natural breathability and firm support, ensuring a balanced and restful sleep experience. Together, these materials combine advanced comfort, hygiene, and support features for an optimal mattress.",
        image: "https://www.centuaryindia.com/wp-content/uploads/2022/11/Ortho-active-mood-shot-_-Sania-copy.jpg",
        sizes: [
            {
                size: "Single",
                subsizes: [
                    {dimension: '72x36x6"', price: 15426},
                    {dimension: '75x36x6"', price: 15948}
                ]
            },
            {
                size: "Double",
                subsizes: [
                    {dimension: '72x48x6"', price: 19656},
                    {dimension: '75x48x6"', price: 20368}
                ]
            },
            {
                size: "Queen",
                subsizes: [
                    {dimension: '72x60x6"', price: 24798},
                    {dimension: '75x60x6"', price: 25672},
                    {dimension: '78x60x6"', price: 26802}
                ]
            },
            {
                size: "King",
                subsizes: [
                    {dimension: '75x72x6"', price: 31136},
                    {dimension: '78x72x6"', price: 32393}
                ]
            }
        ],
        category: "Mattress",
        brand: "Centuary"
    },
    {
        name: "Silver Line",
        description: "",
        image: "https://m.media-amazon.com/images/I/51rBCH1qcNL._SX679_.jpg", //change the url
        sizes: [
            {
                size: "Single",
                subsizes: [
                    {dimension: '72x36x4"', price: 4980},
                    {dimension: '75x36x4"', price: 5190}
                ]
            },
            {
                size: "Double",
                subsizes: [
                    {dimension: '72x48x4"', price: 6630},
                    {dimension: '75x48x4"', price: 6900}
                ]
            },
            {
                size: "Queen",
                subsizes: [
                    {dimension: '72x60x4"', price: 8280},
                    {dimension: '75x60x4"', price: 8620},
                    {dimension: '78x60x4"', price: 8970}
                ]
            },
            {
                size: "King",
                subsizes: [
                    {dimension: '75x72x4"', price: 10350},
                    {dimension: '78x72x4"', price: 11220}
                ]
            }
        ],
        category: "Mattress",
        brand: "Coir-on"
    },
    {
        name: "Millennium Plus ",
        description: "",
        image: "https://m.media-amazon.com/images/I/51rBCH1qcNL._SX679_.jpg", //change the url
        sizes: [
            {
                size: "Single",
                subsizes: [
                    {dimension: '72x36x5"', price: 8180},
                    {dimension: '75x36x5"', price: 8520},
                    {dimension: '72x36x6"', price: 10070},
                    {dimension: '75x36x6"', price: 10490},
                ]
            },
            {
                size: "Double",
                subsizes: [
                    {dimension: '72x48x5"', price: 10910},
                    {dimension: '72x48x6"', price: 13420},
                    {dimension: '75x48x5"', price: 11360},
                    {dimension: '75x48x6"', price: 13980},
                ]
            },
            {
                size: "Queen",
                subsizes: [
                    {dimension: '72x60x5"', price: 13640},
                    {dimension: '72x60x6"', price: 16780},
                    {dimension: '75x60x5"', price: 14200},
                    {dimension: '75x60x6"', price: 17470},
                    {dimension: '78x60x5"', price: 14770},
                    {dimension: '78x60x6"', price: 18170}
                ]
            },
            {
                size: "King",
                subsizes: [
                    {dimension: '75x72x5"', price: 17040},
                    {dimension: '75x72x6"', price: 20970},
                    {dimension: '78x72x5"', price: 17730},
                    {dimension: '78x72x6"', price: 21810}
                ]
            }
        ],
        category: "Mattress",
        brand: "Coir-on"
    },
    {
        name: "Bounzy",
        description: "",
        image: "https://m.media-amazon.com/images/I/51rBCH1qcNL._SX679_.jpg", //change the url
        sizes: [
            {
                size: "Single",
                subsizes: [
                    {dimension: '72x36x6"', price: 8615},
                    {dimension: '75x36x6"', price: 8975},
                ]
            },
            {
                size: "Double",
                subsizes: [
                    {dimension: '72x48x6"', price: 11485},
                    {dimension: '75x48x6"', price: 11965}
                ]
            },
            {
                size: "Queen",
                subsizes: [
                    {dimension: '72x60x6"', price: 14360},
                    {dimension: '75x60x6"', price: 14955},
                    {dimension: '78x60x6"', price: 15555}
                ]
            },
            {
                size: "King",
                subsizes: [
                    {dimension: '75x72x6"', price: 17950},
                    {dimension: '78x72x6"', price: 18665}
                ]
            }
        ],
        category: "Mattress",
        brand: "Coir-on"
    },
    {
        name: "Switch - 2-in-1 Dual Comfort High-Density Foam Mattress",
        description: "The Sleepyhead Switch dual-sided foam mattress offers dual-sided opulence with two distinct comfort levels in one mattress, catering to diverse sleep preferences. One side features plush advanced convoluted comfort foam for a soft, cloud-like feel, while the other side has firm ultra support foam that ensures proper body alignment and lasting durability. This innovative foam construction allows effortless switching between two magnificent mattresses in one, delivering tailored luxury and an elevated sleep experience without compromise.",
        image: "https://mysleepyhead.com/media/catalog/product/1/_/1_switch.jpg?auto=webp&format=pjpg&width=160&height=160&fit=cover",
        sizes: [
            {
                size: "Single",
                subsizes: [
                    {dimension: '72x36x6"', price: 9999},
                    {dimension: '75x36x6"', price: 9999},
                ]
            },
            {
                size: "Double",
                subsizes: [
                    {dimension: '72x48x6"', price: 11499},
                    {dimension: '75x48x6"', price: 11499}
                ]
            },
            {
                size: "Queen",
                subsizes: [
                    {dimension: '72x60x6"', price: 13499},
                    {dimension: '75x60x6"', price: 13499},
                    {dimension: '78x60x6"', price: 13499}
                ]
            },
            {
                size: "King",
                subsizes: [
                    {dimension: '75x72x6"', price: 15499},
                    {dimension: '78x72x6"', price: 15499}
                ]
            }
        ],
        category: "Mattress",
        brand: "Sleepy Head"
    },
    {
        name: "Prime - Premium BodyIQ Orthopedic Memory Foam Mattress",
        description: "BodyIQ Orthopedic Memory Foam is India's exclusive innovation crafted through advanced scientific processes to intelligently adapt to any sleeping posture, providing unmatched personalized comfort and optimal orthopedic support. This memory foam uniquely offers zero motion transfer, effectively isolating and absorbing movement to prevent disturbances from your partner's movements, ensuring a peaceful and restful sleep experience.",
        image: "https://mysleepyhead.com/media/catalog/product/p/r/prime_lifestyle_1_1_1.jpg?auto=webp&format=pjpg&width=160&height=160&fit=cover",
        sizes: [
            {
                size: "Single",
                subsizes: [
                    {dimension: '72x36x6"', price: 11999},
                    {dimension: '75x36x6"', price: 8975},
                    {dimension: '72x36x8"', price: 13499},
                    {dimension: '75x36x8"', price: 13499}
                ]
            },
            {
                size: "Double",
                subsizes: [
                    {dimension: '72x48x6"', price: 13999},
                    {dimension: '75x48x6"', price: 13999},
                    {dimension: '72x48x8"', price: 15999},
                    {dimension: '75x48x8"', price: 15999},
                ]
            },
            {
                size: "Queen",
                subsizes: [
                    {dimension: '72x60x6"', price: 16999},
                    {dimension: '75x60x6"', price: 16999},
                    {dimension: '78x60x6"', price: 16999},
                    {dimension: '72x60x8"', price: 18999},
                    {dimension: '75x60x8"', price: 18999},
                    {dimension: '78x60x8"', price: 18999}
                ]
            },
            {
                size: "King",
                subsizes: [
                    {dimension: '75x72x6"', price: 18999},
                    {dimension: '78x72x6"', price: 18999},
                    {dimension: '75x72x8"', price: 21499},
                    {dimension: '78x72x8"', price: 21499}
                ]
            }
        ],
        category: "Mattress",
        brand: "Sleepy Head"
    },
    

]

const seedDB = async ()=>{
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Database seeded");
    mongoose.connection.close();
};

seedDB();