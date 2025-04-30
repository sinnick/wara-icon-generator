import { useState, useEffect } from 'react';
// Importaciones ampliadas de colecciones de iconos
import * as Ai from "react-icons/ai"; // Ant Design Icons
import * as Bi from "react-icons/bi"; // BoxIcons
import * as Bs from "react-icons/bs"; // Bootstrap Icons
import * as Cg from "react-icons/cg"; // Custom Icons
import * as Fa from "react-icons/fa"; // Font Awesome 5
import * as Fc from "react-icons/fc"; // Flat Color Icons
import * as Fi from "react-icons/fi"; // Feather Icons
import * as Gi from "react-icons/gi"; // Game Icons
import * as Go from "react-icons/go"; // Github Octicons
import * as Gr from "react-icons/gr"; // Grommet Icons
import * as Hi from "react-icons/hi"; // Heroicons
import * as Im from "react-icons/im"; // IcoMoon
import * as Io from "react-icons/io"; // Ionicons 4
import * as Io5 from "react-icons/io5"; // Ionicons 5
import * as Lu from "react-icons/lu"; // Lucide Icons
import * as Md from "react-icons/md"; // Material Design Icons
import * as Pi from "react-icons/pi"; // Phosphor Icons
import * as Ri from "react-icons/ri"; // Remix Icons
import * as Si from "react-icons/si"; // Simple Icons (marcas)
import * as Tb from "react-icons/tb"; // Tabler Icons
import * as Ti from "react-icons/ti"; // Typicons
import * as Vsc from "react-icons/vsc"; // VS Code Icons
import * as Wi from "react-icons/wi"; // Weather Icons
import './IconSelector.css';

// Categorías de iconos organizadas para facilitar la navegación
const iconCategories = [
  {
    name: "Esenciales",
    icons: {
      // Iconos básicos y esenciales
      check: Md.MdCheck,
      cross: Md.MdClose,
      plus: Md.MdAdd,
      minus: Md.MdRemove,
      menu: Md.MdMenu,
      search: Md.MdSearch,
      settings: Md.MdSettings,
      home: Md.MdHome,
      user: Md.MdPerson,
      edit: Md.MdEdit,
      delete: Md.MdDelete,
      save: Md.MdSave,
      download: Md.MdFileDownload,
      upload: Md.MdFileUpload,
    }
  },
  {
    name: "Estado y Alertas",
    icons: {
      info: Md.MdInfo,
      warning: Md.MdWarning,
      error: Md.MdError,
      success: Md.MdCheckCircle,
      help: Md.MdHelpOutline,
      star: Md.MdStar,
      favorite: Md.MdFavorite,
      notification: Md.MdNotifications,
      thumbUp: Md.MdThumbUp,
      thumbDown: Md.MdThumbDown,
      lock: Md.MdLock,
      lockOpen: Md.MdLockOpen,
      visibility: Md.MdVisibility,
      visibilityOff: Md.MdVisibilityOff,
    }
  },
  {
    name: "Navegación",
    icons: {
      arrowLeft: Md.MdArrowBack,
      arrowRight: Md.MdArrowForward,
      arrowUp: Md.MdArrowUpward,
      arrowDown: Md.MdArrowDownward,
      chevronLeft: Md.MdChevronLeft,
      chevronRight: Md.MdChevronRight,
      chevronUp: Md.MdChevronUp,
      chevronDown: Md.MdChevronDown,
      expand: Md.MdExpandMore,
      collapse: Md.MdExpandLess,
      refresh: Md.MdRefresh,
      undo: Md.MdUndo,
      redo: Md.MdRedo,
      menu: Md.MdMenu,
    }
  },
  {
    name: "Comunicación",
    icons: {
      email: Md.MdEmail,
      mail: Md.MdMail,
      chat: Md.MdChat,
      message: Md.MdMessage,
      send: Md.MdSend,
      phone: Md.MdPhone,
      call: Md.MdCall,
      videocam: Md.MdVideocam,
      mic: Md.MdMic,
      micOff: Md.MdMicOff,
      comment: Md.MdComment,
      forum: Md.MdForum,
      share: Md.MdShare,
    }
  },
  {
    name: "Multimedia",
    icons: {
      play: Md.MdPlayArrow,
      pause: Md.MdPause,
      stop: Md.MdStop,
      skipNext: Md.MdSkipNext,
      skipPrevious: Md.MdSkipPrevious,
      volumeUp: Md.MdVolumeUp,
      volumeDown: Md.MdVolumeDown,
      volumeMute: Md.MdVolumeMute,
      image: Md.MdImage,
      photo: Md.MdPhoto,
      camera: Md.MdCamera,
      movie: Md.MdMovie,
      music: Md.MdMusicNote,
    }
  },
  {
    name: "Archivos",
    icons: {
      file: Bi.BiFile,
      fileText: Bi.BiFileBlank,
      document: Md.MdDescription,
      folder: Bi.BiFolder,
      folderOpen: Bi.BiFolderOpen,
      cloudUpload: Md.MdCloudUpload,
      cloudDownload: Md.MdCloudDownload,
      attachment: Md.MdAttachFile,
      zip: Bi.BiArchive,
      pdf: Bi.BiFilePdf,
      excel: Bi.BiFileSpreadsheet,
      word: Bi.BiFileDoc,
      presentation: Bi.BiSlideshow,
    }
  },
  {
    name: "Dispositivos y Hardware",
    icons: {
      laptop: Md.MdLaptop,
      desktop: Md.MdDesktopWindows,
      smartphone: Md.MdSmartphone,
      tablet: Md.MdTablet,
      keyboard: Md.MdKeyboard,
      mouse: Bi.BiMouse,
      printer: Bi.BiPrinter,
      wifi: Md.MdWifi,
      bluetooth: Md.MdBluetooth,
      battery: Md.MdBatteryFull,
      batteryLow: Md.MdBatteryAlert,
      sd: Md.MdSdCard,
      usb: Md.MdUsb,
    }
  },
  {
    name: "Compras y Comercio",
    icons: {
      cart: Md.MdShoppingCart,
      bag: Md.MdShoppingBag,
      store: Md.MdStore,
      creditCard: Md.MdCreditCard,
      wallet: Md.MdAccountBalanceWallet,
      gift: Bi.BiGift,
      tag: Md.MdLocalOffer,
      barcode: Bi.BiBarcode,
      qrCode: Md.MdQrCode,
      receipt: Md.MdReceipt,
      money: Bi.BiMoney,
      coupon: Bi.BiCoupon,
    }
  },
  {
    name: "Transporte",
    icons: {
      car: Md.MdDirectionsCar,
      bus: Md.MdDirectionsBus,
      train: Md.MdTrain,
      flight: Md.MdFlight,
      bike: Md.MdDirectionsBike,
      walk: Md.MdDirectionsWalk,
      run: Md.MdDirectionsRun,
      boat: Bi.BiWater,
      map: Md.MdMap,
      locationOn: Md.MdLocationOn,
      navigation: Md.MdNavigation,
      compass: Bi.BiCompass,
      parking: Md.MdLocalParking,
    }
  },
  {
    name: "Tiempo y Clima",
    icons: {
      calendar: Md.MdCalendarToday,
      event: Md.MdEvent,
      today: Md.MdToday,
      watch: Md.MdWatch,
      alarmClock: Md.MdAccessAlarm,
      sun: Wi.WiDaySunny,
      moon: Wi.WiNightClear,
      cloud: Wi.WiCloud,
      rain: Wi.WiRain,
      snow: Wi.WiSnow,
      storm: Wi.WiThunderstorm,
      temperature: Wi.WiThermometer,
      humidity: Wi.WiHumidity,
      fog: Wi.WiFog,
    }
  },
  {
    name: "Redes Sociales",
    icons: {
      facebook: Fa.FaFacebook,
      twitter: Fa.FaTwitter,
      instagram: Fa.FaInstagram,
      youtube: Fa.FaYoutube,
      linkedin: Fa.FaLinkedin,
      github: Fa.FaGithub,
      pinterest: Fa.FaPinterest,
      reddit: Fa.FaReddit,
      twitch: Fa.FaTwitch,
      whatsapp: Fa.FaWhatsapp,
      telegram: Fa.FaTelegram,
      discord: Fa.FaDiscord,
      snapchat: Fa.FaSnapchat,
      tikTok: Fa.FaTiktok,
    }
  },
  {
    name: "Decorativos",
    icons: {
      heart: Fa.FaHeart,
      crown: Gi.GiCrown,
      diamond: Gi.GiDiamonds,
      flame: Gi.GiFlame,
      leaf: Fa.FaLeaf,
      paw: Fa.FaPaw,
      anchor: Fa.FaAnchor,
      coffee: Fa.FaCoffee,
      beer: Fa.FaBeer,
      pizza: Fa.FaPizzaSlice,
      cake: Fa.FaBirthdayCake,
      guitar: Fa.FaGuitar,
      rocket: Fa.FaRocket,
      gamepad: Fa.FaGamepad,
    }
  },
];

// Aplanar todas las categorías en un solo objeto para facilitar la búsqueda y acceso
const allIcons = iconCategories.reduce((acc, category) => {
  return { ...acc, ...category.icons };
}, {});

function IconSelector({ selectedIcon, onSelectIcon, iconColor }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // Evitar scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  // Filtrar iconos según el término de búsqueda y/o categoría
  let filteredIcons = [];
  
  if (searchTerm) {
    // Si hay término de búsqueda, buscar en todos los iconos
    filteredIcons = Object.entries(allIcons).filter(([name]) => 
      name.toLowerCase().includes(searchTerm.toLowerCase())
    ).filter(([_, Icon]) => Icon !== undefined); // Filtrar cualquier icono undefined
  } else if (selectedCategory) {
    // Si hay categoría seleccionada, mostrar solo esa categoría
    const category = iconCategories.find(cat => cat.name === selectedCategory);
    if (category) {
      filteredIcons = Object.entries(category.icons).filter(([_, Icon]) => Icon !== undefined);
    }
  } else {
    // Si no hay búsqueda ni categoría, mostrar una selección de iconos populares
    filteredIcons = Object.entries(iconCategories[0].icons)
      .filter(([_, Icon]) => Icon !== undefined)
      .slice(0, 12);
  }
  
  const IconComponent = allIcons[selectedIcon];
  
  return (
    <div className="icon-selector">
      <div 
        className="selected-icon" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {IconComponent && <IconComponent size={24} color={iconColor} />}
        <span>{selectedIcon}</span>
      </div>
      
      {isOpen && (
        <div className="icon-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="icon-modal" onClick={(e) => e.stopPropagation()}>
            <div className="icon-modal-header">
              <h3>Selecciona un Icono</h3>
              <button className="modal-close-button" onClick={() => setIsOpen(false)}>
                &times;
              </button>
            </div>
            
            <div className="icon-modal-search">
              <input 
                type="text" 
                placeholder="Buscar icono..." 
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setSelectedCategory(null); // Limpiar categoría al buscar
                }}
                className="icon-search"
                autoFocus
              />
            </div>
            
            {!searchTerm && (
              <div className="categories-row">
                <button 
                  className={`category-button ${selectedCategory === null ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(null)}
                >
                  Populares
                </button>
                {iconCategories.map((category) => (
                  <button 
                    key={category.name}
                    className={`category-button ${selectedCategory === category.name ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            )}
            
            <div className="icons-grid">
              {filteredIcons.map(([name, Icon]) => (
                <div 
                  key={name}
                  className={`icon-item ${selectedIcon === name ? 'selected' : ''}`}
                  onClick={() => {
                    onSelectIcon(name);
                    setIsOpen(false);
                  }}
                  title={name}
                >
                  <Icon size={32} /> {/* Aumentado el tamaño para mejor visibilidad */}
                  <span>{name}</span>
                </div>
              ))}
              {filteredIcons.length === 0 && (
                <div className="no-results">No se encontraron iconos</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Método estático para obtener un componente de icono por nombre
IconSelector.getIconComponent = function(iconName) {
  return allIcons[iconName] || null;
};

// Componente para renderizar un icono específico
IconSelector.Icon = function IconDisplay({ iconName, size, color }) {
  const IconComponent = allIcons[iconName];
  
  if (!IconComponent) {
    return null;
  }
  
  // Asegurar que el tamaño se aplique correctamente
  const sizeValue = typeof size === 'string' ? size : `${size}px`;
  
  return (
    <div 
      className="icon-display" 
      style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
      }}
    >
      <IconComponent 
        size={sizeValue} 
        color={color}
        style={{
          width: sizeValue,
          height: sizeValue,
          display: 'block',
          flexShrink: 0
        }}
      />
    </div>
  );
};

export default IconSelector;