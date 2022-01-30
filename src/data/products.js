import bottle from './bottle.png';
import socks from './socks.png';
import clock from './clock.png';
import shirt1 from './shirt-1.png';
import top from './top.png';
import hoodie from './hoodie.png';
import sweatshirt from './sweatshirt.png';
import lamp from './lamp.png';
import vase from './vase.png';
import cardigan from './cardigan.png';
import teapot from './teapot.png';
import camera from './camera.png';
import radio from './radio.png';
import headphones from './headphones.png';
import record_player from './record_player.png';
import vase2 from './vase2.png';


export const products = [
    {
      id: '1',
      title: 'Stainless Steel Water Bottle',
      description:
        'TWater bottle in stainless steel with a matte finish and screw-top cap. Capacity 16 1/2 fl. oz.',
      price: 20,
      imageUrl:
        bottle,
      category: 'Accessories',
      inventory: 10,
      background: '#E7E7E7'
    },
    {
      id: '2',
      title: 'Smoked Glass Table Lamp',
      description:
        'Set a modern atmosphere in your space with this table lamp, featuring a metal structure with a bent neck suspending an integrated tinted glass shade that offers a glowing ambiance.',
      price: 240,
      imageUrl: lamp,
      category: 'Home',
      inventory: 3,
      background: '#EDE7E9'
    },
    {
      id: '3',
      title: 'Fruit Pattern Sock',
      description: "Crew socks topped with a fruits motif. Cotton stretch fabrication with ribbing trim at the ankle cuff.",
      price: 12,
      imageUrl: socks,
      category: 'Accessories',
      inventory: 4,
      background: '#0D0B0C'
    },
    {
      id: '4',
      title: 'Cloudnola Factory Wall Clock',
      description:
        "Round wall clock with a colorful rimmed frame and retro numbered face topped with two-hand movement.",
      price: 120,
      imageUrl: clock,
      category: 'Home',
      inventory: 3,
      background: '#B8D1E1'
    },
    {
      id: '5',
      title: 'Grapefruit Tee',
      description:
        "Graphic tee by Altru Apparel crafted from 100% cotton in a standard fit with short sleeves and a ribbed knit crew neck.",
      price: 35,
      imageUrl: shirt1,
      category: 'Clothing',
      inventory: 6,
      background: '#EDE7E9'
    },
    {
      id: '6',
      title: 'Medium Support Sports Bralette',
      description: "Racerback sports bralette with medium support, suitable for moderate-intensity workouts. Fast-drying fabric helps keep you dry and cool while exercising. ",
      price: 30,
      imageUrl: top,
      category: 'Clothing',
      inventory: 9,
      background: '#0D0B0C'
    },
    {
      id: '7',
      title: "Slim Fit Jersey Shirt",
      description: "Slim-fit shirt in soft, cotton-blend jersey. Round neck and long sleeves.",
      price: 30,
      imageUrl: sweatshirt,
      category: 'Clothing',
      inventory: 3,
      background: '#B8D1E1'
    },
    {
      id: '8',
      title: "Relaxed-fit Hoodie",
      description:
        'Relaxed-fit sweatshirt hoodie in cotton-blend fabric. Lined drawstring hood, kangaroo pocket, long sleeves, and ribbing at cuffs and hem. Soft, brushed inside.',
      price: 65,
      imageUrl: hoodie,
      category: 'Clothing',
      inventory: 12,
      background: '#E7E7E7'
    },
    {
      id: '9',
      title: 'Lomography La Sardina Camera',
      description: 'From wide-angle shooting to multiple exposure modes, this 35mm camera from Lomography features a compact build and intuitive use that offers endless opportunities for creativity.',
      price: 290,
      imageUrl: camera,
      category: 'Electronics',
      inventory: 2,
      background: '#0D0B0C'
    },
    {
      id: '10',
      title: "Yara Vase",
      description: 'modern miniature porcelain vase in a chic matte finish with glazed interior, perfect for fresh or dry arrangements, or as a sculptural object.',
      price: 65,
      imageUrl: vase,
      category: 'Home',
      inventory: 4,
      background: '#B8D1E1'
    },
    {
      id: '11',
      title: 'Glass teapot',
      description: 'Oval teapot in glass with a handle and spout. Removable metal tea strainer with a lid. Diameter at top 2 3/4 in., height 5 in., diameter approx. 7 in.',
      price: 120,
      imageUrl: teapot,
      category: 'Home',
      inventory: 3,
      background: '#E7E7E7'
    },
    {
      id: '12',
      title: 'Knitted Zip Cardigan',
      description: 'Knitted zip cardigan with duo chest patch pockets and relaxed sleeves.',
      price: 90,
      imageUrl: cardigan,
      category: 'Clothing',
      inventory: 6,
      background: '#EDE7E9'
    },
    {
      id: '13',
      title: 'Crosley Rambler Retro Radio',
      description: 'Have a blast from the past with this retro-inspired Rambler radio by Crosley. Listen to your favorite AM/FM radio stations or connect your device with its Bluetooth function.',
      price: 75,
      imageUrl: radio,
      category: 'Electronics',
      inventory: 2,
      background: '#E7E7E7'
    },
    {
      id: '14',
      title: 'Frends Wireless Headphones',
      description: 'Make a statement as you listen to your best playlists with these wireless Bluetooth headphones by Frends. With its sleek design and interchangeable caps, you can mix up your headphones to fit your look perfectly.',
      price: 200,
      imageUrl: headphones,
      category: 'Electronics',
      inventory: 5,
      background: '#EDE7E9'
    },
    {
      id: '15',
      title: 'Crosley Record Player',
      description: 'Bluetooth-compatible and portable vintage-inspired turntable housed in a retro-look briefcase design from the experts at Crosley. This entry-level record player is perfect for playing your favorite vinyl LPs or streaming music from your digital playlist right to the speakers. Comes complete with a headphone jack, RCA audio out, and features dynamic & full-range stereo speakers.',
      price: 180,
      imageUrl: record_player,
      category: 'Electronics',
      inventory: 2,
      background: '#0D0B0C'
    },
    {
      id: '16',
      title: 'Patterned Glass Vase',
      description: 'Vase in patterned glass. Height 5 3/4 in. Diameter 3 3/4 in.',
      price: 40,
      imageUrl: vase2,
      category: 'Home',
      inventory: 6,
      background: '#B8D1E1'
    }
]
  